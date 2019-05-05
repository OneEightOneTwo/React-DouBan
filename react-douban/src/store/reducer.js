const defaultState = {
    deleteListFile:false
}
export default (state = defaultState ,action)=>{
    if(action.type === 'change_deleteListFile_value'){
         const newState = JSON.parse(JSON.stringify(state));
         newState.deleteListFile = action.deleteListFile;
         return newState;
    }
   
    return state
}