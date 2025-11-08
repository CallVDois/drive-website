import { useFolder } from "../../hooks/useFolder";

import Folder from "../../components/Folder";

function Home() {

  const
    {
      folder,
      handleChange,
      handleChangeToRoot
    } = useFolder();

  return (
    <>
      <section>
        <h1>Drive Home</h1>
        <Folder
          folder={folder}
          handleChange={handleChange}
          handleChangeToRoot={handleChangeToRoot}
        />
      </section>
    </>
  )
}

export default Home