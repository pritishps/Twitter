import {createStore} from 'redux';

const initialState = {
    // theme:"",
    theme:"dark",

}

const reducers  = (state = initialState,action)=>{
    switch(action?.type){
        case "SWITCH_THEME":
            if (state?.theme==="") return {...state,theme:"dark"};
            return {...state,theme:""};
        
        
        default : return state
    }
}

export const store = createStore(reducers)