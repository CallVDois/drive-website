import SubFolder from "./Item/SubFolder";
import File from "./Item/File";

import type { FolderModel } from "../../types/folder.type";
import type { FileModel } from "../../types/file.type";

import styles from './styles.module.css';

type FolderProps = {
  folder: FolderModel
  handleDownload: (file: FileModel) => Promise<void>;
  handleChange: (id: string) => Promise<void>
}

function Folder({ folder, handleChange, handleDownload }: FolderProps) {
  return (
    <>
      <section className={styles.folder}>

        <section aria-label="SubFolders">
          <h3>Folders</h3>
          <ul className={styles.item__wrapper}>
            {folder.subFolders.map(subFolder => (
              <li key={subFolder.id} className={styles.item}>
                <SubFolder
                  subFolder={subFolder}
                  handleOpenFolder={handleChange}
                />
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Files">
          <h3>Files</h3>
          <ul className={styles.item__wrapper}>
            {folder.files.map(file => (
              <li key={file.id} className={styles.item}>
                <File
                  file={file}
                  handleDownload={handleDownload}
                />
              </li>
            ))}
          </ul>
        </section>

      </section>
    </>
  )
}

export default Folder