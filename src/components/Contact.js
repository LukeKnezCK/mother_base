import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

import MBScene from './MBScene'
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
                        <MBScene />
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