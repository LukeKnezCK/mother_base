import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Work" element = {<Work/>} />
        <Route path="/Contact" element = {<Contact/>} />
        <Route path="*" element = {<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
