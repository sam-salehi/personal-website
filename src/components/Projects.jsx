/* eslint-disable react/prop-types */
import KNN from "../assets/projects/KNN.png";
// import CNN from "../assets/projects/CNN.png"
import OTHELLO from "../assets/projects/OTHELLO.png";
import HUFFMAN from "../assets/projects/HUFF.svg";
import LearningLoom from "../assets/projects/LearningLoom.png"
// import NOTE from  "../assets/projects/NOTE.png";

var projects = [
  {
    label: "Learning Loom", 
    description: "Using Retrieval-Augmented Generation with llm's in full Stack web application to make finding learning resources more accessible to students across disciplines. This project is still in the working.",
    img: LearningLoom,
    gitlink: "https://github.com/Blewbsam/LearningLoom.git"
  },
  {
    label: "Minimax adaptation to play othello",
    description: "Creating an adaptation of minimax with depth and proper heuristic evaluation to play Othello.",
    img: OTHELLO,
    gitlink: "https://github.com/Blewbsam/othello-minimax.git",
  },  {
    label: "K-Nearest Neighbor aproach to Genre classification",
    description:
      "Data analysis and using the K-nearest neighbor algorithm from tidyverse in R to evaluate how well the model can perform in song classification given a variety of predictors. ",
    img: KNN,
    gitlink:
      "https://github.com/Blewbsam/KNN-Song-Genre/blob/main/Final%20report.ipynb",
  },
  {
    label: "Implementing a Huffman encoding algorithm from scratch",
    description : "Using BytePair encoding to create standard embedding tables of arbitary size and evaluating the entropies of respective huffman encoded tables.",
    img: HUFFMAN,
    gitlink: "https://github.com/Blewbsam/Huffman-encoder"
  },

];
// projects is list of type project
//  each project consists of label, description, img

function Projects({projectsRef}) {
  return (
    <div ref={projectsRef} className="projects-container">
      {projects.map(pro => <Project label={pro.label} description={pro.description} img={pro.img} gitlink={pro.gitlink} key={pro.gitlink}/> )}
    </div>
  );
}

export default Projects;


function Project({label,description, img, gitlink}){
  return       <a className="div-ref" target="_blank" href={gitlink}>
  <div className="project">
    <div className="image-container">
    <img src={img} alt="Project Image" className="project-image"/>
    </div>
    <div className="project-details">
    <h2 className="project-header">{label}</h2>
    <p className="project-par">{description}</p>
    </div>
  </div>
</a>

}


