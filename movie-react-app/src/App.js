import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import AddMovie from './components/pages/AddMovie';
import AllMovies from './components/pages/AllMovies';
import Favourites from './components/pages/Favourites';
function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Routes>
        <Route path ="/" element={<AllMovies/>}/>
        <Route path ="/addMovie" element={<AddMovie/>}/>
        <Route path ="/favourites" element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;
