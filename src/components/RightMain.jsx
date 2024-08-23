import { useRef,useEffect } from "react";

import MyBio from "./MyBio";
import MySkills from "./MySkills";
import Projects from "./Projects";


function RightMain({section, onSetSection}) {
  // forceRender  is used to make sure a rerender occurs to display text after its decoded in useEffect
  const bioRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const blogRef = useRef()

  useEffect(function(){
    console.log("Switching section to: ", section);
    switch (section){
      case "Bio":
        bioRef.current.scrollIntoView({behavior:"smooth",block: 'nearest', inline: 'nearest' });
        break;
      case "Skills":
        skillsRef.current.scrollIntoView({behavior:"smooth",block: 'nearest', inline: 'nearest' });
        break;
      case "Projects":
        projectsRef.current.scrollIntoView({behavior:"smooth",block: 'nearest', inline: 'nearest' });
        break
      case "Blogs":
        blogRef.current.scrollIntoView({behavior:"smooth",block: 'nearest', inline: 'nearest' });
        break;
      default:
        console.log("None chosen");
    }
  }, [section])    

  return (
    <div className="right-main">
      <div className="right-scroll-container">
      <MyBio bioRef={bioRef}/>
      <hr />
      <MySkills skillsRef={skillsRef}/>
      <hr />
      <Projects projectsRef={projectsRef}/>
      </div>
    </div>
  );
}

export default RightMain;
