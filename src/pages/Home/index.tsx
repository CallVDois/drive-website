import { useFolder } from "../../hooks/useFolder";

import Folder from "../../components/Folder";
import { useFile } from "../../hooks/useFile";

function Home() {

  const
    {
      folder,
      handleChange,
      handleChangeToRoot
    } = useFolder();

  const {
    handleDownload
  } = useFile();

  return (
    <>
      <section>
        <h1>Drive Home</h1>
        <Folder
          folder={folder}
          handleDownload={handleDownload}
          handleChange={handleChange}
          handleChangeToRoot={handleChangeToRoot}
        />
      </section>
    </>
  )
}

export default Home