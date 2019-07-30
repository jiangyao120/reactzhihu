import {input_change,input_blur,scrollbot,scrolltop} from "./actionname"
import { fromJS } from "immutable"
const data =  fromJS({
    input:false,
    hidden:false
});
export default(state = data,action)=>{
    switch(action.type){
        case input_change:
        return state.set('input',true);
        case  input_blur:
        return state.set('input',false);
        case scrollbot:
        return state.set('hidden',true);
        case scrolltop:
        return state.set('hidden',false);
        default:
        return state;
    }
    
    
 
}