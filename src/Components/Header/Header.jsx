import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HeaderStyle } from "./style.jsx";

export default function Header () {
    return (
        <HeaderStyle > 
          <nav>
            <img src={logo} alt="logomarca" />
            {/*<img src="../../assets/images/logo 2.png" alt="logomarca" />*/}
            
                <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/novidades">Novidades</Link>
          </li>

          <li>
            <Link to="/sobre">Sobre</Link>
          </li>

                </ul>
            </nav>

        </HeaderStyle >
    );
};