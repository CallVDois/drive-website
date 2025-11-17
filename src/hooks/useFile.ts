import { useState } from "react";

import type { FileModel } from "../types/file.type";
import { getContent } from "../services/drive/file/file.api";


export interface UseFile {
    isDownloading: boolean;
    error?: any;
    handleDownload: (file: FileModel) => Promise<void>;
}

export function useFile(): UseFile {

    const [isDownloading, setIsDownloading] = useState(false)

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

    return {
        isDownloading,
        error,
        handleDownload
    };

}

