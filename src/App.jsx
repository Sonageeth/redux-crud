
import { Route, Routes } from 'react-router-dom';
import './App.css';
import View from './Components/View';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        
        
      <Route path='edit/:id' element={<Edit/>} />
        {/* <Route path='/' element={<View/>} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
