/* eslint-disable react/prop-types */
import KNN from "../assets/projects/KNN.png";
import CNN from "../assets/projects/CNN.png"
import OTHELLO from "../assets/projects/OTHELLO.png";
import HUFFMAN from "../assets/projects/HUFF.svg";
import NOTE from  "../assets/projects/NOTE.png";

var projects = [

  {
    label: "Minimax adaptation to play othello",
    description: "Creating an adaptation of minimax with depth and proper heuristic evaluation to play Othello.",
    img: OTHELLO,
    gitlink: "https://github.com/Blewbsam/othello-minimax.git",
  },
  {
    label: "Implementing a Huffman encoding algorithm from scratch",
    description : "Using BytePair encoding to create standard embedding tables of arbitary size and evaluating the entropies of respective huffman encoded tables.",
    img: HUFFMAN,
    gitlink: "https://github.com/Blewbsam/Huffman-encoder"

  },
  {
    label: "Simple next note prediction with a three hidden layered neural network",
    description: "Training a standard neural network model made with pytorch on the Maestro dataset to produce the next note to be predicted given a sequence of notes and using the model to generate a piece which is turned into a midi file.",
    img: NOTE,
    gitlink : "https://github.com/Blewbsam/next-note-predictor"
  },

  {
    label: "K-Nearest Neighbor aproach to Genre classification",
    description:
      "Data analysis and using the K-nearest neighbor algorithm from tidyverse in R to evaluate how well the model can perform in song classification given a variety of predictors. ",
    img: KNN,
    gitlink:
      "https://github.com/Blewbsam/KNN-Song-Genre/blob/main/Final%20report.ipynb",
  },
  {
    label: "Fruit Classificaiton using Convolutional Neural Networks",
    description: "Using tensorflow to train multiple CNN's and see how they behave. Attained a final accuracy of 98% through transfer learning with ResNet 101 Architecture.",
    img:CNN,
    gitlink: "https://github.com/Blewbsam/CNN-Fruit-Classification/blob/main/Fruit_Classification.ipynb"
  
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


