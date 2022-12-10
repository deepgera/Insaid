import React from "react";
import "./style.css";

function Jobs() {
    return (
        <div className="job-container">
            <div className="container">
                <div class="row align-items-center">
                    <div className="col-6">
                        <section className="row mt-5 align-items-center">
                            <div className="col-12 ms-4 mt-5 pt-2 sec">
                                <h4 className="getjob">Get your Dream Job with </h4>
                                <h2 className="mb-0 programs"><b>Top Programs</b></h2>
                                <div className="col-12 mx-2 my-4 sec">
                                    <p  className="description-content"> Learn with India's leading online school for working professionals </p>
                                </div>
                                <div className="col-12 mx-2 d-flex justify-content-left">
                                    <button className ="btn-lg explore" data-toggle="modal" data-target="#book_class"><b>Talk to an Expert</b></button>
                            </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;