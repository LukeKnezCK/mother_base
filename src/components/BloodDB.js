
import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineSmile} from 'react-icons/ai'
import BloodDB1 from '../assets/EER.png'
import BloodDB2 from '../assets/ERD.png'

import {BsGear, BsFileCode} from 'react-icons/bs'

import TopNav from './TopNav'

function BloodDB() {
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
                            <img src={BloodDB1} alt='uLearn thumbnail'/>
                        </Card>
                    </Col>
                </Row> 
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='textBox'>
                            <Card.Body className='workTitle'>Blood Donation Database: SQL Database</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText'>
                                Desc: This project was made to serve as a database system facilitating the donation of blood at a hypothetical blood collection agency.
                                Special attention to documentation was put into this project in order to simulate real world standards and practices.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText' style={{textAlign:'center'}}>
                                <p><BsGear/> Tech Used: React, TypeScript, Three.JS, SQLite3</p>
                                <p><BsFileCode/> Source Code: <a href='mailto: LukeKnez1386@protonmail.com' target="_blank" rel='noreferrer' className='workLink'>Click here to email me and request the source code!</a></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <img src={BloodDB2} alt='uLearn thumbnail'/>
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

export default BloodDB;