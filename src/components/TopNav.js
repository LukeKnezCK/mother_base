import { Nav} from "react-bootstrap";
import '../App.css'
import Command from '../assets/command.png'
import Intel from '../assets/Intel.png'
import Wrench from '../assets/wrench.png'

function TopNav(props) {
    return (
            <Nav justify activeKey={props.Page}>
                    <Nav.Link eventKey={1} activeClassName='active' href='/#/' className='NavLink'><img className='NavIcon' src={Command} alt='Command Icon'/> Home</Nav.Link>
                    <Nav.Link eventKey={2} href='/#/Work'className='NavLink'><img className='NavIcon' src={Wrench} alt='Wrench Icon'/> Work</Nav.Link>
                    <Nav.Link eventKey={3} href='/#/Contact'className='NavLink'><img className='NavIcon' src={Intel} alt='Intel Icon'/> Contact</Nav.Link>
            </Nav>
    )
}

export default TopNav;