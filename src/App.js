import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
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
import Profile from "./DashBoard/Profile/Profile";
import ViewQuestion from "./DashBoard/ViewQuestion/ViewQuestion";
import Payment from "./Pages/Payment/Payment";
import Service from "./Pages/Service/Service";
import Event from "./Pages/Home/Event/Event";
import EventDeatils from "./DashBoard/ScholarHouse/AllEvents/EventDeatils/EventDeatils";
import QuizeHome from "./Pages/Quize/QuizeHome/QuizeHome";
import { Content } from "antd/lib/layout/layout";
import Contract from "./Pages/Contract/Contract";
import Shop from "./Pages/Shop/Shop";
import { Provider } from "react-redux";
import store from "./store/store";
import ViewCartProduct from "./Pages/Shared/Header/ViewCartProduct";
import { createContext, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { ToastContainer } from "react-toastify";

export const NewAppContext = createContext();
function App() {
  const [depositInfo, setDepositInfo] = useState([]);
  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <NewAppContext.Provider value={{ depositInfo, setDepositInfo }}>
              {/* <TopHeader></TopHeader> */}
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  {/* <Dashboard></Dashboard> */}
                  <Home />
                </Route>
                <Route path="/contract">
                  <Contract></Contract>
                </Route>
                <Route path="/home">
                  {/* <Dashboard></Dashboard> */}
                  <Home />
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
                <Route path="/service">
                  <Service></Service>
                </Route>
                <Route path="/shop">
                  <Shop></Shop>
                </Route>
                <Route path="/cartView">
                  <ViewCartProduct></ViewCartProduct>
                </Route>
                <PrivateRoute path="/quize">
                  <QuizeHome></QuizeHome>
                </PrivateRoute>
                <PrivateRoute path="/event">
                  <Event></Event>
                </PrivateRoute>
                <Route path="/eventDetails/:eventId">
                  <EventDeatils></EventDeatils>
                </Route>
                <PrivateRoute path="/takeschedule/:scholarId">
                  <GetSchedule></GetSchedule>
                </PrivateRoute>
                <PrivateRoute path="/question">
                  <Question></Question>
                </PrivateRoute>

                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/donation">
                  <Payment></Payment>
                </PrivateRoute>
                <PrivateRoute path="/viewquestion/:questionId">
                  <ViewQuestion></ViewQuestion>
                </PrivateRoute>
              </Switch>
              <Footer></Footer>
            </NewAppContext.Provider>

            {/* Same as */}
            <ToastContainer />
          </Router>
        </AuthProvider>
      </Provider>
      <MessengerCustomerChat pageId="259964438007932" appId="339672741151658" />
    </div>
  );
}

export default App;
