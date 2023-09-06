import {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const problems1=[{
    id:"1",
    title:"Bitwise AND of Numbers Range.",
    difficulty:"Medium",
    acceptance:"42%"
    },
    {
        id:"2",
        title:"Happy Number",
        difficulty:"Easy",
        acceptance:"54.9%"
    },
    {
        id:"3",
        title:"Happy Number",
        difficulty:"Medium",
        acceptance:"54.9%"
    },
    {
        id:"4",
        title:"Happy Number",
        difficulty:"Easy",
        acceptance:"54.9%"
    },
    {
        id:"5",
        title:"Remove Linked List Elements",
        difficulty:"Hard",
        acceptance:"42%"
    }];
const problems2=[{
    id:"6",
    title:"Two String Compare.",
    difficulty:"Easy",
    acceptance:"90%"
    },
    {
        id:"7",
        title:"Second Smallest Number",
        difficulty:"Medium",
        acceptance:"75%"
    },
    {
       id:"8",
        title:"Second Smallest Number",
        difficulty:"Hard",
        acceptance:"75%"
    },
    {
        id:"9",
        title:"Second Smallest Number",
        difficulty:"Medium",
        acceptance:"75%"
    },
    {
       id:"10",
        title:"Second Smallest Number",
        difficulty:"Medium",
        acceptance:"75%"
    },
    {
        id:"11",
        title:"Second Largest Number",
        difficulty:"Easy",
        acceptance:"80%"
    }];
function Problems(){
    const [problems,setProblems]=useState([{
    }])
    return (
      <div>

            <div>


                {problems.map((problem,index)=> <ProblemStatement
                    key={index}
                    id={problem.id}
                    title={problem.title}
                    acceptance={problem.acceptance}
                    difficulty={problem.difficulty}

                        />)}
            </div>
          <div>
              <button onClick={()=>{
                  setProblems(problems1);
              }}>1</button>
              <button onClick={()=>{
                  setProblems(problems2);
              }}>2</button>
          </div>
      </div>
    )
}
function ProblemStatement(props){

    ProblemStatement.propTypes = {
        id:PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        acceptance: PropTypes.string.isRequired,
        difficulty: PropTypes.string.isRequired,
    };

    const id=props.id;
    const title=props.title;
    const acceptance=props.acceptance;
    const difficulty=props.difficulty;
    return <tr>
        <td>{id}</td>
        {/*<Link to={`/questionpage/:${props.eId}`}>*/}
        <td><u>{title}</u></td>
        {/*</Link>*/}
        <td>{acceptance}</td>
        <td style={{color:difficulty==="Hard" ? "red" :difficulty==="Easy"?"green":"orange"}}>
            {difficulty}</td>

    </tr>
}

export default Problems;