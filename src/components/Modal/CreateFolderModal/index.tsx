import { useState } from 'react';

import styles from './styles.module.css';
import { Modal } from '..';

type CreateFolderModalProps = {
  isOpen: boolean
  onClose: () => void
  handleCreate: (name: string) => Promise<void>
}

function CreateFolderModal({ isOpen, onClose, handleCreate }: CreateFolderModalProps) {
  const [folderName, setFolderName] = useState("");

  return (
    <Modal isOpen={isOpen}>

      <section className={styles.modal}>

        <header className={styles.modal__header}>
          <h2>Create New Folder</h2>
        </header>

        <form className={styles.modal__form}>
          <input
            className={styles.modal__form__input}
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="New folder name"
          />
        </form>

        <footer className={styles.modal__footer}>
          <button
            className={styles.modal__buttonCancel}
            type="button"
            onClick={() => { onClose(); setFolderName("") }}
          >
            Cancel
          </button>
          <button
            className={styles.modal__buttonCreate}
            type="button"
            disabled={folderName.trim() === ""}
            onClick={() => { handleCreate(folderName); onClose(); setFolderName("") }}
          >
            Create
          </button>
        </footer>

      </section>

    </Modal >
  )
}

export default CreateFolderModal