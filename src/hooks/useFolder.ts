import { useState } from "react";

import { createFolder, getFolder, getRootFolder } from "../services/drive/folder/folder.api";

import type { FolderModel } from "../types/folder.type";

const rootFolder = await getRootFolder()

export interface UseFolder {
    folder: FolderModel;
    isLoaded: boolean;
    error?: any;
    handleChange: (id: string) => Promise<void>;
    handleChangeToRoot: () => Promise<void>;
    handleCreateFolder: (name: string) => Promise<void>;
}

export function useFolder(): UseFolder {

    const [isLoaded, setIsLoaded] = useState(false)
    const [folder, setFolder] = useState<FolderModel>(rootFolder);

    const [error, setError] = useState<any>();

    const handleChangeFolder = async (id: string) => {
        try {
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

    const handleCreateFolder = async (name: string) => {
        try {
            await createFolder({ name, parentFolderId: folder.id })
            await handleChangeFolder(folder.id);
        } catch (error) {
            setError(error)
        }
    }

    return {
        folder,
        isLoaded,
        error,
        handleChange: handleChangeFolder,
        handleChangeToRoot,
        handleCreateFolder
    };

}

