import React from "react";
import "./Dashboard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SendQuestion from "./Sendquestion/SendQuestion";
import DashboardHome from "./DasboardHome/DashboardHome";
import Profile from "./Profile/Profile";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MyQuestion from "./Myquestion/MyQuestion";
import AddScholar from "./AddScholar/AddScholar";
import ScholarQuestion from "./ScholarHouse/ScholarQuestion/ScholarQuestion";
import TakeSchedule from "./TakeSchedule/TakeSchedule";
import CreateEvent from "./CreateEvent/CreateEvent";
import AllEvents from "./ScholarHouse/AllEvents/AllEvents";
import ScheduleList from "./ScheduleList/ScheduleList";
import Schedule from "./ScholarHouse/Schedule/Schedule";
import MyEvent from "../Pages/Home/Event/MyEvent";
import UserList from "./UserLIst/UserList";
import UserNormal from "./UserLIst/UserNormal";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import MyPayment from "./PaymentInfo/MyPayment";
import QuizeHome from "../Pages/Quize/QuizeHome/QuizeHome";
import Finance from "./Finace/Finance";
import Deposit from "./Deposit/Deposit";
import Tnxld from "./Tnxld/Tnxld";
import ModelList from "./Model/ModelList";
import AddModel from "./Model/AddModel";
import AddProblem from "./Problem/AddProblem";
import ProblemList from "./Problem/ProblemList";
import AddEName from "./EName/AddEName";
import ENameList from "./EName/ENameList";
import AddWarranty from "./Warranty/AddWarranty";
import WarrantyList from "./Warranty/WarrantyList";
import AddSeries from "./Series/AddSeries";
import SeriesList from "./Series/SeriesList";
import CustomerInformation from "./CustomerInformation/CustomerInformation";
import Report from "./Report/Report";

