
import {Link} from "react-router-dom";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/divider/divider.js';

const HomePage=()=>{
    return (
        <div align="center">
        <div align="center">


            <Link to="/login">
                <md-filled-button> Sign In</md-filled-button>
            </Link>

            <Link to="/signup">
                <md-filled-button>Sign Up</md-filled-button>
            </Link>



            <Link to="/problemset/all/">
                <md-outlined-button>Problems</md-outlined-button>
            </Link>



        </div>
        <div>

            <body>
            <p>
            <h1 style={{color: "green"}}>Blogs</h1>
            <p>
                <p>
                    <md-divider role="separator"></md-divider>
                    Why use C++.<br/>C++ is very fast.

                    <md-divider role="separator"></md-divider>
                </p>
                <md-divider role="separator"></md-divider>
            Why use C++.<br/>C++ is very fast.
            <md-divider role="separator"></md-divider>
            </p>
            </p>
            </body>

        </div>
    </div>
    )}
export default HomePage;

