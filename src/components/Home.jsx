import { useState } from "react";

import LeftMain from "./LeftMain.jsx";
import RightMain from "./RightMain.jsx";


const allSections = ["Interests", "Skills", "Projects", "Blogs"]

function Home() {

  globalThis. scrollTo({ top: 0, left: 0, behavior: "smooth" }); //just making sure page initializes at top

  const [section, setSection] = useState("none")

  function handleSetSection(newSection){
    if (!allSections.includes(newSection)) throw new Error("Section not contained: ", newSection)

    setSection(newSection)
  }

  return (
    <main>
      <LeftMain section={section} onSetSection={handleSetSection}/>
      <RightMain section={section}/>
    </main>
  );
}

export default Home;
