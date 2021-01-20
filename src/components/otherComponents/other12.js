import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other12 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十二、 <span style={{ textDecoration: 'underline' }}>抵 ( 質 )押 之 資 產</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            民國108年及107年12月31日本行及子行資產提供擔保明細，請參閱附註
                            六(三)、(四)、(五)、（八）及(十三)說明。
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default Other12;
