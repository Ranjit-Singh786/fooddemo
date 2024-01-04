import { Link } from "react-router-dom";
const Title = "Apna Villa"
import { useContext } from "react";
import userContext from "./utils/userContext";
const Header = function(){
  const {user} = useContext(userContext);

    return <>
      <div className="container">
          <div className="logo">
         {Title}
          </div>
          <div className="list">
            <ul className="ul-list">
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/about'}><li>About</li></Link>
              <Link to={'/contact'}><li>Contact</li></Link>
              <Link to={'/instamart'}><li>Instamart</li></Link>
              <Link to={'/cart'}><li>Cart</li></Link>
               <li>{user.name}</li>
            </ul>

          </div>

      </div>
    </>
}

export default Header;