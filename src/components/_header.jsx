import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
function _header()
{
  const {user, loginWithRedirect,logout,isAuthenticated } = useAuth0();

     return (
     <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <h2>Together, We Solve, We Grow...</h2>
        <div class="text-end">
          {!isAuthenticated?<button type="button" class="btn btn-outline-light me-2 login" onClick={() => loginWithRedirect()} >Login</button>:<div className="userdata">
          <span>
           <img src={user.picture} alt={user.name} class="image"/></span>
        <span className="username"><h6>{user.name}</h6></span>
        <span><button type="button" class="btn btn-outline-light me-2 logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>Logout</button>
        </span>
          </div>
          }
        </div>
      </div>
    </div>
  </header>
  );
};
export default _header;