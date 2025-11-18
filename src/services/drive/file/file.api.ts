import { handleError } from "../../restClient";
import type { Request } from "../../restClient";

import type { ApiErrorDTO } from "../../common/api.types";

import api from "../driveClient"

export async function getContent(id: string): Promise<Blob> {
    try {
        const request: Request = {
            headers: {
                Accept: 'application/octet-stream',
            },
            responseType: 'blob'
        };
        return (await api.get<Blob>(`/files/${id}/content`, request)).data!;
    } catch (error: any) {
        const response = handleError<ApiErrorDTO>(error);
        throw new Error(`Error on downloading file: ${response.data?.message || 'Unknown error'}`);
    }
}

export async function uploadFile(folderId: string, file: File): Promise<void> {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const request: Request = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        await api.post(`/files?folderId=${folderId}`, formData, request);
    } catch (error: any) {
        const response = handleError<ApiErrorDTO>(error);
        throw new Error(`Error on sending file: ${response.data?.message || 'Unknown error'}`);
    }
}

