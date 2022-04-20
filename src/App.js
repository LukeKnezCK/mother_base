import './App.css';


import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Work" element = {<Work/>} />
        <Route path="/Contact" element = {<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;