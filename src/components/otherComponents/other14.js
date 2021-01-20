import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other14 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十四、 <span style={{ textDecoration: 'underline' }}>重 大 災 害 損 失</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            無此情形。
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default Other14;
