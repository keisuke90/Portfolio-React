import React from "react";
import Pic from "../images/macrorecipe.jpeg"

export const Modal = (props) => {
  const closeModal = () => {
    props.setShow(false)
  }
  if (props.show) {
    return (
      <>
        <div id="overlay" onClick={closeModal}>
            <div id="content" onClick={(e) => e.stopPropagation()}>
                <h3>{props.title}</h3>
                <img className="workimage" src={Pic} alt="workimage" />
                <p>{props.text}</p>
                <a href={props.url}>{props.url}</a>
            </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};