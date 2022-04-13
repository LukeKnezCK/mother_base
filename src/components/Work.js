import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Basedev from '../assets/BaseDev.png'

import MBScene from './MBScene'
import TopNav from './TopNav'

function Work() {
    return (

        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ alignItems: 'center', position: 'sticky', top: '0', zIndex: '999' }}>
                    <Col style={{ justifyContent: 'center' }}>
                        <TopNav Page='2' />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '5vh' }}>
                    <Col style={{ maxWidth: '600px' }}>
                        <MBScene />
                    </Col>
                </Row> 
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Basedev} alt='Support Icon' /> Projects</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center', margin:'15px'}}>
                    <Col style={{maxWidth: 'fit-content'}}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'>
                                Project Desc
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{maxWidth: 'fit-content'}}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'>
                                Project Desc
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center', margin:'15px'}}>
                    <Col style={{maxWidth: 'fit-content'}}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'>
                                Project Desc
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{maxWidth: 'fit-content'}}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'>
                                Project Desc
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center'}}>
                    <Col style={{maxWidth:'fit-content'}}>
                        <div className='footer'>
                            <p>Created By LCK 2022 ♫</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Work;