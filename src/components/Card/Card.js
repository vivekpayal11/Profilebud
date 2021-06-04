import React from "react";

const Card = (props) => {
  return (
    <div class="col-sm-10">
      <div class="card">
        <div class="card-body contentCard">
          
         <button className="cardCircle" style={{backgroundImage: `linear-gradient(to right, ${props.color1}, ${props.color2})`, }}/> 
          <h5 class="card-title contentCardTitle">{props.title}</h5>
          <p class="card-text">
          {props.body}
          </p>
          <a href="#" class="btn">
          {props.btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
