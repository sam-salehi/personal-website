/* eslint-disable react/prop-types */
import KNN from "../assets/projects/KNN.png";
import CNN from "../assets/projects/CNN.png"

var projects = [

  {
    label: "K-Nearest Neighbor aproach to Genre classification",
    description:
      "Data analysis and using the K-nearest neighbor algorithm from tidyverse in R to evaulas how well the model can perform in song classification with a variety of predictors. ",
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
  //TODO: create good looking CSS to make elements reactive. Think about resizing.
  return (
    <div ref={projectsRef} className="projects-container">
      {projects.map(pro => <Project label={pro.label} description={pro.description} img={pro.img} gitlink={pro.gitlink} key={pro.gitlink}/> )}
    </div>
  );
}

export default Projects;


function Project({label,description, img, gitlink}){
  return       <a className="div-ref" href={gitlink}>
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


