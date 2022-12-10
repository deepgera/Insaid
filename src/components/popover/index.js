import React from "react";
import "./style.css"

function PopOver(props) {
    
  return (
        <div className="modal-container">
            <div className="popup">
                <div className="container">
                   <div className="row">
                       <div className="col-5">
                           <div className = "experts-call-section"><h6 class="size">Call Our experts</h6></div>
                       </div>
                       <button onClick={props.handleChange}>close</button>
                       <div className="col-2"></div>
                       <div className="col-5"></div>
                   </div>
                </div>
            </div>
        </div>
  );
}

export default PopOver;