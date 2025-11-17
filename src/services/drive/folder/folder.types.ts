export interface FolderSummaryDTO {
    id: string
    name: string
    parentFolder?: string
}

export interface FolderDetailDTO {
    id: string
    name: string
    rootFolder: boolean
    parentFolder: string
    path: FolderPathDTO
    subFolders: SubFolderDTO[]
    files: FileSummaryDTO[]
    ownerId: string
    createdAt: string
    updatedAt: string
}

export interface FileSummaryDTO {
    id: string
    name: string
    size: number
    createdAt: string
    updatedAt: string
}

export interface SubFolderDTO {
    id: string
    name: string
}

export interface FolderPathDTO {
    segments: FolderPathSegmentDTO[]
}

export interface FolderPathSegmentDTO {
    id: string
    name: string
}
