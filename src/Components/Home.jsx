import React from 'react';
import './App.css';
import Offers from './Offers.jsx';
import Categories from './Categories.jsx';
import Test from './Test'
import{off,cards} from './Db.js';

function Home() {
  return (
    <div>
      <Test />
      <div class='container px-2 py-5'><div align='center'><h1>Categories</h1></div>
        <div class='container row px-2 py-5'>{cards.map(func)}</div>
      </div>
      <div class='container px-2 py-5'><div align='center'><h1>Deals of the Day</h1></div>
        <div class='container row px-2 py-5 ms-auto'>{off.map(fun)}</div>
      </div>
    </div>

  )
}

function func(e) {
  return <Categories title={e.title} />
}
function fun(e) {
  return <Offers img={e.img} />
}


export default Home;
