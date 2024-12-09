/* eslint-disable react/prop-types */
import cssPng from "../assets/logos/css.png";
import reactPng from "../assets/logos/react.png";
// import gitPng from "../assets/logos/git.png";
import htmlPng from "../assets/logos/html.png";
import javaPng from "../assets/logos/java.png";
import jsPng from "../assets/logos/js.png";
import pythonPng from "../assets/logos/python.png";
import pytorchPng from "../assets/logos/pytorch.png";
import RPng from "../assets/logos/R.png";
import SwiftPng from "../assets/logos/swift.png";
// import TensorflowPng from "../assets/logos/tensorflow.png";
import cPng from "../assets/logos/c.png";
import cpPng from "../assets/logos/cpp.png";




const LOGOS = [pythonPng,javaPng,jsPng,cPng,cpPng,htmlPng,cssPng,reactPng,pytorchPng]


function MySkills({skillsRef}) {
  return (
    <div ref={skillsRef} className="skills">
      <span> Experience With</span>
      <div id="primary-skills">
        {
          LOGOS.map((logo,i) => <img src={logo} key={i}/>)
        }
      </div>
    </div>
  );
}

export default MySkills;
