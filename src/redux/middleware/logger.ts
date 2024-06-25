
const logger = (state:any)=>(next:any)=>(action:any)=>{
    console.log("Current State",state.getState());
    console.log("Action", action);
    next(action);
    console.log("Next State",state.getState());
}

export default logger;