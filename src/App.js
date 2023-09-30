import { useState } from "react";
import * as XLSX from "xlsx";
import './App.css';
// import SignIn from "./SignIn.Js";
import Signup from "./SignUp";
// import './Upload.js'
import Login from "./Login";
import Navbar from "./Navbar";
import Upload from "./Upload.js";
// import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <div className="App">
         <Switch>
  
        <Route path="/login">
          {/* <Navbar /> */}
          <Login/>
        </Route>

           <Route path="/">
              {/* <Navbar/> */}
              <Signup/>
         </Route>
        </Switch>

      </div>
      
    </Router>
    

    
  );
}

export default App;