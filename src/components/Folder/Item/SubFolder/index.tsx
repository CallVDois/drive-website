import Item from "..";
import type { SubFolderModel } from "../../../../types/folder.type";

import folderIcon from '../../../../assets/folder.svg'

type FolderProps = {
  subFolder: SubFolderModel
  handleOpenFolder: (id: string) => void;
}

function SubFolder({ subFolder, handleOpenFolder }: FolderProps) {
  return (
    <Item
      name={subFolder.name}
      date="-"
      size="-"
      type={"folder"}
      imageSrc={folderIcon}
      onClick={() => handleOpenFolder(subFolder.id)}
    />
  )
}

export default SubFolder