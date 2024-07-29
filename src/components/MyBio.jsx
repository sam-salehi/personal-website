/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";

import bio from "../assets/bio.txt";

function MyBio({bioRef}) {
  let textRef = useRef("");
  // forceRender  is used to make sure a rerender occurs to display text after its decoded in useEffect
  const [forceRender, setForceRender] = useState(false);

  useEffect(function () {
    fetch(bio)
      .then((r) => r.text())
      .then((txt) => (textRef.current = txt))
      .then(() => setForceRender(true));
  }, []);

  return (
    <div className="bio-container" ref={bioRef}>
      {textRef.current.split("\n").map((par) => (
        <p key={par} className="paragraph">
          {par}
        </p>
      ))}
    </div>
  );
}

export default MyBio;
