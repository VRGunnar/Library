import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import { LibraryList } from './LibraryList';
import { EditLibrary } from './EditLibrary';
import { CreateLibrary } from './CreateLibrary';



const App = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link text-white">Libraries</Link> 
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link text-white">Create Library</Link> 
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<LibraryList />}></Route>
        <Route path="/edit/:id" element={<EditLibrary />}></Route>
        <Route path="/create" element={<CreateLibrary />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
 