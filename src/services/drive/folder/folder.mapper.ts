import { safeString } from "../../utils/mapper.util";

import { FileModel } from "../../../types/file.type";
import type { FolderModel, FolderPathModel, FolderPathSegmentModel, SubFolderModel } from "../../../types/folder.type";

import type { FileSummaryDTO, FolderDetailDTO, FolderPathDTO, FolderPathSegmentDTO, SubFolderDTO } from "./folder.types";


export function mapFolderDetailDTOToFolderModel(folderDto: FolderDetailDTO): FolderModel {

    return {
        id: folderDto.id,
        name: folderDto.name,
        parentFolder: folderDto.parentFolder,
        path: mapFolderPathDTOToFolderPathModel(folderDto.path),
        subFolders: folderDto.subFolders.map(mapSubFolderDTOToSubFolderModel),
        files: folderDto.files.map(mapFileSummaryDTOToFileModel),
        createdAt: folderDto.createdAt,
        updatedAt: folderDto.updatedAt
    }

}

export function mapFolderPathDTOToFolderPathModel(pathDto: FolderPathDTO): FolderPathModel {

    return {
        segments: pathDto.segments.map(mapFolderPathSegmentDTOToFolderPathSegmentModel)
    }

}

export function mapFolderPathSegmentDTOToFolderPathSegmentModel(segmentDto: FolderPathSegmentDTO): FolderPathSegmentModel {

    return { id: segmentDto.id, name: segmentDto.name }

}

export function mapSubFolderDTOToSubFolderModel(subFolder: SubFolderDTO): SubFolderModel {

    return {
        id: subFolder.id,
        name: subFolder.name
    }

}

export function mapFileSummaryDTOToFileModel(file: FileSummaryDTO): FileModel {

    return new FileModel(
        file.id,
        safeString(null),
        safeString(null),
        file.name,
        safeString(null),
        file.size,
        file.createdAt,
        file.updatedAt);

}