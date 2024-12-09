import { useRef,useEffect,useState } from "react";
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

  const [scrolling,setScrolling] = useState(false) // used to avoid collisons between handleScroll and useEffect




  function handleScroll(e) { //TODO: functionality of this function is not proper it depends on size of the elemnts so read those in and use them to control ratios.
    // const scrollRatio = e.target.scrollTop / refContainer.current.offsetHeight
    console.log("Scrolling");
    if (scrolling == true) return;
    const containerTop = refContainer.current.getBoundingClientRect().top // distance of container to top of the page 
    let tops = [
      bioRef.current.getBoundingClientRect().top,
      skillsRef.current.getBoundingClientRect().top,
      projectsRef.current.getBoundingClientRect().top
    ]
    tops = tops.map(dis => dis - containerTop)
    
    const scrollIndex = tops.findIndex(dis => dis > 0)
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
  //   console.log(e.target.scrollTop)a
  // })

  useEffect(function(){
    setScrolling(true)
    switch (section){
      case "Bio":
        bioRef.current.scrollIntoViewIfNeeded({behavior:"smooth",block: 'nearest', inline: 'nearest' }); //ch
        break;
      case "Skills":
        skillsRef.current.scrollIntoViewIfNeeded({behavior:"smooth",block: 'nearest', inline: 'nearest' });
        break;
      case "Projects":
        projectsRef.current.scrollIntoViewIfNeeded({behavior:"smooth",block: 'nearest', inline: 'nearest' });
        break
      // case "Blogs":
      //   blogRef.current.scrollIntoView({behavior:"smooth",block: 'nearest', inline: 'nearest' });
      //   break; blogRef currently does not exist
      default:
    }
    setScrolling(false)
  }, [section])    

  return (
    <div className="right-main" ref={refContainer} >
      <div className="right-scroll-container" onScroll={handleScroll}>
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
