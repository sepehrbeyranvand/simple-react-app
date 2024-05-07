import './App.css';

import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/notfound';
import Article from './pages/article';




function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/Article/:id' element={<Article/>}/>
        </Routes>
      </Router>



    </div>
  );
}

export default App;