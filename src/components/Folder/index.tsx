import type { FolderModel } from "../../types/folder.type";

import styles from './styles.module.css';

import Navigator from "./Navigator";
import SubFolder from "./Item/SubFolder";
import File from "./Item/File";
import type { FileModel } from "../../types/file.type";

type FolderProps = {
  folder: FolderModel
  handleDownload: (file: FileModel) => Promise<void>;
  handleChangeToRoot: () => Promise<void>
  handleChange: (id: string) => Promise<void>
}

// function Folder({ folder }: FolderProps) {
function Folder({ folder, handleChange, handleChangeToRoot, handleDownload }: FolderProps) {
  return (
    <>
      <section className={styles.folder} aria-labelledby="folder-title">
        <Navigator actualFolder={folder} handleChangeFolder={handleChange} handleChangeToRoot={handleChangeToRoot} />
        <h2 id="folder-title">{folder.name}</h2>

        <section aria-label="SubFolders">
          <h3>Pastas</h3>
          <ul className={styles["item__wrapper"]}>

            {folder.subFolders.map(subFolder => (
              <li key={subFolder.id}>
                <SubFolder subFolder={subFolder} handleOpenFolder={handleChange} />
              </li>
            ))}
            {/* <li key="1"><SubFolder subFolder={{ id: "1", name: "SubPasta 1" }} /></li>
            <li key="2"><SubFolder subFolder={{ id: "2", name: "SubPasta 2" }} /></li>
            <li key="3"><SubFolder subFolder={{ id: "3", name: "SubPasta 3" }} /></li> */}
          </ul>
        </section>

        <section aria-label="Arquivos">
          <h3>Arquivos</h3>
          <ul className={styles["item__wrapper"]}>

            {folder.files.map(file => (
              <li key={file.id}>
                <File
                  file={file}
                  handleDownload={handleDownload} />
              </li>
            ))}

            {/* <li key="6"><File name="Arquivo 1" date="2025-11-05 08:34" size="1 MB" onClick={() => { }} /></li>
            <li key="7"><File name="Arquivo 2" date="2025-05-15 11:34" size="1 MB" onClick={() => { }} /></li>
            <li key="8"><File name="Arquivo 3" date="2025-01-25 14:34" size="1 MB" onClick={() => { }} /></li> */}
          </ul>
        </section>

      </section>
    </>
  )
}

export default Folder