// never - used for values that never occur

function reject (message: string): never{
    throw new Error(message)
};

function proccessEvents () : never{
    while (true){
        // do smth forever
    }
}

// proccessEvents();
reject("...");
console.log("Hello World");
