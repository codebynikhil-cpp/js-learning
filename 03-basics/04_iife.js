// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
        console.log(`DB CONNECTED`);
        })();

        //Global Scope ke pollution ko hatane ke liye iifi ka use krte hai


( (name) => {
            console.log(`DB CONNECTED TO ${name}`);
            } )('NIkhil')
            