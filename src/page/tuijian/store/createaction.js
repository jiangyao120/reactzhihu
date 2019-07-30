import {} from "./actionname";
import axios from "axios";
import { fromJS } from "immutable"
import { getlists } from "./actionname"
const listaction =(data)=>({
    type:getlists,
    data:fromJS(data)
});
export const getlist =()=>{
    return (dispatch)=>{
        axios.get('/api/article.json').then((res)=>{
            const data=res.data;
            dispatch(listaction(data.data))
            // console.log(data.data)
        }).catch(()=>{
            console.log('error')
        })
    }
}