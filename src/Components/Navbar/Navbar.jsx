import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button className="Home">
          <Link to={`/`}>Home</Link>
        </button>
        <button className="Mystery">
          <Link to={`/Mystery`}>Mystery</Link>
        </button>
        <button className="Technology">
          <Link to={`Technology`}>Technology</Link>
        </button>
        <button className="Mythology">
          <Link to={`/Mythology`}>Mythology</Link>
        </button>
        <button className="history">
          <Link to={`/history`}>history</Link>
        </button>
      </div>
    </>
  );
};
// export default Navbar;
