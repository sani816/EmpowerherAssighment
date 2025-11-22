console.log("Begin"); setTimeout(() =>
     { console.log("Timeout Task"); }, 0); 
Promise.resolve().then(() => 
    { console.log("Promise Task"); }); console.log("End");
// because Synchronous code runs first, then microtasks (Promise), and finally macrotasks (setTimeout), giving the order: Begin → End → Promise Task → Timeout Task.