import { useState } from "react";

import { getContent, uploadFile } from "../services/drive/file/file.api";

import type { FileModel } from "../types/file.type";
import type { FolderModel } from "../types/folder.type";


export interface UseFile {
    handleDownload: (file: FileModel) => Promise<void>;
    isDownloading: boolean;
    handleUpload: (folder: FolderModel, file: File) => Promise<void>;
    isUploading: boolean;
    error?: any;
}

export function useFile(): UseFile {

    const [isDownloading, setIsDownloading] = useState(false)
    const [isUploading, setIsUploading] = useState(false);

    const [error, setError] = useState<any>();

    const handleDownload = async (file: FileModel) => {
        try {
            setIsDownloading(true);

            const fileBlob = await getContent(file.id);
            const url = URL.createObjectURL(fileBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = file.name;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            setError(error);
        } finally {
            setIsDownloading(false);
        }
    }

    const handleUpload = async (folder: FolderModel, file: File) => {
        try {
            setIsUploading(true);
            await uploadFile(folder.id, file);
        } catch (error) {
            setError(error);
        } finally {
            setIsUploading(false);
        }
    }

    return {
        handleDownload,
        isDownloading,
        handleUpload,
        isUploading,
        error,
    };

}

