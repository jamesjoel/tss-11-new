import { createSlice } from '@reduxjs/toolkit'

let data = [
    {
        id : 1,
        que : "HTML Stand For ?",
        ansA : "Hyper Tell Markup Language",
        ansB : "Hiest Text Markup Language",
        ansC : "Hyper Text Markup Language",
        ansD : "Hyper Text Mock Language",
        correctAns : "ansC" 
    },
    {
        id : 2,
        que : "CSS Stand For ?",
        ansA : "Cascading Style Sheet",
        ansB : "Cascading Secret Sheet",
        ansC : "Cascading System Sheet",
        ansD : "Cascading Style Short",
        correctAns : "ansA" 
    },
    {
        id : 3,
        que : "Diffrence between == and ===",
        ansA : "both are same",
        ansB : "compare value and its data type",
        ansC : "compare only value",
        ansD : "compare only data type",
        correctAns : "ansB" 
    },
    {
        id : 4,
        que : "How Many data type in JavaScript",
        ansA : "7",
        ansB : "6",
        ansC : "10",
        ansD : "11",
        correctAns : "ansD" 
    },
    {
        id : 5,
        que : "How to upload a File in HTML",
        ansA : "unsing input type text",
        ansB : "unsing input type radio",
        ansC : "unsing input type password",
        ansD : "unsing input type file",
        correctAns : "ansD" 
    },
    {
        id : 6,
        que : "Which is a Form tag",
        ansA : "h1",
        ansB : "input",
        ansC : "p",
        ansD : "table",
        correctAns : "ansB" 
    },
    {
        id : 7,
        que : "JavaScript is a ?",
        ansA : "Language",
        ansB : "Fremeword",
        ansC : "Library",
        ansD : "All of this",
        correctAns : "ansA" 
    },
    {
        id : 8,
        que : "What is ReactJS ?",
        ansA : "Library",
        ansB : "Fremeword",
        ansC : "Language",
        ansD : "All of this",
        correctAns : "ansA" 
    },
    {
        id : 9,
        que : "To create a New React Project by ... ?",
        ansA : "npx create-app",
        ansB : "npx create-react-app <your project name>",
        ansC : "npm create-react-app <your proejct name>",
        ansD : "npx create-react <your project name>",
        correctAns : "ansB" 
    },
    {
        id : 10,
        que : "MVC Stand For ?",
        ansA : "Module View Controller",
        ansB : "Model View Control",
        ansC : "Model View Connect",
        ansD : "Model View Controller",
        correctAns : "ansD" 
    },
    {
        id : 11,
        que : "which module/package use in react for Routing",
        ansA : "react-router-dom",
        ansB : "react-router-document",
        ansC : "react-router",
        ansD : "router-dom",
        correctAns : "ansA" 
    },
    {
        id : 12,
        que : "use for useRef hook in react ?",
        ansA : "to directly access of Dom node",
        ansB : "to update a state",
        ansC : "to create a component",
        ansD : "to passding data into component",
        correctAns : "ansA" 
    },
    {
        id : 13,
        que : "which is a React Hook ?",
        ansA : "useEffect",
        ansB : "useState",
        ansC : "useContact",
        ansD : "All of this",
        correctAns : "ansD" 
    },
    {
        id : 14,
        que : "How many type you can define CSS property",
        ansA : "Expternal, Internal, Inline",
        ansB : "Expternal, Inline",
        ansC : "Internal, Inline",
        ansD : "Expternal",
        correctAns : "ansA" 
    },
    {
        id : 15,
        que : "NPM Stand For ?",
        ansA : "Node Package Module",
        ansB : "Node Package Manager",
        ansC : "Node Plugin Manager",
        ansD : "Node Package Model",
        correctAns : "ansB" 
    },
    {
        id : 16,
        que : "diffrence between .map and .forEach",
        ansA : ".forEach return a Array but .map not return anything",
        ansB : "both are return a Array",
        ansC : ".map return a Array but .forEach not return anything",
        ansD : "both are not return anything",
        correctAns : "ansC" 
    },
    {
        id : 17,
        que : "what is the use of .push method",
        ansA : "to add a element at the begining of an Array",
        ansB : "to remove a element in an Array",
        ansC : "mearge 2 Array",
        ansD : "to add a element at the end of an Array",
        correctAns : "ansD" 
    },
    {
        id : 18,
        que : "Which module/package used for react form validation",
        ansA : "yup",
        ansB : "formik",
        ansC : "axios",
        ansD : "jwt",
        correctAns : "ansA" 
    },
    {
        id : 19,
        que : "How to mearge 2 Array into 1 Array ?",
        ansA : ".push",
        ansB : ".concate",
        ansC : ".mearge",
        ansD : ".shift",
        correctAns : "ansB" 
    },
    {
        id : 20,
        que : "method for reverse an Array ?",
        ansA : ".push",
        ansB : ".concate",
        ansC : ".reverse",
        ansD : ".shift",
        correctAns : "ansC" 
    }
]

let QueSlice = createSlice({
    name : "que",
    initialState : data,
    reducers : {

    }
})

export default QueSlice.reducer;