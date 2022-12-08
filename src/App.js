import React from "react";
import "./App.css";
import Main from "./main/main";
import Topbar from "./component/topBar/Topbar";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/footer";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Topbar />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
