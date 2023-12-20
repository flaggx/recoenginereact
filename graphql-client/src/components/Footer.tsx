import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;