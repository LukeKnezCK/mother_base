import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Wrench from '../assets/wrench.png'
import uLearn from '../assets/uLearn.PNG'
import clamHome from '../assets/clamHome.png'
import EER from '../assets/EER.png'
import RPS from '../assets/RPS.png'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineSmile } from 'react-icons/ai'

import MuniScene from './MuniScene'
import TopNav from './TopNav'

function Work() {
    return (

        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ alignItems: 'center', position: 'sticky', top: '0', zIndex: '999' }}>
                    <Col style={{ justifyContent: 'center' }}>
                        <TopNav page='2' />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '5vh' }}>
                    <Col style={{ maxWidth: '600px' }}>
                        <MuniScene />
                    </Col>
                </Row>
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Wrench} alt='Support Icon' /> Projects</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col fluid style={{ minWidth: '259px' }}>
                        <a href='/mother_base/#/Work/uLearn' className='workLink'>
                            <Card className='labelBox'>
                                <img src={uLearn} alt='uLearn thumbnail' />
                                <Card.Body className='projectDesc'>
                                    <h4>uLearn:</h4>
                                    <p>Redesign of SFSU Class Site</p>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col fluid style={{ minWidth: '259px' }}>
                        <a href='/mother_base/#/Work/ClamJam' className='workLink'>
                            <Card className='labelBox'>
                                <img src={clamHome} alt='DoReMeet thumbnail' />
                                <Card.Body className='projectDesc'>
                                    <h4>Clam Jam:</h4>
                                    <p>Musical Visualizer Web App</p>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col fluid style={{ minWidth: '259px' }}>
                        <a href='/mother_base/#/Work/BloodDB' className='workLink'>
                            <Card className='labelBox'>
                                <img src={EER} alt='EER thumbnail' />
                                <Card.Body className='projectDesc'>
                                    <h4>Blood Donation DB:</h4>
                                    <p>SQL Database for Blood Donation</p>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col fluid style={{ minWidth: '259px' }}>
                        <a href='/mother_base/#/Work/RPS' className='workLink'>
                            <Card className='labelBox'>
                                <img src={RPS} alt='RPS thumbnail' />
                                <Card.Body className='projectDesc'>
                                    <h4>RPS Online:</h4>
                                    <p>Competitive Online Ranked RPS</p>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <div className='footer'>
                            <p>Created By LCK 2022 <AiOutlineSmile /> <a href='https://github.com/LukeKnezCK/mother_base' target="_blank" rel='noreferrer' className='footerSource'>Source Code <FaGithub /></a> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Work;