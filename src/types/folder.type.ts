import type { FileModel } from "./file.type";

export interface FolderModel {
    id: string;
    name: string;
    parentFolder: string;
    path: FolderPathModel;
    subFolders: SubFolderModel[];
    files: FileModel[];
    createdAt: string;
    updatedAt: string;
}

export interface SubFolderModel {
    id: string;
    name: string;
}

export interface FolderPathModel {
    segments: FolderPathSegmentModel[];
}

export interface FolderPathSegmentModel {
    id: string;
    name: string;
}

