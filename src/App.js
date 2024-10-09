import './App.css';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
import StudentPage from './pages/StudentPage';
import {HashRouter as Router , Routes, Route} from 'react-router-dom';
import MemberList from './components/MemberList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/memberform" element={<FormPage/>}/>
        <Route path="/studentform" element={<StudentPage/>}/>
        <Route path="/membertable" element={<MemberList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
