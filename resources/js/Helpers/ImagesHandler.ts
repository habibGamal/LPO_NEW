import { UploadFile } from "antd";

export default class ImagesHandler {
    static getPathsAsUploadFiles(paths: string[]): UploadFile[] {
        return paths.map((asset, i) =>
        ({
            uid: `existing-asset-${i}`,
            name: asset,
            status: 'done',
            url: '/storage/images/' + asset,
        }))
    }
    static getNewUploadedFiles(fileList: UploadFile[]) {
        return (fileList.filter(file => !file.uid.includes('existing-asset-')))
            .map(file => file.originFileObj)
    }
    static decodePathDataStructure<T>(jsonData: string) {
        const decodedData = JSON.parse(jsonData);
        const ids = Object.keys(decodedData);
        return ids.map(
            id => {
                const node = decodedData[id as keyof typeof decodedData] as any;
                return {
                    id,
                    path: node['path'] as string,
                    data: node['data'] as T
                }
            }
        )
    }
}
