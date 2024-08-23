import PropTypes from 'prop-types';

function NavGrid({section, onSetSection}) {
  return (
    <div className="container">
      <div onClick={() => onSetSection("Bio")} className={section == "Bio" ? "box highlight" : 'box'}>Bio</div>
      <div onClick={() => onSetSection("Skills")} className={section == "Skills"? "box highlight": "box"}>Skills</div>
      <div onClick={() => onSetSection("Projects")} className={section == "Projects"? "box highlight" : 'box'} >Projects</div>
      <div onClick={() => onSetSection("Blogs")} className={section == "Blogs"? "box highlight" : 'box'}>Blogs</div>
    </div>
  );
}

NavGrid.propTypes = {
  section: PropTypes.string.isRequired,
  onSetSection: PropTypes.func.isRequired
}


export default NavGrid;
