import { useRef,useEffect } from "react";
import PropTypes from 'prop-types';

import MyBio from "./MyBio";
import MySkills from "./MySkills";
import Projects from "./Projects";


function RightMain({section, onSetSection}) {
  // forceRender  is used to make sure a rerender occurs to display text after its decoded in useEffect\
  const refContainer = useRef()

  const bioRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const blogRef = useRef()

  function handleScroll(e) {
    const scrollRatio = e.target.scrollTop /refContainer.current.offsetHeight
    console.log(scrollRatio)
    switch (true) {
        case (scrollRatio > 0.45):
          onSetSection("Projects")
          break
        case (scrollRatio > 0.28):
          onSetSection("Skills")
          break
        default:
          onSetSection("Bio")
    }
    
  
  }
  // const scrollyDiv = document.querySelector(".right-scroll-container");


  // scrollyDiv.addEventListener('scroll', (e) => {
  //   console.log(e.target.scrollTop)
  // })

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
    <div className="right-main" ref={refContainer} onScroll={handleScroll}>
      <div className="right-scroll-container">
      <MyBio bioRef={bioRef} />
      <hr />
      <MySkills skillsRef={skillsRef} />
      <hr />
      <Projects projectsRef={projectsRef} />
      </div>
    </div>
  );
}




RightMain.propTypes = {
  section: PropTypes.string.isRequired,
  onSetSection: PropTypes.func.isRequired
}



export default RightMain;
