import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Support from '../assets/Support.png'

import MBScene from './MBScene'

function Home() {
    return (
        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: '600px' }}>
                        <MBScene />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='textBox'>
                            <Card.Body className='welcomeSign'>WELCOME TO MOTHER BASE</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ maxWidth: 'fit-content'}}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Support} alt='Support Icon' /> About</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <Card className='textBox'>
                            <Card.Body className='longText'> Here at Mother Base we are commited to the research and
                                development of technologies that are useful for both
                                arbirtrary niche personal projects as well as increasing the
                                chances of obtaining gainful employment in order to avoid
                                the possibility of becoming completely impoverished
                                and destitute, living in refuse and squalor.</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home;