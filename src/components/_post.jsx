import { useContext,useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { PL } from "../store/store";
const _post = ({post})=>{
  const {deletePost}=useContext(PL);
  const [pos, setPos] = useState(0);
  const [neg, setNeg] = useState(0);
return (<div class="card" style={{width: "50rem"}}>
<div class="card-body">
  <h5 class="card-title">Contest : {post.contest}
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> {deletePost(post.id)
  console.log(post.id);}}>
    <AiOutlineDelete></AiOutlineDelete>
  </span>
  </h5>
  <h6 class="card-problem-link">Problem Link: <a href={post.title} target="_blank" rel="noopener noreferrer" className="card-problem-link">{post.title}</a>
</h6>
  <p class="card-text"><h6>Solution:</h6>{post.body}</p>
  <div className="tags-area">
  {post.tag.map((it)=>
  <span class="badge text-bg-primary">{it}</span>
  )
}
</div>
<div className="alert alert-primary reaction" role="alert">
      <button type="button" className="btn btn-success" onClick={() => setPos(pos + 1)}>
        Upvote: {pos}
      </button>
      <button type="button" className="btn btn-danger" onClick={() => setNeg(neg + 1)}>
        Downvote: {neg}
      </button>
    </div>
</div>
</div>)
};
export default _post;