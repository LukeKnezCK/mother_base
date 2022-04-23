import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound';
import ULearn from './components/ULearn';
import ClamJam from './components/ClamJam';
import BloodDB from './components/BloodDB';
import RPS from './components/RPS';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Work" element = {<Work/>} />
        <Route path="/Contact" element = {<Contact/>} />
        <Route path='/Work/uLearn' element = {<ULearn/>} />
        <Route path='/Work/ClamJam' element = {<ClamJam/>} />
        <Route path='/Work/BloodDB' element = {<BloodDB/>} />
        <Route path='/Work/RPS' element = {<RPS/>} />
        <Route path="*" element = {<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
