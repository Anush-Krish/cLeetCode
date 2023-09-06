import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import HomePage from './components/HomePage.jsx';
import SignUp from './components/SignUp.jsx';
import Problems from "./components/Problems.jsx";
import SignIn from "./components/SignIn.jsx";

// import QuestionPage from "./components/QuestionPage.jsx"

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
        path:'/signin',
        component:SignIn,
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
