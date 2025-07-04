// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
        console.log(`DB CONNECTED`);
        })();

        //Global Scope ke pollution ko hatane ke liye iifi ka use krte hai


( (name) => {
            console.log(`DB CONNECTED TO ${name}`);
            } )('NIkhil')


            //JavaScript Execution Context
//Global Excution code { } <- this
            // Global Execution Context
            // Function Execution Context
            // Eval Execution Context

            // {} <- javascript Code
                //Memory Creation Phase
                // Execution Phase


// Running a JavaScript Code Step by Step
// 1> Global Execution -> this
// 2> Memory Phase -> 
//             val1->undefined 
//             val2 -> undefined 
//             addnum -> definition
//             result1 -> undefined
//             result2 -> undefined
// 3> Execution Phase 
//             val1 = 10
//             val2 = 5
//             addNum = [new variable environment + Execution thread]

            


            