import React from "react";

function Cat(props){
  return <div class="container py-3 card col-3" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
  </div>
</div>
}

export default Cat;