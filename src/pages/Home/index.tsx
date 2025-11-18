import { useFile } from "../../hooks/useFile";
import { useFolder } from "../../hooks/useFolder";

import CommandBar from "../../components/CommandBar";
import Folder from "../../components/Folder";
import Navigator from "../../components/Navigator";

import styles from './styles.module.css';

function Home() {

  const
    {
      folder,
      handleChange,
      handleCreateFolder
    } = useFolder();

  const
    {
      handleDownload,
      handleUpload
    } = useFile();

  return (
    <>
      <article className={styles.home}>

        <div className={styles.home__topbar}>
          <Navigator
            actualFolder={folder}
            handleChangeFolder={handleChange}
          />

          <CommandBar
            folder={folder}
            handleCreateFolder={handleCreateFolder}
            handleUpload={handleUpload}
          />
        </div>

        <Folder
          folder={folder}
          handleDownload={handleDownload}
          handleChange={handleChange}
        />
      </article>
    </>
  )
}

export default Home