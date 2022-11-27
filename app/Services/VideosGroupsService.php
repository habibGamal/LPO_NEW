<?php

namespace App\Services;

/**
 * given structure

  "group_name" => "gre"
  "videos" => array:3 [▼
    0 => "<iframe width="560" height="315" src="https://www.youtube.com/embed/Rumya2V8fR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; cl ▶"
    1 => "<iframe width="560" height="315" src="https://www.youtube.com/embed/Rumya2V8fR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; cl ▶"
    2 => "<iframe width="560" height="315" src="https://www.youtube.com/embed/Rumya2V8fR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; cl ▶"
  ]
 */
/**
 * Returned structure
 * {
 *      "id":{
 *          group_name:...
 *          videos:[iframes]
 *      },
 *      "id":{
 *          group_name:...
 *          videos:[iframes]
 *      },
 * }
 */
class VideosGroupsService {

    private $data;
    function __construct($data = '{}')
    {
        $this->data = json_decode($data,true);

    }
    function from($data){
        $this->data = json_decode($data,true);
        return $this;
    }
    /**
     * @var string $name
     * @var string[] $videos
     */
    function create($name,$videos){
        $this->data['#1']['name'] = $name;
        $this->data['#1']['videos'] = $videos;
        return $this;
    }
    /**
     * @var string $name
     * @var string[] $videos
     */
    function append($name,$videos){
        $lastId = array_key_last($this->data);
        if($lastId == null)
            return $this->create($name,$videos);
        $id = intval(str_replace('#', '', $lastId)) + 1;
        $this->data["#$id"]['name'] = $name;
        $this->data["#$id"]['videos'] = $videos;
        return $this;
    }
    /**
     * @var string $name
     * @var string[] $videos
     */
    function edit($id,$newName,$newVideos){
        $this->data[$id]['name'] = $newName;
        $this->data[$id]['videos'] = $newVideos;
        return $this;
    }
    function delete($id){
        unset($this->data[$id]);
        return $this;
    }
    function getData(){
        return json_encode($this->data);
    }
}
