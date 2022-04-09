import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Container, Row, Col, Card} from 'react-bootstrap'

import MBScene from './MBScene'

function Home() {
    return(
        <Container fluid className='outerContainer' style={{justifyContent:'center', flexDirection:'row'}}>
            <Row style={{justifyContent:'center'}}>
                <Col style={{maxWidth:'600px'}}>
                    <MBScene/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className='textBox'>
                        <Card.Body className='text1'>Welcome to Mother Base, </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;