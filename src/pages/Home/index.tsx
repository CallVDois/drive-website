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
      handleDownload
    } = useFile();




  return (
    <>
      <article className={styles.home}>

        <CommandBar
          handleCreateFolder={handleCreateFolder}
        />

        <Navigator
          actualFolder={folder}
          handleChangeFolder={handleChange}
        />
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