import { fromJS } from "immutable"
import { getlists } from "./actionname"
const data=fromJS({
    article:[]
});
export default (state=data,action)=>{
    if(action.type===getlists){
        return state.set('article',action.data) 
    }
    return state;       
}