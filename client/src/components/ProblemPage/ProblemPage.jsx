// //On click on problem from Problems component redirect to this and display title
// // render suitable example based on id.
// import {useState} from "react";
// import PropTypes from "prop-types";
// import {useParams} from "react-router-dom";
// import Problems from "./Problems.jsx";
//
// const Examples=[
//     {
//         eid:"1",
//         title:"Bitwise AND of Numbers Range.",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },    {
//         eid:"2",
//         title:"Happy Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },    {
//         eid:"3",
//         title:"Happy Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },    {
//         eid:"4",
//         title:"Happy Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },    {
//         eid:"5",
//         title:"Remove Linked List Elements",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },   {
//         eid:"6",
//         title:"Two String Compare.",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },   {
//         eid:"7",
//         title:"Second Smallest Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },   {
//         eid:"8",
//         title:"Second Smallest Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },   {
//         eid:"9",
//         title:"Second Smallest Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },   {
//         eid:"10",
//         title:"Second Smallest Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     },   {
//         eid:"11",
//         title:"Second Largest Number",
//         description:"vsgbstarevaervgaergaerbvaevazfbvavb",
//         input:"1 2 3 4 5",
//         output:"5"
//
//     }
// ]
// const QuestionPage=()=>{
//
//     const [examples,setExamples]=useState("");
//     const {eid}=useParams();
//     return(
//     )
//
// }
//
// function Example(props){
//     Examples.propsTypes={
//         eid:PropTypes.string.isRequired,
//         title:PropTypes.string.isRequired,
//         description:PropTypes.string.isRequired,
//         input:PropTypes.string.isRequired,
//         output:PropTypes.string.isRequired
//     };
//     const eid=props.eid;
//     const title=props.title;
//     const description=props.description;
//     const input=props.input;
//     const output=props.output;
//     return <tr>
//         <td>{eid}</td>
//         <td><u>{title}</u></td>
//
//     </tr>
//
//
// }
//
// export default QuestionPage;