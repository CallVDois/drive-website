import Item from "..";
import type { FileModel } from "../../../../types/file.type";

type FileProps = {
  file: FileModel
  onClick?: () => void;
}


function File({ file, onClick }: FileProps) {
  return (
    <>
      <Item name={file.name} date={file.updatedAt} size={file.contentSize.toString()} type={"file"} onClick={onClick} />
    </>
  )
}

export default File