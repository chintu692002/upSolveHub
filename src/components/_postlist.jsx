import { useContext } from "react";
import { PL } from "../store/store";
import _post from "./_post";
const _postlist = () => {
    const {pl}=useContext(PL);
    return (
        <div className="posts">
       { pl.map((postt) => (<_post key={postt.id} post={postt}></_post>))}
    
        </div>
    );
};
export default _postlist;
