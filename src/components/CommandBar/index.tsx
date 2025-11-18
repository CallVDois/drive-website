import { useState } from 'react';

import CreateFolderModal from '../Modal/CreateFolderModal';
import UploadFileModal from '../Modal/UploadFileModal';

import styles from './styles.module.css';
import type { FolderModel } from '../../types/folder.type';

type CommandBarProps = {
  folder: FolderModel;
  handleCreateFolder: (name: string) => Promise<void>
  handleUpload: (folder: FolderModel, file: File) => Promise<void>;
}

function CommandBar({ folder, handleCreateFolder, handleUpload }: CommandBarProps) {

  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isUploadFileModalOpen, setIsUploadFileModalOpen] = useState(false);

  const handleUploadFile = async (file: File) => {
    await handleUpload(folder, file);
  }

  return (
    <>
      <section className={styles.commandbar}>
        <button className={styles.commandbar__button} onClick={() => setIsCreateFolderModalOpen(true)}>
          Create Folder
        </button>
        <button className={styles.commandbar__button} onClick={() => setIsUploadFileModalOpen(true)}>
          Upload File
        </button>
      </section>

      <CreateFolderModal
        isOpen={isCreateFolderModalOpen}
        onClose={() => setIsCreateFolderModalOpen(false)}
        handleCreate={handleCreateFolder}
      />
      <UploadFileModal
        isOpen={isUploadFileModalOpen}
        onClose={() => setIsUploadFileModalOpen(false)}
        handleUpload={handleUploadFile}
      />

    </>
  )
}

export default CommandBar