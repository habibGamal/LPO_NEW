<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($category)
    {
        if ($category === 'activity')
            return Inertia::render('Meetings/Index', ['meetingsDB' => Meeting::whereIn('state', ['not_started', 'in_meeting'])->get()]);
        if ($category === 'preivous')
            return Inertia::render('Meetings/Index', ['meetingsDB' => Meeting::whereIn('state', ['ended'])->get()]);
        if ($category === 'history')
            return Inertia::render('Meetings/History', ['meetingsDB' => Meeting::select(['id', 'name', 'date', 'state'])->where('state', '!=', 'offline')->get()]);
        if ($category === 'offline')
            return Inertia::render('Meetings/Index', ['meetingsDB' => Meeting::where('state','offline')->get()]);
        return back();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Meetings/Editor', ['meetingsDB' => Meeting::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, ImageService $imageService)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'meeting_link' => ['required', 'string'],
            'date' => ['required', 'date'],
            'state' => ['required', Rule::in(['not_started', 'in_meeting', 'ended', 'offline']),],
            'videos' => ['array', 'nullable'],
            'videos.*' => ['string']
        ]);

        $assets = $imageService->pathsStructure();
        if ($request->hasFile('assets'))
            $assets->create($request->assets);

        // videos
        $videos = $request->input('videos');
        if ($videos == null) {
            $videos = [];
        }
        Meeting::create([
            'name' => $request->input('name'),
            'link' => $request->input('meeting_link'),
            'date' => $request->input('date'),
            'state' => $request->input('state'),
            'assets' => json_encode($assets->getImages()),
            'videos' => json_encode($videos),
        ]);
        return Redirect::route('meetings.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function show(Meeting $meeting)
    {

        return Inertia::render('Meetings/Single', ['meetingDB' => $meeting]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function edit(Meeting $meeting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Meeting $meeting, ImageService $imageService)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'meeting_link' => ['required', 'string'],
            'date' => ['required', 'date'],
            'state' => ['required', Rule::in(['not_started', 'in_meeting', 'ended', 'offline']),],
            'videos' => ['array', 'nullable'],
            'videos.*' => ['string']
        ]);
        $assets = $imageService->pathsStructure($meeting->assets);
        // deleted assets
        if (isset($request->removedAssets))
            $assets->remove($request->removedAssets);
        // add new assets
        if ($request->hasFile('assets'))
            $assets->append($request->assets);
        // videos
        $videos = $request->input('videos');
        if ($videos == null) {
            $videos = [];
        }
        $meeting->name = $request->input('name');
        $meeting->link = $request->input('meeting_link');
        $meeting->date = $request->input('date');
        $meeting->state = $request->input('state');
        $meeting->assets = $assets->getImages();
        $meeting->videos = json_encode($videos);
        $meeting->save();
        return Redirect::route('meetings.create');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Meeting $meeting)
    {
        $meeting->delete();
        return Redirect::route('meetings.create');
    }
}
