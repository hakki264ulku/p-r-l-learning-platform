import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';
import './assets/responsive.css';
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import 'react-modal-video/css/modal-video.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Events from './pages/Events/EventsPage';
import Classes from './pages/Classes/Classes';
import Teachers from './pages/TeacherPage/TeacherPage';
import Contact from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import EventDetails from './pages/EventsDetails/EventsDetails';
import TeacherDetails from './pages/TeacherDetails/TeacherDetails';
import ClassesDetails from './pages/ClassesDetails/ClassesDetails';
import Login from './pages/Subscribe/login';
import SignUp from './pages/Subscribe/SignUp';
import StudentHomePage from './pages/StudentHomePage/StudentHomePage';
import { ThreeDContentPage } from './pages/3dContentPage/3dContentPage';
import { ThreeDContentsPage } from './pages/3dContentsPage/3dContentsPage';
import { Logout } from './pages/Subscribe/logout';

/* import font */
// basename="/kintergarten"

const App= ()=> {
  useEffect(() => {
    document.title = "Pırıl Campus"
 }, []);
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={() => <Home title="kinterGargen" />}/>
          <Route exact path="/error" component={() => <ErrorPage exact title="Error" />}/>
          <Route exact path="/contact" component={() => <Contact title="Contact" />}/>
          <Route exact path="/aboutus" component={() => <AboutUs title="about us" />}/>
          <Route exact path="/teachers" component={() => <Teachers title="teachers" />}/>
          <Route exact path="/teacher/details" component={() => <TeacherDetails title="teachers" title1="details" />}/>
          <Route exact path="/events" component={() => <Events title="events" />}/>
          <Route exact path="/classes" component={() => <Classes title="classes" />}/>
          <Route exact path="/classe/details" component={() => <ClassesDetails title="classes" title1="details" />}/>
          <Route exact path="/event/details" component={() => <EventDetails title="events" title1="details" />}/>
          <Route exact path="/login" component={() =>  <Login title="Login" /> } />
          <Route exact path="/logout" component={() =>  <Logout title="Logout" /> } />
          <Route exact path="/signup" component={() => <SignUp title="Sign Up" />} />
          <Route exact path="/student" component={() => <StudentHomePage title="Home Page" />} />
          <Route exact path="/student/3dcontent" component={()=> <ThreeDContentsPage /> } />
          <Route path="/student/3dcontent/content" component={()=> <ThreeDContentPage /> } />
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
