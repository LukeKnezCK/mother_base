import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineSmile} from 'react-icons/ai'
import RPS1 from '../assets/RPS.png'
import RPS2 from '../assets/RPS2.png'
import RPS3 from '../assets/RPS3.png'


import {BsGear, BsFileCode} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'

import TopNav from './TopNav'

function RPS() {
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
                            <img src={RPS2} alt='uLearn thumbnail'/>
                        </Card>
                    </Col>
                </Row> 
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='textBox'>
                            <Card.Body className='workTitle'>RPS Online: Rock Paper Scissors Online</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText'>
                                Desc: A simple little web application that allowed users to play Rock Paper Scissors with each other. Winning/losing games
                                would affect your global ranking and was used to pair players in the matchmaking system.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText' style={{textAlign:'center'}}>
                                <p><BsGear/> Tech Used: React, Java, Spark, AWS, MongoDB</p>
                                <p><BiLinkExternal/> Live Site: Currently Unavailable :(</p>
                                <p><BsFileCode/> Source Code: <a href='mailto: LukeKnez1386@protonmail.com' target="_blank" rel='noreferrer' className='workLink'>Click here to email me and request the source code!</a></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={RPS1} alt='uLearn thumbnail'/>
                        </Card>
                    </Col>
                </Row> 
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={RPS3} alt='uLearn thumbnail'/>
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
                <Row style={{justifyContent:'center'}}>
                    <Col style={{maxWidth:'fit-content'}}>
                        <div className='footer'>
                            <p>Created By LCK 2022 <AiOutlineSmile/> <a href='https://github.com/LukeKnezCK/mother_base' target="_blank" rel='noreferrer' className='footerSource'>Source Code <FaGithub/></a> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default RPS;