/* eslint-disable react/prop-types */
import cssPng from "../assets/logos/css.png";
import reactPng from "../assets/logos/react.png";
import gitPng from "../assets/logos/git.png";
import htmlPng from "../assets/logos/html.png";
import javaPng from "../assets/logos/java.png";
import jsPng from "../assets/logos/js.png";
import pythonPng from "../assets/logos/python.png";
import pytorchPng from "../assets/logos/pytorch.png";
import RPng from "../assets/logos/R.png";
import SwiftPng from "../assets/logos/swift.png";
import TensorflowPng from "../assets/logos/tensorflow.png";

function MySkills({skillsRef}) {
  return (
    <div ref={skillsRef} className="skills">
      <div id="primary-skills">
        <img src={pythonPng}></img>
        <img src={javaPng}></img>
        <img src={jsPng}></img>
        <img src={SwiftPng}></img>
        <img src={RPng}></img>
        <img src={htmlPng}></img>
        <img src={cssPng}></img>
        <img src={reactPng}></img>
        <img src={pytorchPng} />
      </div>
      <div id="secondary-skills">
        <img src={TensorflowPng} />
        <img src={gitPng} />
      </div>
    </div>
  );
}

export default MySkills;
