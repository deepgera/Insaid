import React from "react";
import "./style.css";
import CheckList from "../../assets/img/checklist.png";
import axios from 'axios';

const Uri="http://localhost:8080"
function PopOver(props) {
    
    async function Postdata(event){
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const phone=event.target.phone.value;
        const body={
            "name":name,
            "email":email,
            "phone":phone
        }
        let response={}
        try{
            response=await axios.post(`${Uri}/adddata`,body);
        }catch(err){
            console.log(err);
        }
        console.log("data submitted",response);
        props.handleChange();
    }
    return (
        <div className="modal-container">
            <div className="popup">
            <div className="colse-btn d-flex justify-content-end">
             <i class="fa fa-times" aria-hidden="true" onClick={props.handleChange}></i>
             </div>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="experts-call-section">
                                <h6 class="size">Call Our experts</h6>
                                <h5 className="data">Data Science: +91 7063119228</h5>
                                <h5 className="data">Product Management: +91 9625811095</h5>
                                <div className="checklist-container"><img src={CheckList}/></div>
                            </div>
                        </div>
                        <div className="col-1 border-pipe">
                           <span class="sepText">
                              OR
                            </span> 
                        </div>
                        <div className="col-5">
                            <div className="ScheduleConsultation">
                            <h6 class="size">Schedule a 1-on-1 consultation</h6> 
                            <h5 className="data callBack-request">Request a Call Back</h5>
                             <form onSubmit={Postdata}>
                                 <div className="form-group">
                                     <input type="text" placeholder="Mobile" name="phone"/>
                                 </div>
                                 <div className="form-group">
                                     <input type="text" placeholder="Name" name="name"/>
                                 </div>
                                 <div className="form-group">
                                     <input type="text" placeholder="Email" name="email"/>
                                 </div>
                                 <div className="form-group">
                                     <select>
                                         <option>---- Select Program ----</option>
                                         <option>Data Science</option>
                                         <option>Product Management</option>
                                     </select>
                                 </div>
                                 <input type="submit" value="Call Me Back" class="submit-btn" id="btncolor"></input>
                             </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopOver;