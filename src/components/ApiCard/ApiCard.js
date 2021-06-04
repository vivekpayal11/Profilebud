import React from "react";

const ApiCard = () => {
  return (
    <div class="col-sm-12">
      <div class="card apiCard">
        <div class="card-body">
          <h5 class="card-title apiCardTitle">NUMBER OF ACCOUNTS</h5>
          <p class="card-text apiCardBody">
            <input 
              type="text"
              className="form-control numberbtn"
              placeholder="ENTER NUMBER HERE"
            />
            <p className="dollar">$0.00</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiCard;
