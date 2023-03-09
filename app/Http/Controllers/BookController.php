<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Services\PlaylistExtractionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Google_Client;
use Google_Service_YouTube;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Material/Index', ['booksDB' => Book::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Material/Editor', ['booksDB' => Book::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, PlaylistExtractionService $playlistService)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'cover' => ['required', 'image'],
            'pdf' => ['required', 'string'],
            'video_name.*' => ['string'],
            'video_link.*' => ['string'],
            'playlist_id' => ['nullable','string'],
        ]);
        $videos_names = $request->input('video_name.*');
        $videos_links = $request->input('video_link.*');
        $videos = [];
        if (!empty($videos_names))
            foreach ($videos_names as $key => $name) {
                $videos[] = [$name, $videos_links[$key]];
            }
        $videosFromPlaylist = [];
        if ($request->playlist_id) {

            $playlistService->init($request->playlist_id);
            $videosFromPlaylist = $playlistService->getVideosAndNames();
        }

        $path = saveImageAndGetPath($request->file('cover'));
        Book::create([
            'name' => $request->input('name'),
            'cover' => $path,
            'pdf' => $request->input('pdf'),
            'videos' => json_encode(array_merge($videos, $videosFromPlaylist)),
        ]);
        return Redirect::route('books.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book, PlaylistExtractionService $playlistService)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'cover' => ['nullable', 'image'],
            'pdf' => ['required', 'string'],
            'video_name.*' => ['string'],
            'video_link.*' => ['string'],
            'playlist_id' => ['nullable','string']
        ]);

        $videos_names = $request->input('video_name.*');
        $videos_links = $request->input('video_link.*');
        $videos = [];
        if (!empty($videos_names))
            foreach ($videos_names as $key => $name) {
                $videos[] = [$name, $videos_links[$key]];
            }

        $videosFromPlaylist = [];
        if ($request->playlist_id) {
            $playlistService->init($request->playlist_id);
            $videosFromPlaylist = $playlistService->getVideosAndNames();
        }
        if ($request->hasFile('cover'))
            $book->cover = saveImageAndGetPath($request->file('cover'));

        $book->name = $request->input('name');
        $book->pdf = $request->input('pdf');
        $book->videos = json_encode(array_merge($videos,$videosFromPlaylist));

        $book->save();

        return Redirect::route('books.create');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book->delete();
    }
}
