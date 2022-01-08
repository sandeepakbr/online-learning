import './App.css';
import NavLink  from './components/NavLink';
import Sidenav from './components/Sidenav';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Registration from './components/Registration';
import ExamTest from './components/ExamTest';
import EntranceExam from './components/EntranceExam';
import Practices from './components/Practices';
import Quiz from './components/Quiz';
import SelectYourEducation from './components/SelectYourEducation';
import SolveAndWin from './components/SolveAadWIn';
import StudentClass from './components/StudentClass';
import StudyNotes from './components/StudyNotes';
import Subject from './components/Subject';
import VisitorProfile from './components/VisitorProfile';
import Footer from './components/Footer';
function App() {
  return (
    
    <Router>
    <div className="App">
     <NavLink />
    
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about"  component={AboutUs}/>
     <Route path="/registration"  component={Registration}/>
     <Route path="/examtest"  component={ExamTest}/>
     <Route path="/entranceexam"  component={EntranceExam}/>
     <Route path="/practices"  component={Practices}/>
     <Route path="/quiz"  component={Quiz}/>
     <Route path="/selecteducation"  component={SelectYourEducation}/>
     <Route path="/solveandvin"  component={SolveAndWin}/>
     <Route path="/studentclass" exact component={StudentClass}/>
     <Route path="/studynotes"  component={StudyNotes}/>
     <Route path="/subject"  component={Subject}/>
     <Route path="/profile"  component={VisitorProfile}/>
     </Switch>
     <div>
     <Sidenav/>
     </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
