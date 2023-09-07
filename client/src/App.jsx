import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import HomePage from './components/HomePage/HomePage.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Problems from "./components/AllProblems/Problems.jsx";
import LogIn from "./components/Login/LogIn.jsx";


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/signup',
        component: SignUp,
    },
    {
      path: '/problems',
        component: Problems,
    },
    {
        path:'/login',
        component:LogIn,
    },

    // {
    //     path:'/questionpage',
    //     component:QuestionPage
    // }
];

function App() {
    return (
        <Router>

                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>

        </Router>
    );
}

export default App;
