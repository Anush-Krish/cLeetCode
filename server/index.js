const express = require('express')
const {auth} = require("./middleware");
const app = express()
const port = 3000
app.use(express.json());
let user_id_c=0;
var jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
app.use(cors());
app.use(jsonParser);

const JWT_SECRET = "secret";
const USERS=[]
const PROBLEMS =[
    {
        problemId: "1",
        title: "401. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description:
            "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        exampleIn: "left = 5, right = 7",
        exampleOut: "4",
    },
    {
        problemId: "2",
        title: "205. Add two numbers",
        difficulty: "Medium",
        acceptance: "41%",
        description:
            "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
        exampleIn: "a = 100 , b = 200",
        exampleOut: "300",
    },
    {
        problemId: "3",
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        description: "Write an algorithm to determine if a number n is happy.",
        exampleIn: "n = 19",
        exampleOut: "true",
    },
    {
        problemId: "4",
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        description: "Given number k , removed kth element",
        exampleIn: "list: 1->2->3 , k=2",
        exampleOut: "1->3",
    },
    {
        problemId: "5",
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description:
            "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        exampleIn: "left = 5, right = 7",
        exampleOut: "4",
    },
    {
        problemId: "6",
        title: "205. Add two numbers",
        difficulty: "Medium",
        acceptance: "41%",
        description:
            "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
        exampleIn: "a = 100 , b = 200",
        exampleOut: "300",
    },
    {
        problemId: "7",
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54%",
        description: "Write an algorithm to determine if a number n is happy.",
        exampleIn: "n = 19",
        exampleOut: "true",
    },
    {
        problemId: "8",
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        description: "Given number k , removed kth element",
        exampleIn: "list: 1->2->3 , k=2",
        exampleOut: "1->3",
    },
];

const SUBMISSION=[];

app.get('/', (req,res)=> {
    res.json({
        msg:"Hello World"
    })
});


app.post('/signup',(req, res)=> {

    const email=req.body.email;
    const password=req.body.password;

    if(USERS.find((x)=>x.email===email)){
        return res.status(403).json({msg:"Email already exists."})
    }

    const newUser = {
        email,
        password,
        id:user_id_c++
    };

    USERS.push(newUser)

    return res.json({
        msg:"Success",
    });
});

app.post('/login', (req, res)=> {


    const email=req.body.email;
    const password=req.body.password;
    const user=USERS.find((x)=>x.email===email);


    if(!user){
        return res.status(403).json({msg:"User not found."});
    }
    if(user.password!==password){
        return res.status(403).json({msg:"Incorrect password."})
    }
    const token=jwt.sign(
        {
            id:user.id,
        },
        JWT_SECRET
    );
    return res.json({token});
})
app.get('/problems', (req,res)=>{
    const filteredProblems =PROBLEMS.map((x)=>({
        problemId:x.problemId,
        title:x.title,
        difficulty:x.difficulty,
        acceptance:x.acceptance
    }))
    res.json({
        problems:filteredProblems,
    })
})

app.get('/problems/:id',(req,res) =>{
    const id = req.params.id;
    const problems= PROBLEMS.find((x)=>
    x.problemId===id);
    if(!problems){
        return res.status(411).json({});
    }
    res.json({problems,})
})
app.get("/me",auth,(req,res)=>{
    const user=USERS.find((x)=>x.id===req.userId)
    res.json({
        email:user.email,
        id:user.id
    });
})

app.get("/submissions/:problemId",auth,(req, res)=> {
    const problemId=req.params.problemId;
    const submissions=SUBMISSION.filter((x)=>
    x.problemId===problemId && x.userId===req.userId
    );
    res.json({
        submissions,
    });

})
app.post("/submission",auth,(req, res)=> {
    const isCorrect=Math.random()<0.5;
    const problemId=req.body.problemId;
    const submission=req.body.submission;
    if(isCorrect){
        SUBMISSION.push({
            submission,
            problemId,
            userId:req.userId,
            status:"AC"
        });
        return res.json({
            status:"AC"
        })
    }
    else{
        SUBMISSION.push({
            submission,
            problemId,
            userId:req.userId,
            status:"WA"
        })
        return res.json({
            status:"WA"
        })
    }
})

app.listen(port, ()=> {
    console.log(`cLeetCode app listening on port ${port}`)
})
