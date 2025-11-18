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

        <button onClick={() => setIsCreateFolderModalOpen(true)}>
          Criar Pasta
        </button>

        <CreateFolderModal
          isOpen={isCreateFolderModalOpen}
          onClose={() => setIsCreateFolderModalOpen(false)}
          handleCreate={handleCreateFolder}
        />

      </section>
    </>
  )
}

export default CommandBar