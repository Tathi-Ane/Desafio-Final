import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HeaderStyled } from "./styled";

export default function Header () {
    return (
        <HeaderStyled >
            <img src={logo} alt="logomarca" />
            {/*<img src="../../assets/images/logo 2.png" alt="logomarca" />*/}
            <nav>
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
        </HeaderStyled >
    )
}