import type { FileModel } from "./file.type";

export interface FolderModel {
    id: string;
    name: string;
    parentFolder: string;
    subFolders: SubFolderModel[];
    files: FileModel[];
    createdAt: string;
    updatedAt: string;
}

export interface SubFolderModel {
    id: string;
    name: string;
}

