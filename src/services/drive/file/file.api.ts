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
        throw new Error(`Erro ao baixar arquivo: ${response.data?.message || 'Erro desconhecido'}`);
    }
}

