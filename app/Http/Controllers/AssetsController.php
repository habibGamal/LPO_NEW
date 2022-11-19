<?php

namespace App\Http\Controllers;

use App\Models\Assets;
use App\Services\ImageService;
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
    public function index()
    {
        return Inertia::render('Assets');
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
    public function insert(Request $request, ImageService $imageService)
    {
        // -----------------------------
        $request->validate([
            'name' => 'required|string',
            'assets_type' => [Rule::in('images', 'videos')],
            'content' => 'required|array',
        ]);
        $assets = Assets::where('name', $request->name)->first();

        $content = $imageService->pathDataStructure($assets ? $assets->content : '[]');

        if ($assets == null) {
            $content->create($request->content);
            // dump($assets);
            // exit;
            Assets::create([
                'name' => $request->name,
                'assets_type' => $request->assets_type,
                'content' => json_encode($content->getImages()),
            ]);
        } else {
            $content->append($request->content);
            $assets->content = json_encode($content->getImages());
            $assets->save();
        }
        return back();
    }


    public function remove(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'content_item' => 'required|string'
        ]);
        $assets = Assets::where('name', $request->name);
        $content = json_decode($assets->content);
        // delete removed assets
        Storage::delete('/public/images/' . $request->content_item);
        unset($content[intval(array_search($assets, $content))]);
        $assets->content = json_encode($content);
        $assets->save();
        return back();
    }
}
