import React from "react";
import {Link} from 'react-router-dom';

function Offers(props) {
  return <div class="card mb-3" style={{maxWidth:'540px'}}>
    <div class="row g-0">
      <div class="col-md-4">
       <Link to='/test2/4'><img src={props.img} class="img-fluid rounded-start" alt="..." /></Link>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
}

export default Offers;