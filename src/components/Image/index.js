import React, { useState } from "react";
import { Img } from "react-image";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import BounceLoader from "react-spinners/BounceLoader";

import NotFound from "../../assets/images/not_found.png";

const Image = (props) => {
  const [openFullScreen, setOpenFullScreen] = useState(false);

  const Loading = () => (
    <div className="spinner">
      <BounceLoader size={35} color="#1abc9c" />
    </div>
  );

  return (
    <>
      {openFullScreen && <Lightbox mainSrc={props.preview} onCloseRequest={() => setOpenFullScreen(false)}/>}
      <Img
        onClick={() =>  setOpenFullScreen(true)}
        src={props.src}
        alt={props.alt ? props.alt : ""}
        className={props.className && props.className}
        loader={<Loading />}
        unloader={<img src={NotFound} alt="not found" />}
        decode={false}
      />
    </>
  );
};

export default Image;
