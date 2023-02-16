<?php

namespace App\Services;

use Google_Client;
use Google_Service_YouTube;
use Illuminate\Http\Request;

class PlaylistExtractionService {
    private $playlistItemsResponse;
    public function init($playlist_id){
        if ($playlist_id != null) {
            $client = new Google_Client();
            $client->setDeveloperKey(env('YOUTUBE_API_KEY'));
            $youtube = new Google_Service_YouTube($client);
            $this->playlistItemsResponse = $youtube->playlistItems->listPlaylistItems('snippet', array(
                'playlistId' => $playlist_id,
                'maxResults' => 50
            ));
        }
    }
    public function getVideosOnly(){
        $videos = [];
        foreach ($this->playlistItemsResponse['items'] as $playlistItem) {
            $id = $playlistItem['snippet']['resourceId']['videoId'];
            $video =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'. $id .'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            $videos[] =  $video;
        }
        return $videos;
    }
    public function getVideosAndNames(){
        $videos = [];
        foreach ($this->playlistItemsResponse['items'] as $playlistItem) {
            $id = $playlistItem['snippet']['resourceId']['videoId'];
            $video =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'. $id .'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            $videos[] =  [$playlistItem['snippet']['title'], $video];
        }
        return $videos;
    }
}
