import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import TopHeader from "./Pages/Shared/ToHeader/TopHeader";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
function App() {
  return (
    <div className="App">
      <TopHeader></TopHeader>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
