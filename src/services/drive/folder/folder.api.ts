import api from "../driveClient"
import { handleError } from "../../restClient";

import type { ApiErrorDTO } from "../../common/api.types";
import type { FolderDetailDTO } from "./folder.types";
import type { FolderModel } from "../../../types/folder.type";
import { mapFolderDetailDTOToFolderModel } from "./folder.mapper";


export async function getRootFolder(): Promise<FolderModel> {
    try {
        const response = await api.get<FolderDetailDTO>('/folders/root');
        return mapFolderDetailDTOToFolderModel(response.data!);
    } catch (error: any) {
        const response = handleError<ApiErrorDTO>(error);
        throw new Error(`Error fetching root folder: ${response.data?.message || 'Unknown error'}`);
    }
}

export async function getFolder(id: string): Promise<FolderModel> {
    try {
        const response = await api.get<FolderDetailDTO>(`/folders/${id}`)
        return mapFolderDetailDTOToFolderModel(response.data!);
    } catch (error: any) {
        const response = handleError<ApiErrorDTO>(error);
        throw new Error(`Error fetching folder: ${response.data?.message || 'Unknown error'}`);
    }
}