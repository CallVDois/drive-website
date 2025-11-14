import styles from './styles.module.css';

import type { FolderModel } from '../../../types/folder.type';

type NavigatorProps = {
  actualFolder: FolderModel
  handleChangeToRoot: () => Promise<void>
  handleChangeFolder: (id: string) => Promise<void>

}

function Navigator({ actualFolder, handleChangeToRoot, handleChangeFolder }: NavigatorProps) {
  return (
    <section aria-label="Folder Navigator">
      {actualFolder.parentFolder ? (
        <>
          <a className={styles.navigator__root} onClick={() => { handleChangeToRoot() }}>Pasta Raiz</a>
          <a className={styles.navigator__voltar} onClick={() => { handleChangeFolder(actualFolder.parentFolder) }}>Voltar</a>
        </>
      ) : (
        <p>Pasta Raiz</p>
      )}
    </section>
  )
}

export default Navigator