import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineSmile } from 'react-icons/ai'
import ClamJam1 from '../assets/clamHome.png'
import ClamJam2 from '../assets/clamJam1.png'
import ClamJam3 from '../assets/clamJam2.png'

import { BsGear, BsFileCode } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

import TopNav from './TopNav'

function ClamJam() {
    return (

        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ alignItems: 'center', position: 'sticky', top: '0', zIndex: '999' }}>
                    <Col style={{ justifyContent: 'center' }}>
                        <TopNav page='4' />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={ClamJam1} alt='uLearn thumbnail' />
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='textBox'>
                            <Card.Body className='workTitle'>Clam Jam: Musical Visualizer Web App</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText'>
                                Desc: Clam Jam is a musical application that allows you to play with various instruments/sound-fonts
                                and waveform visualizers in your browser. You can also compose and listen to songs using the playlist feature!
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText' style={{ textAlign: 'center' }}>
                                <p><BsGear /> Tech Used: React, TypeScript, Three.JS, SQLite3</p>
                                <p><BiLinkExternal /> Live Site: Currently Unavailable :(</p>
                                <a href='mailto: LukeKnez1386@protonmail.com' target="_blank" rel='noreferrer' className='workLink'>
                                    <p><BsFileCode /> Source Code: Click here to email me and request the source code!</p>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={ClamJam2} alt='uLearn thumbnail' />
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={ClamJam3} alt='uLearn thumbnail' />
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '3vh' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <a href='/mother_base/#/Work' className='labelLink'>
                                <Card.Body className='labelCard'>
                                    Back to Work ►
                                </Card.Body>
                            </a>
                        </Card>
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

export default ClamJam;