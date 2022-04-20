import { Nav} from "react-bootstrap";
import '../App.css'

function TopNav(props) {
    return (
            <Nav justify activeKey={props.page}>
                    <Nav.Link eventKey={1} activeClassName='active' href='/#/' className='NavLink'>Home</Nav.Link>
                    <Nav.Link eventKey={2} href='/#/Work'className='NavLink'>Work</Nav.Link>
                    <Nav.Link eventKey={3} href='/#/Contact'className='NavLink'>Contact</Nav.Link>
            </Nav>
    )
}

export default TopNav;