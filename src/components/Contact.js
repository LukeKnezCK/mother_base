import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Intel from '../assets/Intel.png'
import Command from '../assets/command.png'
import {FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

import RoomScene from './RoomScene'
import TopNav from './TopNav'

function Contact() {
    return( 
        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ alignItems: 'center', position: 'sticky', top: '0', zIndex: '999' }}>
                    <Col style={{ justifyContent: 'center' }}>
                        <TopNav Page='3' />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '5vh' }}>
                    <Col style={{ maxWidth: '600px' }}>
                        <RoomScene />
                    </Col>
                </Row> 
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Intel} alt='Support Icon' /> Online</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='contacts'>
                                <Card.Text>
                                <a href='https://github.com/LukeKnezCK' target="_blank" rel='noreferrer'><FaGithub/> Github: LukeKnezCK</a>
                                </Card.Text>
                                <Card.Text>
                                    <a href='mailto: LukeKnez1386@protonmail.com' target="_blank" rel='noreferrer'><HiOutlineMail/> Email: LukeKnez1386@protonmail.com</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Command} alt='Support Icon' /> Offline</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='contacts'> 
                            <p>I can often be found wandering around aimlessly in foresty areas.</p>
                            <p>If you find and catch me you get a prize!</p>
                            <p>Just kidding please don't chase me, I'll scream...</p>
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

export default Contact;