import { useState } from "react";

import { getFolder, getRootFolder } from "../services/drive/folder/folder.api";

import type { FolderModel } from "../types/folder.type";

const rootFolder = await getRootFolder()

export interface UseFolder {
    folder: FolderModel;
    isLoaded: boolean;
    error?: any;
    handleChange: (id: string) => Promise<void>;
    handleChangeToRoot: () => Promise<void>;
}

export function useFolder(): UseFolder {

    const [isLoaded, setIsLoaded] = useState(false)
    const [folder, setFolder] = useState<FolderModel>(rootFolder);

    const [error, setError] = useState<any>();

    const handleChangeFolder = async (id: string) => {
        try {
            console.log(id)
            const result = await getFolder(id)
            setFolder(result)
            setIsLoaded(true)
        } catch (error) {
            setIsLoaded(false)
            setError(error)
        }
    }

    const handleChangeToRoot = async () => {
        try {
            const root = await getRootFolder()
            setFolder(root)
            setIsLoaded(true)
        } catch (error) {
            setIsLoaded(false)
            setError(error)
        }
    }

    return {
        folder,
        isLoaded,
        error,
        handleChange: handleChangeFolder,
        handleChangeToRoot
    };

}

