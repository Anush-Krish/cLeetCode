import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

import LogIn from "./components/Login/LogIn.jsx";
import AllProblems from "./components/AllProblems/AllProblems.jsx";

import ProblemPage from"./components/ProblemPage/ProblemPage.jsx"



function App() {
    return (
        <BrowserRouter>

                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/problemset/all/" element={<AllProblems />}/>
                    <Route path="/problem/:pid/" element={<ProblemPage/>}/>

                    {/*<Route path="/LogIn" element={<LogIn/>}/>*/}

                </Routes>

        </BrowserRouter>
    );
}

export default App;
