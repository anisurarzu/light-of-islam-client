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

        {userInfo?.role === "admin" ? (
          // dashboard menu
          <div class="  ">
            <div class="flex w-full max-w-xs  bg-green-600">
              <ul class="flex  w-full bangla-text">
                <li class="">
                  <Link
                    to={`${url}/dashboard`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 b">
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
                    <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                      3
                    </span>
                  </Link>
                </li>

                <li class="my-px">
                  <Link
                    to={`${url}/userlist`}
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
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">ব্যবহারকারী</span>
                    {/* <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                      1k
                    </span> */}
                  </Link>
                </li>

                <li class="my-px">
                  <Link
                    to={`${url}/makeadmin`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-green-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">এডমিন বানান</span>
                  </Link>
                </li>
                <li class="my-px">
                  <Link
                    to={`${url}/addscholar`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-green-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">স্কলার সংযুক্ত করুন</span>
                  </Link>
                </li>
                <li class="my-px">
                  <Link
                    to={`${url}/paymentinfo`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-green-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">পেমেন্ট তথ্য</span>
                  </Link>
                </li>
                <li class="my-px">
                  <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                    Account
                  </span>
                </li>
                <li class="my-px">
                  <Link
                    to={`${url}/profile`}
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
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">প্রোফাইল</span>
                  </Link>
                </li>

                <li class="my-px">
                  <a
                    href="/"
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-red-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                    <button class="ml-3" onClick={logOut}>
                      লগআউট
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : userInfo?.role === "scholar" ? (
          <div class="  scholar ">
            <div class="flex w-full max-w-xs p-4 ">
              <ul class="flex flex-col bangla-text w-full">
                <li class="">
                  <Link
                    to={`${url}/dashboard`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 ">
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
                    <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                      3
                    </span>
                  </Link>
                </li>

                <li class="my-px">
                  <Link
                    to={`${url}/scholarquestions`}
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
                        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                      </svg>
                    </span>
                    <span class="ml-3">প্রশ্ন-উত্তর</span>
                  </Link>
                </li>

                <li class="my-px">
                  <Link
                    to={`${url}/createevent`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-green-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">ইভেন্ট তৈরী করুন</span>
                  </Link>
                </li>
                <li class="my-px">
                  <Link
                    to={`${url}/allevents`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-green-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">ইভেন্ট</span>
                  </Link>
                </li>
                <li class="my-px">
                  <Link
                    to={`${url}/schedule`}
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-green-400">
                      <i class="far fa-clock text-xl pl-1"></i>
                    </span>
                    <span class="ml-3">শিডিউল চেকিং</span>
                  </Link>
                </li>
                <li class="my-px">
                  <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                    Account
                  </span>
                </li>
                <li class="my-px">
                  <Link
                    to={`${url}/profile`}
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
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </span>
                    <span class="ml-3">প্রোফাইল</span>
                  </Link>
                </li>

                <li class="my-px">
                  <a
                    href="/"
                    class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                    <span class="flex items-center justify-center text-lg text-red-400">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                    <button class="ml-3" onClick={logOut}>
                      লগআউট
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : userInfo?.payRole === "finance" ? (
          <div>
            <div class="py-6">
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
                        <span class="ml-3">Finance</span>
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
                        <span class="ml-3">Add Order Information</span>
                      </Link>
                    </li>
                    {/* customer information */}

                    <li class="my-px">
                      <Link
                        to={`${url}/depositHistory`}
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
                        <span class="ml-3">Insert D-History</span>
                      </Link>
                    </li>
                    <li class="my-px">
                      <Link
                        to={`${url}/createevent`}
                        class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-green-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">ইভেন্ট তৈরী করুন</span>
                      </Link>
                    </li>
                    <li class="my-px">
                      <Link
                        to={`${url}/allevents`}
                        class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-green-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">ইভেন্ট</span>
                      </Link>
                    </li>
                    <li class="my-px">
                      <Link
                        to={`${url}/userlist`}
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
                        <span class="ml-3">ব্যবহারকারী</span>
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
                        <span class="ml-3">আমার প্রশ্নগুলো</span>
                      </Link>
                    </li>
                  </div>

                  <div className="flex md:flex-col colom-number3">
                    <li class="my-px">
                      <Link
                        to={`${url}/schedulelist`}
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
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">সময়সূচী</span>
                        {/* <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                    1k
                  </span> */}
                      </Link>
                    </li>
                    <li class="my-px">
                      <Link
                        to={`${url}/myquize`}
                        class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400 menu3">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">কুইজ</span>
                        {/* <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                    1k
                  </span> */}
                      </Link>
                    </li>
                  </div>

                  {/*  */}
                  {/*  */}
                  {/*  */}

                  <div className="flex md:flex-col colom-number4">
                    <li class="my-px">
                      <Link
                        to={`${url}/myeventlist`}
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
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">ইভেন্ট</span>
                        {/* <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                    1k
                  </span> */}
                      </Link>
                    </li>
                    <li class="my-px">
                      <Link
                        to={`${url}/mypaymentInfo`}
                        class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400 menu4">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">পেমেন্ট তথ্য</span>
                        {/* <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                    1k
                  </span> */}
                      </Link>
                    </li>
                  </div>

                  <li class="my-px ">
                    <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase account-heder">
                      Account
                    </span>
                  </li>

                  {/*  */}
                  {/*  */}
                  {/*  */}
                  <div className="grid grid-cols-2 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1">
                    <li class="my-px">
                      <Link
                        to={`${url}/profile`}
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
                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">প্রোফাইল</span>
                      </Link>
                    </li>
                    <li class="my-px">
                      <a
                        href="/"
                        class="flex flex-row items-center h-12 xl:px-4 lg:px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                          </svg>
                        </span>
                        <span class="ml-1">Notifications</span>
                        <span class=" last-notification flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 xl:px-2  lg:px-2 rounded-full ml-auto">
                          10
                        </span>
                      </a>
                    </li>
                  </div>

                  {/*  */}
                  {/*  */}
                  {/* flex md:flex-col colom-number4  */}
                  {/*  */}
                  <div className="flex md:flex-col colom-number5">
                    <li class="my-px">
                      <a
                        href="/"
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
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </span>
                        <span class="ml-3">সেটিংস</span>
                      </a>
                    </li>
                    <li class="my-px">
                      <a
                        href="/"
                        class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                        <span class="flex items-center justify-center text-lg text-red-400 menu6">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                          </svg>
                        </span>
                        <button class="ml-3" onClick={logOut}>
                          লগআউট
                        </button>
                      </a>
                    </li>
                  </div>
                  {/*  */}
                  {/*  */}
                  {/*  */}
                </ul>
              </div>
            </div>
          </div>
        ) : userInfo?.payRole === "member" ? (
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
                        <span class="ml-3">Model List</span>
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
        ) : (
          <div></div>
        )}
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
