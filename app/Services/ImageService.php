<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

/**
 * get the data from db decoded and returned it decoded
 */
trait ImageHandler
{

    static protected $SAVE_PATH = 'public/images';

    protected function saveImageAndGetPath($image)
    {
        // Get filename with the extension
        $filenameWithExt = $image->getClientOriginalName();
        //Get just filename
        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        // Get just ext
        $extension = $image->getClientOriginalExtension();
        // Filename to store
        $fileNameToStore = $filename . '_' . time() . '.' . $extension;

        $image->storeAs(self::$SAVE_PATH, $fileNameToStore);

        return $fileNameToStore;
    }

    protected function removeImage($asset)
    {
        Storage::delete(self::$SAVE_PATH . $asset);
    }
}
class ImageService
{
    public function pathsStructure($images = '[]')
    {
        return new PathsStructure($images);
    }
    public function pathDataStructure($images = '[]')
    {
        return new PathDataStructure($images);
    }
}

/** [path1 , path2 , path3 ,....] */
class PathsStructure
{
    use ImageHandler;
    /**
     * @var string[];
     */
    private $existingImages;
    /**
     * save images and return paths
     * @param string $existingEncodedImages
     * @return PathsStructure
     */
    function __construct($existingEncodedImages = '[]')
    {
        $this->existingImages = json_decode($existingEncodedImages);
    }
    /**
     * save images and return paths
     * @param UploadedFile[] $images
     * @return string[]
     */
    function create($images)
    {
        foreach ($images as $image)
            $this->existingImages[] = $this->saveImageAndGetPath($image);
    }

    /**
     * append images to array of images
     * @param UploadedFile[] $images
     */
    function append($images)
    {
        foreach ($images as $image)
            $this->existingImages[] = $this->saveImageAndGetPath($image);
    }

    /**
     * delete images by its paths
     * @param string[] $imagesToRemove
     */
    function remove($imagesToRemove)
    {
        foreach ($imagesToRemove as $image) {
            $index = array_search($image, $this->existingImages);
            if ($index !== false) {
                $this->removeImage($image);
                unset($this->existingImages[intval($index)]);
            }
        }
    }

    function getImages()
    {
        return array_values($this->existingImages);
    }
}
/**
 * given structure
 * [
 *  0=>[
 *  image=>file,
 *  datafield=>any,
 *  datafield2=>any,
 *  datafield3=>any,
 * ]
 * ]
 */
/**
 * Returned structure
 * {
 *      "id":{
 *          path:...
 *          data:{...}
 *      },
 *      "id":{
 *          path:...
 *          data:{...}
 *      }
 * }
 */
class PathDataStructure
{
    use ImageHandler;
    /**
     * @var string[];
     */
    private $existingImages;
    /**
     * save images and return paths
     * @param string $existingEncodedImages
     * @return PathDataStructure
     */
    function __construct($existingEncodedImages = '[]')
    {
        $this->existingImages = json_decode($existingEncodedImages,true);
    }
    /**
     * save images and return paths
     * @param array $nodes
     * @return string[]
     */
    function create($nodes)
    {
        foreach ($nodes as $id => $node) {
            $this->existingImages["#$id"]['path'] = $this->saveImageAndGetPath($node['image']);
            unset($node['image']);
            $this->existingImages["#$id"]['data'] = $node;
        }
    }

    /**
     * append images to array of images
     * @param array $nodes
     */
    function append($nodes)
    {
        foreach ($nodes as $key => $node) {
            $lastId = array_key_last($this->existingImages);
            $id = intval(str_replace('#', '', $lastId)) + $key + 1;
            $this->existingImages["#$id"]['path'] = $this->saveImageAndGetPath($node['image']);
            unset($node['image']);
            $this->existingImages["#$id"]['data'] = $node;
        }
    }
    /**
     * editableNode is like normal node but have an id
     * @param array $editableNode
     */
    function edit($editableNode)
    {
        $node = &$this->existingImages[$editableNode['id']];
        if ($node['image'] != null)
            $node['path'] = $this->saveImageAndGetPath($editableNode['image']);
        unset($editableNode['image']);
        $node['data'] = $node;
    }
    /**
     * delete node by its id
     * @param string[] $nodeToRemove
     */
    function remove($nodeIdToRemove)
    {
        unset($this->existingImages[$nodeIdToRemove]);
    }

    function getImages()
    {
        return $this->existingImages;
    }
}
