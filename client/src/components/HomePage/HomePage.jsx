
import {Link} from "react-router-dom";
function HomePage(){
    return (
        <div>
        <div>
            <Link to="/signin">
                <button> Sign In</button>
            </Link>

            <Link to="/signup">
                <button>Sign Up</button>
            </Link>

            <Link to="/problems">
                <button>Problems</button>
            </Link>
            <br/>

        </div>
        <div>
            <br/><br/><br/>
            <body>
            <h1 style={{color: "green"}}>Blogs</h1>
            <br/><br/><br/><br/><br/><br/>
            Why use C++.<br/>C++ is very fast.<br/><br/>
            Why use C++.<br/>C++ is very fast.<br/>

            </body>
            <br/><br/>
        </div>
    </div>
    )}
export default HomePage;

