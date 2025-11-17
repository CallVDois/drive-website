import { useFolder } from "../../hooks/useFolder";
import { useFile } from "../../hooks/useFile";

import Navigator from "../../components/Navigator";
import Folder from "../../components/Folder";

import styles from './styles.module.css';

function Home() {

  const
    {
      folder,
      handleChange
    } = useFolder();

  const
    {
      handleDownload
    } = useFile();

  return (
    <>
      <article className={styles.home}>
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