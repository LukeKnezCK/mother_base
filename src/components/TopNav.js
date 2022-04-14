import { Nav} from "react-bootstrap";
import '../App.css'
import Command from '../assets/command.png'
import Intel from '../assets/Intel.png'
import Wrench from '../assets/wrench.png'

function TopNav(props) {
    return (
            <Nav justify activeKey={props.Page}>
                    <Nav.Link eventKey={1} activeClassName='active' href='/#/' className='NavLink'>Home</Nav.Link>
                    <Nav.Link eventKey={2} href='/#/Work'className='NavLink'>Work</Nav.Link>
                    <Nav.Link eventKey={3} href='/#/Contact'className='NavLink'>Contact</Nav.Link>
            </Nav>
    )
}

export default TopNav;