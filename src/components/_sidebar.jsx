const _sidebar = ({selectedtab, func}) => 
{

return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width:" 230px"}}>
<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
  <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
  <span className="fs-4">UpSolveHub</span>
</a>
<hr/>
<ul className="nav nav-pills flex-column mb-auto">
  <li className="nav-item" onClick={()=>func("HOME")}>
    <a href="#" className={`nav-link ${selectedtab==="HOME"&& "active"}`} aria-current="page" >
      <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
      Home
    </a>
  </li>
  <li onClick={()=>func("CREATEPOST")}>
    <a href="#" className={`nav-link ${selectedtab==="CREATEPOST"&& "active"}`}>
      <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
      Post your solution
    </a>
  </li>
  </ul>
</div>
}
export default _sidebar;