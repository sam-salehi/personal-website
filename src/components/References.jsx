
import github from "../assets/logos/github.png"
import linked from "../assets/logos/linked.png"
import res from "../assets/logos/res.png"

const links = {
    "linkedin" : "https://www.linkedin.com/in/sam-salehi-5b8a9625b/",
    "github" : "https://github.com/Blewbsam",
    "resume" : "https://moccasin-cassaundra-3.tiiny.site/"

}

function References() {

    return <div className="" id="referenceBox">
        <a className="refLink" href={links["linkedin"]} > 
            <img className="refImage" src={linked}/>
        </a>
        <a className="refLink" href={links["github"]} target="_blank">
            <img className="refImage" src={github} />
        </a>
        <a className="refLink" href={links["resume"]} target="_blank">
            <img className="refImage" id="resume" src={res}/>
        </a>
    </div>
}



export default References