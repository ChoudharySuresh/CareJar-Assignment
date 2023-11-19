import './App.css';
import Category from './Category/Category';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Dentist from "../src/Component/Dentist/Dentist"
import Gynecologist from "../src/Component/Gynecologist/Gynecologist"
import Dietitian from "../src/Component/Dietitian/Dietitian"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Category/>}></Route>
        <Route path='/dentist' element={<Dentist/>}></Route>
        <Route path='/gynecologist' element={<Gynecologist/>}></Route>
        <Route path='/dietitian' element={<Dietitian/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
