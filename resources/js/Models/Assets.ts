import ImagesHandler from "../Helpers/ImagesHandler";

export type AssetsDB = {
    id: number,
    name: string,
    assets_type: string,
    content: string,
}
export enum AssetsType {
    images = 'images',
    videos = 'videos',
}
export interface ImagesAssets {
    path: string;
    rawPath: string;
    id: string;
    data: {
        desc: string;
    };
}
export interface VideosAssets {
    id: string;
    name: string;
    videos: string[];
}
export enum AssetsName {
    studentVideos = 'studentVideos',
    authorVideos = 'authorVideos',
    studentImages = 'studentImages',
    authorImages = 'authorImages',
}
export class Assets {
    public id: number;
    public name: AssetsName;
    public assetsType: AssetsType;
    private _content: string;
    constructor(assets: AssetsDB) {
        this.id = assets.id;
        this.name = AssetsName[assets.name as keyof typeof AssetsName];
        this.assetsType = AssetsType[assets.assets_type as keyof typeof AssetsType];
        this._content = assets.content;
    }
    public get images(): ImagesAssets[] {
        return ImagesHandler.decodePathDataStructure<{ desc: string }>(this._content).map(node => ({ ...node, rawPath: node.path, path: '/storage/images/' + node.path }));
    }
    public get videos():VideosAssets[] {
        const data = JSON.parse(this._content);
        return Object.keys(data).map((id, i) => {
            return {
                id,
                name:data[id].name,
                videos:data[id].videos
            }
        })
    }
    public static index() {
        return '/assets/index';
    }
    public static getAssets(name?: AssetsName) {
        return `/assets/get/${name}`;
    }
    public static insertImages() {
        return `/assets/insert-images`;
    }
    public static editImages() {
        return `/assets/edit-images`;
    }
    public static insertVideos() {
        return `/assets/insert-videos`;
    }
    public static editVideos() {
        return `/assets/edit-videos`;
    }
    public static removeImage() {
        return `/assets/remove-image`;
    }
    public static removeVideos() {
        return `/assets/remove-videos`;
    }
}
