import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Container, Row, Col, Card, Image} from 'react-bootstrap'
import Support from '../assets/Support.png'
import Basedev from '../assets/BaseDev.png'
import Hat from '../assets/hat.png'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineSmile} from 'react-icons/ai'

import MBScene from './MBScene'
import TopNav from './TopNav'

function Home() {
    return (
        <Container fluid className='outerContainer'>
            <Container fluid style={{ maxWidth: '768px' }}>
                <Row style={{ alignItems: 'center', position: 'sticky', top: '0', zIndex: '999' }}>
                    <Col style={{ justifyContent: 'center' }}>
                        <TopNav page='1' />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '5vh' }}>
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
                <Row style={{ justifyContent: 'center'}}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='nameBox'>
                            <Card.Body className='nameCard'>
                                <Card.Text className='nameTitle'>Luke CK <Image style={{height:'4vh'}} src={Hat}/></Card.Text>
                                <Card.Text className='nameSub'>Digital Artist: (Developer, Animator, Musician)</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Support} alt='Support Icon' /> About</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText'> Here at Mother Base we are commited to the research and
                                development of technologies that are useful for both
                                arbirtrary niche personal projects as well as increasing the
                                chances of obtaining gainful employment in order to avoid
                                the possibility of becoming completely impoverished
                                and destitute, living in refuse and squalor in the gutters of the city.</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='labelRow'>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <Card.Body className='labelCard'><img className='icon' src={Basedev} alt='Support Icon' /> Tech</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='longBox'>
                            <Card.Body className='longText'>
                                <p>Some of the tools and tech I use include:</p>
                                <p>  ??? Python, Javascript/Typescript, C/C++, SQL, HTML, CSS</p>
                                <p>  ??? AWS, Github/Gitlab, Linux based Systems</p>
                                <p>  ??? Photoshop CS6, Flash CS3, Waveform 11</p>
                                <p>As well as many more!</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '3vh' }}>
                    <Col style={{ maxWidth: 'fit-content' }}>
                        <Card className='labelBox'>
                            <a href='/mother_base/#/Work' className='labelLink'>
                                <Card.Body className='labelCard'>
                                    Projects ???
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

export default Home;