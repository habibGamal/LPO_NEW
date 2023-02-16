<?php

namespace App\Http\Controllers;

use App\Models\Assets;
use App\Services\ImageService;
use App\Services\PlaylistExtractionService;
use App\Services\VideosGroupsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AssetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($name)
    {
        $assets = Assets::where('name', $name)->first();
        if ($assets == null)
            return back();
        if ($assets->assets_type == 'images')
            return Inertia::render('Assets/ImagesIndex', [
                'assetsDB' => $assets
            ]);
        if ($assets->assets_type == 'videos')
            return Inertia::render('Assets/VideosIndex', [
                'assetsDB' => $assets
            ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAssets($name)
    {
        return Inertia::render('Assets', [
            'assetsDB' => Assets::where('name', $name)->first()
        ]);
    }

    /**
     * Insert assets.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function insertImages(Request $request, ImageService $imageService)
    {
        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => Rule::in(['images']),
            'content' => 'required|array',
        ]);
        $assets = Assets::where('name', $request->name)->first();
        $content = $imageService->pathDataStructure($assets->content);
        $content->append($request->content);
        $assets->content = json_encode($content->getImages());
        $assets->save();
        return back();
    }
    /**
     * Insert assets.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function insertVideosGroup(Request $request, VideosGroupsService $videosService, PlaylistExtractionService $playlistService)
    {
        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => Rule::in(['videos']),
            'group_name' => 'required|string',
            'videos' => 'array',
            'playlist_id' => 'string',
        ]);
        if($request->videos === null && !$request->playlist_id)
            $request->validate([
                'playlist_id' => 'required|string',
            ],
            [
                'playlist_id' => 'Either videos or playlist id is required',
            ]);

        $assets = Assets::where('name', $request->name)->first();

        $content = $videosService->from($assets->content);

        $videosFromPlaylist = [];
        if ($request->playlist_id) {
            $playlistService->init($request->playlist_id);
            $videosFromPlaylist = $playlistService->getVideosOnly();
        }
        $videosFromForm = $request->videos === null ? [] : $request->videos;
        // join videos from playlist and videos from request
        $videos = array_merge($videosFromPlaylist, $videosFromForm);
        $content->append($request->group_name,  $videos);
        $assets->content = $content->getData();
        $assets->save();
        return back();
    }


    /**
     * Insert assets.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function editImages(Request $request, ImageService $imageService)
    {

        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => Rule::in(['images']),
            'content' => 'required|array',
        ]);
        $assets = Assets::where('name', $request->name)->first();
        $content = $imageService->pathDataStructure($assets->content);
        $content->edit($request->content);
        $assets->content = json_encode($content->getImages());
        $assets->save();
        return back();
    }
    /**
     * edit assets.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function editVideosGroup(Request $request, VideosGroupsService $videosService, PlaylistExtractionService $playlistService)
    {
        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => Rule::in(['videos']),
            'group_id' => 'required|string',
            'group_name' => 'required|string',
            'videos' => 'required|array',
            'playlist_id' => 'string',
        ]);
        $assets = Assets::where('name', $request->name)->first();
        $content = $videosService->from($assets->content);

        $videosFromPlaylist = [];
        if ($request->playlist_id) {
            $playlistService->init($request->playlist_id);
            $videosFromPlaylist = $playlistService->getVideosOnly();
        }
        $videosFromForm = $request->videos === null ? [] : $request->videos;
        // join videos from playlist and videos from request
        $videos = array_merge($videosFromPlaylist, $videosFromForm);
        $content->edit($request->group_id, $request->group_name, $videos);
        $assets->content = $content->getData();
        $assets->save();
        return back();
    }
    /**
     * remove assets.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function removeVideosGroup(Request $request, VideosGroupsService $videosService)
    {
        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => Rule::in(['videos']),
            'group_id' => 'required|string',
        ]);
        $assets = Assets::where('name', $request->name)->first();
        $content = $videosService->from($assets->content);
        $content->delete($request->group_id);
        $assets->content = $content->getData();
        $assets->save();
        return back();
    }


    public function removeImage(Request $request, ImageService $imageService)
    {
        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => Rule::in(['images']),
            'node_id' => 'required|string',
        ]);
        $assets = Assets::where('name', $request->name)->first();
        $content = $imageService->pathDataStructure($assets->content);
        $content->remove($request->node_id);
        $assets->content = json_encode($content->getImages());
        $assets->save();
        return back();
    }
}
