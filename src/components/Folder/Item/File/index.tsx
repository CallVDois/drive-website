import Item from "..";
import type { FileModel } from "../../../../types/file.type";

import fileIcon from '../../../../assets/file.svg'

type FileProps = {
  file: FileModel
  handleDownload: (file: FileModel) => Promise<void>;
}

function humanSize(bytes: number): string {

  const units = ["B", "KB", "MB", "GB", "TB", "PB"];

  if (bytes === 0) return "0 B";

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);

  return `${size.toFixed(2)} ${units[i]}`;

}

function formatLocalDateTime(dateString: string): string {

  const fixed = dateString.replace(/\.\d{6}Z$/, match => match.slice(0, 4) + "Z");

  const date = new Date(fixed);

  if (isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

}

function File({ file, handleDownload }: FileProps) {
  return (
    <Item
      name={file.name}
      date={formatLocalDateTime(file.updatedAt)}
      size={humanSize(file.contentSize)}
      type={"file"}
      imageSrc={fileIcon}
      onClick={() => handleDownload(file)}
    />
  )
}

export default File