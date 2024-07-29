function NavGrid({section, onSetSection}) {
  return (
    <div className="container">
      <div onClick={() => onSetSection("Interests")} className={section == "Interests"? "box highlight" : 'box'}>Interests</div>
      <div onClick={() => onSetSection("Skills")} className={section == "Skills"? "box highlight": "box"}>Skills</div>
      <div onClick={() => onSetSection("Projects")} className={section == "Projects"? "box highlight" : 'box'} >Projects</div>
      <div onClick={() => onSetSection("Blogs")} className={section == "Blogs"? "box highlight" : 'box'}>Blogs</div>
    </div>
  );
}

export default NavGrid;
