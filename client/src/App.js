import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import { LibraryList } from './pages/LibraryList';
import { EditLibrary } from './pages/EditLibrary';
import { CreateLibrary } from './pages/CreateLibrary';
import { ViewLibrary } from './pages/ViewLibrary';
import { CreateStudent } from './pages/CreateStudent';
import { StudentList } from './pages/StudentList';
import { CreateBook } from "./pages/CreateBook";
import { EditStudent } from "./pages/EditStudent";
import { BookList } from './pages/BookList';

const App = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg p-2">
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
        <Route path="/:id" element={<ViewLibrary />}></Route>
        <Route path="/edit/:id" element={<EditLibrary />}></Route>
        <Route path="/create" element={<CreateLibrary />}></Route>
        
        <Route path="/:id/students" element={<StudentList />}></Route>
        <Route path="/:id/students/create" element={<CreateStudent />}></Route>
        <Route path="/student/:id/edit" element={<EditStudent />}></Route>

        <Route path="/:id/books/create" element={<CreateBook />}></Route>
        <Route path="/:id/books" element={<BookList />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
 