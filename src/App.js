import React from "react"
import './App.css';
import "./index.css"
import line from "./img/line.png"
import student from "./img/student-community.png"
function App() {
  return (
    <div>
     <h1 className="heading">HOW IT WORKS!?</h1>
     <br></br>

      {/* student-community card  */}


      <div className="card">
        <img className="line" src={line} alt="line-img"/>
        <p className="sub-title">
          Join Student<br></br> Communities
        </p>
        <img className="student" src={student} alt="student-img"/>
      </div>

      
    </div>
  );
}

export default App;
