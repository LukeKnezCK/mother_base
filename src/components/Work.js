import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Wrench from '../assets/wrench.png'
import uLearn from '../assets/uLearn.PNG'
import DoReMeet from '../assets/DoReMeet.png'
import EER from '../assets/EER.png'
import RPS from '../assets/RPS.png'

import MuniScene from './MuniScene'
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
                        <MuniScene/>
                    </Col>
                </Row> 
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Wrench} alt='Support Icon' /> Projects</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center'}}>
                    <Col fluid style={{minWidth:'259px'}}>
                        <Card className='labelBox'>
                            <img src={uLearn} alt='uLearn thumbnail'/>
                            <Card.Body className='projectDesc'>
                                <h4>ULearn:</h4>
                                <p>Redesign of SFSU Class Site</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col fluid style={{minWidth:'259px'}}>
                        <Card className='labelBox'>
                            <img src={DoReMeet} alt='DoReMeet thumbnail'/>
                            <Card.Body className='projectDesc'>
                                <h4>DoReMeet:</h4>
                                <p>Artist Connections Platform</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center'}}>
                    <Col fluid style={{minWidth:'259px'}}>
                        <Card className='labelBox'>
                            <img src={EER} alt='EER thumbnail'/>
                            <Card.Body className='projectDesc'>
                                <h4>Blood Donation DB:</h4>
                                <p>SQL Database for Blood Donation</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col fluid style={{minWidth:'259px'}}>
                        <Card className='labelBox'>
                            <img src={RPS} alt='RPS thumbnail'/>
                            <Card.Body className='projectDesc'>
                                <h4>RPS Online:</h4>
                                <p>Competitive Online Ranked RPS</p>
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