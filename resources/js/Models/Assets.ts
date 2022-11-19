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
export enum AssetsName {
    studentVideos = 'studentVideos',
    authorVideos = 'authorVideos',
    studentImages = 'studentImages',
    authorImages = 'authorImages',
}
// export interface AssetsContentType {

// }
export class Assets {
    public id: number;
    public name: AssetsName;
    public assetsType: AssetsType;
    private _content: string;
    constructor(assets: AssetsDB) {
        this.id = assets.id;
        this.name = AssetsName[assets.name as keyof typeof AssetsName];
        this.assetsType = AssetsType[assets.name as keyof typeof AssetsType];
        this._content = assets.content;
    }
    public get content() {
        // const decodedContent = JSON.parse(this._content) as string[];
        // if (this.assetsType === AssetsType.images)
        //     return decodedContent.map(name => '/storage/images/' + name)
        return ImagesHandler.decodePathDataStructure<{ desc: string }>(this._content).map(node => ({ ...node, path: '/storage/images/' + node.path }));
    }
    public static index() {
        return '/assets/index';
    }
    public static getAssets(name?: AssetsName) {
        return `/assets/get/${name}`;
    }
    public static insert() {
        return `/assets/insert`;
    }
    public static remove() {
        return `/assets/remove`;
    }
}
