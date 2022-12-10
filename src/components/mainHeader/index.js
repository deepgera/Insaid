import React from "react";
import "./style.css";
import Insaid from "../../assets/img/insaid.png"

function MainHeader() {
  return (
    <header id="main-header">
      <div className="container">
        <div class="row align-items-center">
               <div className="col-2">
                   <div className="image-container">
                       <img src={Insaid} alt ="logo"/>
                   </div>
               </div>
               <div className="col-10">
                   <nav className="nanbar">
                   <ul className="navlist">
                       <li className="navlistItem"><a>Data Science</a></li>
                       <li className="navlistItem"><a>Product Management</a></li>
                       <li className="navlistItem"><a>For Corporate</a></li>
                       <li className="navlistItem"><a>About INSAID</a></li>
                       <li className="navlistItem"><a><button>Login</button></a></li>
                   </ul>
                   </nav>
               </div>
            </div>
        </div>
    </header>
  );
}

export default MainHeader;