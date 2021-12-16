import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import TopHeader from "./Pages/Shared/ToHeader/TopHeader";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Register from "./Pages/Register/Register";
import GetSchedule from "./Pages/GetSchedule/GetSchedule";
import Question from "./Pages/Question/Question";
import Dashboard from "./DashBoard/Dashboard";
import DashboardHome from "./DashBoard/DasboardHome/DashboardHome";
import Profile from "./DashBoard/Profile/Profile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <TopHeader></TopHeader>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <PrivateRoute path="/getschedule">
              <GetSchedule></GetSchedule>
            </PrivateRoute>
            <PrivateRoute path="/question">
              <Question></Question>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
