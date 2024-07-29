/* eslint-disable react/prop-types */
import personal from "../assets/personal.jpeg";
import NavGrid from "./NavGrid";

function LeftMain({section, onSetSection}) {
  return (
    <div className="personal-details">
      <h1> Sam Salehi</h1>
      <img src={personal} className="personal-image" alt="Portrait"></img>
      <h2>
        BSc at{" "}
        <a className="UBC " href="https://www.ubc.ca/">
          University of British Columbia
        </a>
      </h2>
      <h4> Aspiring Machine Learning Engineer</h4>
      <NavGrid section={section} onSetSection={onSetSection}/>
    </div>
  );
}

export default LeftMain;
