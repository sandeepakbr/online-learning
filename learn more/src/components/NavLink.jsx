import React from 'react'
import {Link } from 'react-router-dom'

function NavLink() {
    const navStyle={
        color:'white',
        font:'bold',
        style:'none',
        underline:'none'
    }
    return (
        
        <nav  id="nav-item">
        <h4>Logo</h4>
            <ul  id="ullist" >
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={navStyle}>
                    <li>About Us</li>
                 </Link>
                 <Link to="/registration" style={navStyle}>
                    <li>Registration</li>
                </Link>
                <Link to="/examtest" style={navStyle}>
                    <li>Exam/Test</li>
                </Link>
                <Link to="/entranceexam" style={navStyle}>
                    <li>Entrance Exam</li>
                 </Link>
                 <Link to="/practices" style={navStyle}>
                    <li>Practice</li>
                </Link>
                <Link to="/quiz" style={navStyle}>
                <li>Quiz</li>
            </Link>
            <Link to="/selecteducation" style={navStyle}>
                <li>Select Qualification</li>
             </Link>
             <Link to="/solveandvin" style={navStyle}>
                <li>Solve Question </li>
            </Link>
            <Link to="/studentclass" style={navStyle}>
                <li>Student Class</li>
            </Link>
            <Link to="/studynotes" style={navStyle}>
                <li>Study Notes</li>
             </Link>
             <Link to="/subject" style={navStyle}>
                <li>Choose Subject</li>
            </Link>
            <Link to="/profile" style={navStyle}>
            <li>Visitor Profile</li>
         </Link>
         </ul>
        </nav>
      
    )
}

export default NavLink
