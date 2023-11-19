import {useEffect, useState} from "react";
import {json, Link} from "react-router-dom";
import err from "jsonwebtoken/lib/JsonWebTokenError.js";
import problemPage from "../ProblemPage/ProblemPage.jsx";
import './AllProblems.css'
const AllProblems=()=>{
    const [problems,setProblems]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/problems")
            .then((response) => response.json())
            .then((actualProblem)=>{
               // console.log(actualProblem);
                setProblems(actualProblem.problems);
                //console.log(problems)
            })
            .catch((err)=>{
                   console.log(err.message)
        });

    },[]);


    return(
       <div id="allproblems">
           <table>
               <tbody>
               <tr>
                   <th>Title</th>
                   <th>Difficulty</th>
                   <th>Acceptance</th>
               </tr>
               {problems.map((prob)=>(

                   <tr key="problemId">

                       <Link to='/problem/${prob.problemId}'>
                       <td>{prob.title}</td>
                       </Link>
                       <td >{prob.difficulty}</td>
                       <td >{prob.acceptance}</td>
                   </tr>
               ))}
               </tbody>
           </table>
       </div>
   );

}
export default AllProblems;