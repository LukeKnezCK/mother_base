import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Container, Row, Col, Card} from 'react-bootstrap'

import MBScene from './MBScene'

function Home() {
    return(
        <Container fluid className='outerContainer' style={{justifyContent:'center'}}>
            <Row className="canvasRow" style={{justifyContent:'center'}}>
                <Col style={{backgroundColor:"gray", maxWidth:'600px'}}>
                    <MBScene/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{textAlign:'center'}}>
                        <Card.Body>Welcome to Mother Base</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;