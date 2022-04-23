import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineSmile} from 'react-icons/ai'
import uLearn1 from '../assets/uLearn.PNG'
import uLearn2 from '../assets/uLearn2.png'
import uLearn3 from '../assets/uLearn3.png'

import {BsGear, BsFileCode} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'

import TopNav from './TopNav'

function ULearn() {
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
                            <img src={uLearn1} alt='uLearn thumbnail'/>
                        </Card>
                    </Col>
                </Row> 
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='textBox'>
                            <Card.Body className='workTitle'>uLearn: SFSU Site Redesign</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText'>
                                Desc: uLearn is a learning management system with a strong focus on easy usability and powerful tools. 
                                Meant to serve as a redesign of the SFSU iLearn site, uLearn makes aims to cater specifically to 
                                student and instructor needs in ways iLearn does not. 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText' style={{textAlign:'center'}}>
                                <p><BsGear/> Tech Used: React, JavaScript, Figma, Github Pages</p>
                                <p><BiLinkExternal/> Live Site: <a href='https://team2-csc642.github.io/ulearn/' target="_blank" rel='noreferrer'className='workLink'>https://team2-csc642.github.io/ulearn/</a></p>
                                <p><BsFileCode/> Source Code: <a href='mailto: LukeKnez1386@protonmail.com' target="_blank" rel='noreferrer' className='workLink'>Click here to email me and request the source code!</a></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={uLearn2} alt='uLearn thumbnail'/>
                        </Card>
                    </Col>
                </Row> 
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={uLearn3} alt='uLearn thumbnail'/>
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

export default ULearn;