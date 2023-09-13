import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AllProblems=()=>{
    const [problems,setProblems]=useState([]);
    const init=async()=>{
        const response=await fetch("http://localhost:3000/problems",{
            method:"GET"
        });
        const json=await response.json();
        setProblems(json.problems);

        useEffect(()=>{
            init()
        },[]);
    }
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
                   <tr>
                       <Link to={`/problems/:${prob.problemId}`}>
                       <td>prob.title</td>
                       </Link>
                       <td className={`${prob.acceptance}`}>prob.acceptance</td>
                       <td className={`${prob.difficulty}`}>prob.difficulty</td>
                   </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
}
export default AllProblems;