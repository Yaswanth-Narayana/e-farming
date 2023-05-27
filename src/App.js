import './Components/App.css';
import Nav from './Components/Nav.jsx';
import Home from './Components/Home.jsx';
import Seller from './Components/Seller.jsx';
import Cart from './Components/Cart.jsx';
import Footer from './Components/Footer';
import Test2 from './Components/Test2';
import {Route,Routes} from 'react-router-dom';

function App() {
  //const cards = [{ title: 'Vegetables' }, { title: 'Fruits' }, { title: 'cerials' }, { title: 'Seeds' }, { title: 'Fruits' }, { title: 'cerials' }, { title: 'Seeds' }, { title: 'Seeds' }]
  //const off = [{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},{img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'}];
  return (
    <div>
      <Nav /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Seller' element={<Seller />}/>
        <Route path='Cart' element={<Cart />}/> 
        <Route path='Test2/:id' element={<Test2 />}/>
      </Routes>
      <Footer />
      
    </div>

  )
}




export default App;
