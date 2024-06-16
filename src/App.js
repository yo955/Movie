// Css File
import './App.css';
// React-router
import { Route,Routes } from 'react-router-dom';
// Components
import { Home } from './components/Home';
import { Watched } from './components/Watched';
import { WatchList } from './components/WatchList';
import {AddMovies} from './components/AddMovies';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
    
     <Navbar/>
     
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/WatchList' element={<WatchList/>}/>
        <Route path='/Watched' element={<Watched/>}/>
        <Route path='/btn' element={<AddMovies/>} />
    </Routes>
    </>
  );
}

export default App;
