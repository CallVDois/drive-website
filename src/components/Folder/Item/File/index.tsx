import Item from "..";
import type { FileModel } from "../../../../types/file.type";

type FileProps = {
  file: FileModel
  handleDownload: (file: FileModel) => Promise<void>;
}


function File({ file, handleDownload }: FileProps) {
  return (
    <>
      <Item name={file.name} date={file.updatedAt} size={file.contentSize.toString()} type={"file"} onClick={() => handleDownload(file)} />
    </>
  )
}

export default File