// import ViewQuestion from "./ViewQuestion/ViewQuestion";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, userInfo, admin, logOut } = useAuth();
  // console.log(userInfo);

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-2 grid-cols-1  pt-8 ">
      <div className="col-span-1  shadow-sm rounded xl:mx-8 lg:mx-4 pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div className="bangla-text profile pt-2 col-span-2">
            <img
              className="rounded-full w-12 h-12 ml-28 xl:ml-4 lg:ml-4 ml-auto mr-auto"
              src={
                user.photoURL ||
                userInfo?.image ||
                "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
              }
              alt=""
            />
          </div>
          <div className="col-span-1">
            <h3 className="text-center pt-4 text-xl font-bold ">Admin</h3>
          </div>
        </div>

        <div>
          <div class=" flex items-center justify-center  py-6">
            <div class="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-1 bg-white phone-menu-bar">
              <ul class=" md:flex-col bangla-text w-full phone-menu-bar-text  w-100 menu-box">
                <div className="grid grid-cols-2 lg:grid-cols1 xl:grid-cols-1">
                  <li class="my-px">
                    <Link
                      to={`${url}/dashboard`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 notification">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                      </span>
                      <span class="ml-3">ড্যাশবোর্ড</span>
                      <span class="notification1 flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                        3
                      </span>
                    </Link>
                  </li>

                  <li class="my-px">
                    <Link
                      to={`${url}/myFinance`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400  md:ml-0 menu1">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Order List</span>
                    </Link>
                  </li>
                  <li class="my-px">
                    <Link
                      to={`${url}/customerInfo`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400  md:ml-0 menu1">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Customer Information</span>
                    </Link>
                  </li>
                  <li class="my-px">
                    <Link
                      to={`${url}/report`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400  md:ml-0 menu1">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Report</span>
                    </Link>
                  </li>

                  <li class="my-px">
                    <Link
                      to={`${url}/myDeposit`}
                      class="flex flex-row items-center h-12 px-16 xl:px-6 lg:px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex  justify-center text-lg text-gray-400  md:ml-0 menu1">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Device Info</span>
                    </Link>
                  </li>

                  <li class="my-px">
                    <Link
                      to={`${url}/myquestions`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400  md:ml-0 menu1">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Brand List</span>
                    </Link>
                  </li>
                </div>

                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/sendquestions`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Brand</span>
                    </Link>
                  </li>
                </div>

                {/* add series brand wise */}
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/addSeries`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Series</span>
                    </Link>
                  </li>
                </div>
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/seriesList`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Series List</span>
                    </Link>
                  </li>
                </div>
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/addModel`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Model</span>
                    </Link>
                  </li>
                </div>
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/modelList`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Model List</span>
                    </Link>
                  </li>
                </div>
                {/* add problem */}
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/addProblem`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Problem</span>
                    </Link>
                  </li>
                </div>
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/problemList`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Problem List</span>
                    </Link>
                  </li>
                </div>
                {/* add problem */}

                {/* add engineer Name */}
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/addEngineer`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Engineer</span>
                    </Link>
                  </li>
                </div>
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/engineerList`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Engineer List</span>
                    </Link>
                  </li>
                </div>

                {/* add warrarnty */}
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/addWarranty`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Add Warranty</span>
                    </Link>
                  </li>
                </div>
                <div className="flex md:flex-col colom-number2">
                  <li class="my-px">
                    <Link
                      to={`${url}/warrantyList`}
                      class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                      <span class="flex items-center justify-center text-lg text-gray-400">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                      </span>
                      <span class="ml-3">Warranty List</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-second col-span-4  container rounded">
        <Switch>
          <Route path={`${path}/myquestions`}>
            <MyQuestion></MyQuestion>
          </Route>
          <Route path={`${path}/addModel`}>
            <AddModel />
          </Route>
          <Route path={`${path}/modelList`}>
            <ModelList />
          </Route>
          <Route path={`${path}/addSeries`}>
            <AddSeries />
          </Route>
          <Route path={`${path}/seriesList`}>
            <SeriesList />
          </Route>
          <Route path={`${path}/report`}>
            <Report />
          </Route>
          <Route path={`${path}/addProblem`}>
            <AddProblem />
          </Route>
          <Route path={`${path}/problemList`}>
            <ProblemList />
          </Route>
          <Route path={`${path}/addEngineer`}>
            <AddEName />
          </Route>
          <Route path={`${path}/engineerList`}>
            <ENameList />
          </Route>
          <Route path={`${path}/addWarranty`}>
            <AddWarranty />
          </Route>
          <Route path={`${path}/WarrantyList`}>
            <WarrantyList />
          </Route>
          <Route path={`${path}/scholarquestions`}>
            <ScholarQuestion></ScholarQuestion>
          </Route>
          <Route path={`${path}/takeschedule`}>
            <TakeSchedule></TakeSchedule>
          </Route>
          <Route path={`${path}/createevent`}>
            <CreateEvent></CreateEvent>
          </Route>
          <Route path={`${path}/allevents`}>
            <AllEvents></AllEvents>
          </Route>
          <Route path={`${path}/myeventlist`}>
            <MyEvent></MyEvent>
          </Route>
          <Route path={`${path}/schedulelist`}>
            <ScheduleList></ScheduleList>
          </Route>
          <Route path={`${path}/schedule`}>
            <Schedule></Schedule>
          </Route>
          {/* <Route path={`${path}/viewquestion/questionId`}>
            <ViewQuestion></ViewQuestion>
          </Route> */}
          <Route path={`${path}/sendquestions`}>
            <SendQuestion></SendQuestion>
          </Route>
          <Route path={`${path}/profile`}>
            <Profile></Profile>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addscholar`}>
            <AddScholar></AddScholar>
          </Route>
          <Route path={`${path}/userlist`}>
            <UserList></UserList>
          </Route>
          <Route path={`${path}/scholarlist`}>
            <UserNormal></UserNormal>
          </Route>
          <Route path={`${path}/myquize`}>
            <QuizeHome></QuizeHome>
          </Route>
          myquize
          <Route path={`${path}/paymentInfo`}>
            <PaymentInfo></PaymentInfo>
          </Route>
          <Route path={`${path}/mypaymentInfo`}>
            <MyPayment></MyPayment>
          </Route>
          <Route path={`${path}/myFinance`}>
            <Finance />
          </Route>
          <Route path={`${path}/myDeposit`}>
            <Deposit />
          </Route>
          <Route path={`${path}/depositHistory`}>
            <Tnxld />
          </Route>
          <Route path={`${path}/customerInfo`}>
            <CustomerInformation />
          </Route>
          <Route path={`${path}/manageProducts`}></Route>
          <Route path={`${path}/reviews`}></Route>
          <Route path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
