import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Container, Row, Col, Card} from 'react-bootstrap'

import MBScene from './MBScene'

function Home() {
    return(
        <Container fluid className='outerContainer'>
            <Row style={{justifyContent:'center'}}>
                <Col style={{maxWidth:'600px'}}>
                    <MBScene/>
                </Col>
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Col style={{maxWidth:'fit-content'}}>
                    <Card className='textBox'>
                        <Card.Body className='text1'>WELCOME TO MOTHER BASE</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;