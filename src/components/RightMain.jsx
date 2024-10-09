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
  // const blogRef = useRef()




  function handleScroll(e) { //TODO: functionality of this function is not proper it depends on size of the elemnts so read those in and use them to control ratios.
    // const scrollRatio = e.target.scrollTop / refContainer.current.offsetHeight
    const containerTop = refContainer.current.getBoundingClientRect().top // distance of container to top of the page 
    let tops = [
      bioRef.current.getBoundingClientRect().top,
      skillsRef.current.getBoundingClientRect().top,
      projectsRef.current.getBoundingClientRect().top
    ]
    tops = tops.map(dis => dis - containerTop)
    
    const scrollIndex = tops.findIndex(dis => dis > 0)
    console.log(scrollIndex)

  

    switch (scrollIndex) {
        case 0:
          onSetSection("Bio")
          // onSetSection("Projects")
          break
        case 1:
          onSetSection("Skills")
          break
        case 2: 
          onSetSection("Projects")
          break
        default:
          throw new Error("Inavlid scrollIndex given.")
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
      // case "Blogs":
      //   blogRef.current.scrollIntoView({behavior:"smooth",block: 'nearest', inline: 'nearest' });
      //   break; blogRef currently does not exist
      default:
    }
  }, [section])    

  return (
    <div className="right-main" ref={refContainer} onScroll={handleScroll}>
      <div className="right-scroll-container">
      <MyBio bioRef={bioRef} />
      <hr className="main-page-hr"/>
      <MySkills skillsRef={skillsRef} />
      <hr className="main-page-hr"/>
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
