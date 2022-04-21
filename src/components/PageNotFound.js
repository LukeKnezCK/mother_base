import '../App.css'
import { Container, Row, Col, Card} from 'react-bootstrap'
import TopNav from './TopNav'
import frowny from '../assets/frowny.png'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineSmile} from 'react-icons/ai'

function PageNotFound(){
    return(
        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ alignItems: 'center', position: 'sticky', top: '0', zIndex: '999' }}>
                    <Col style={{ justifyContent: 'center' }}>
                        <TopNav page='1' />
                    </Col>
                </Row>
                <Row style={{justifyContent:'center', marginTop:'10%'}}>
                    <Col style={{textAlign:'center', maxWidth:'fit-content'}}>
                        <img src={frowny} alt='frowny sprite' style={{padding:'10px'}}/>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='textBox'>
                            <Card.Body className='welcomeSign'>404 ERROR PAGE NOT FOUND</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center'}}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='nameBox'>
                            <Card.Body className='nameCard'>
                                <Card.Text >The page you're looking for couldn't be found!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '3vh' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <a href='/mother_base/#/' className='labelLink'>
                                <Card.Body className='labelCard'>
                                    Back Home ►
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <div className='footer'>
                            <p>Created By LCK 2022 <AiOutlineSmile/> <a href='https://github.com/LukeKnezCK/mother_base' target="_blank" rel='noreferrer' className='footerSource'>Source Code <FaGithub/></a> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default PageNotFound