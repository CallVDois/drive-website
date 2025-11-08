import Item from "..";
import type { SubFolderModel } from "../../../../types/folder.type";

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
      onClick={() => handleOpenFolder(subFolder.id)}
    />
  )
}

export default SubFolder