import { useContext, useRef } from "react";
import { PL } from "../store/store";
const _createpost= () =>{
  const contestelement=useRef();
  const titleelement=useRef();
  const bodyelement=useRef();
  const tagelement=useRef();
  const {addPost}=useContext(PL);
  const handlesubmit=(event)=>{
    event.preventDefault();
    const contest=contestelement.current.value;
   const title=titleelement.current.value;
   const body=bodyelement.current.value;
   const tag=tagelement.current.value.split(' ');
    addPost(contest,title,body,tag);
    contestelement.current.value="";
    bodyelement.current.value="";
    tagelement.current.value="";
    titleelement.current.value="";
  };
return (<form className="createpost" onSubmit={handlesubmit}>
<div class="mb-3 ">
  <label  class="form-label">Contest</label>
  <input type="text"
  ref={contestelement} class="form-control"  />
</div>
<div class="mb-3 ">
  <label for="text" class="form-label">Problem-Link</label>
  <input type="url" 
  ref={titleelement}
  class="form-control" />
</div>
<div className="mb-3">
  <label htmlFor="text" className="form-label">Solution</label>
  <pre>
  <textarea
    id="text"
    rows="5"
    ref={bodyelement}
    className="form-control"
    style={{ whiteSpace: 'pre-wrap' }}
    wrap="soft"
  ></textarea>
  </pre>
</div>

<div class="mb-3 ">
  <label for="text" class="form-label" >Tags</label>
  <input type="Text" placeholder="Wanna include some tags" 
  ref={tagelement}class="form-control" />
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>)
}
export default _createpost;