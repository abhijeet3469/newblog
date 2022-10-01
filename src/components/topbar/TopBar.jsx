import "./TopBar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">Home</Link></li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
            </ul>
        </div>
        <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://picsum.photos/id/237/200/300" alt=""/>
          ) : (
            <ul className="topList">
            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
            </ul>
          )
        }
            <img className="topImg" src="https://picsum.photos/id/237/200/300" alt=""/>
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
