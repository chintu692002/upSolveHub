import { createContext,  useReducer } from "react";

export const PL=createContext({
    pl: [],
    addPost: ()=>{},
    deletePost: ()=>{},
});
const storedpl = JSON.parse(localStorage.getItem("LIST")) || [];
{console.log(storedpl);}

    function plreducer(curpl, action) {
        let newpl = curpl;
        if (action.type === "DELETE_POST") {
            console.log(action.payload.id);
            newpl = curpl.filter((post) => post.id !== action.payload.postId);
        }
        else if (action.type === "ADD_POST") {
            newpl = [action.payload, ...curpl];
        }
        {localStorage.setItem("LIST", JSON.stringify(newpl));}
        return newpl;
    }
const PLprovider=({children})=>
{
const [pl,dispatchpl]=useReducer(plreducer,storedpl);
const addPost=(contest,title,body,tag)=>{ 
   dispatchpl({
    type: "ADD_POST",
    payload: {
        id: Date.now(),
        contest: contest,
        title: title,
        body: body,
        reaction: 3,
        tag: tag,
    }
   })
};
const deletePost=(postId)=>{
    dispatchpl(
        {
            type: "DELETE_POST",
            payload: {
                postId,
            },
        }
    );
};
return (
    <PL.Provider value={{pl,addPost,deletePost}}>
        {children}
    </PL.Provider>
);
};
export default PLprovider;
const Default_pl=[
];