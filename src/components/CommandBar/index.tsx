import { useState } from 'react';

import CreateFolderModal from '../Modal/CreateFolderModal';

import styles from './styles.module.css';


type CommandBarProps = {
  handleCreateFolder: (name: string) => Promise<void>
}

function CommandBar({ handleCreateFolder }: CommandBarProps) {

  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

  return (
    <>
      <section className={styles.commandbar}>
        <button className={styles.commandbar__button} onClick={() => setIsCreateFolderModalOpen(true)}>
          Create Folder
        </button>
        <button className={styles.commandbar__button} onClick={() => { }}>
          Upload File
        </button>
      </section>

      <CreateFolderModal
        isOpen={isCreateFolderModalOpen}
        onClose={() => setIsCreateFolderModalOpen(false)}
        handleCreate={handleCreateFolder}
      />
    </>
  )
}

export default CommandBar