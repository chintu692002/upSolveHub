import "bootstrap/dist/css/bootstrap.min.css"
import _header from "./components/_header";
import "./App.css";
import _footer from "./components/_footer";
import _sidebar from "./components/_sidebar";
import _createpost from "./components/_createpost";
import _post from "./components/_post";
import _postlist from "./components/_postlist"
import { useState } from "react";
import PLprovider from "./store/store";
function App()
{
  const [selectedtab, setselectedtab]=useState("HOME");
  function func(selectedtab)
  {
    console.log(selectedtab);
   setselectedtab(selectedtab);
  }
  return (
  <PLprovider>
  <div className="app-container">
  <_sidebar selectedtab={selectedtab} func={func}></_sidebar>
  <div className="content">
<_header></_header>
<div className="hero">
  {selectedtab==="CREATEPOST"?(<_createpost></_createpost>):(<_postlist></_postlist>)}
</div>
<_footer></_footer>
</div>
  </div>
  </PLprovider>
  );
}
export default App;