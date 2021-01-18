import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other2 = (props) => {

    return (
        <>
            <Container style={{marginBottom: '20px'}}>
                <Row>
                    <Col xs={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>二、 <span style={{ textDecoration: 'underline' }}>通 過 財 務 報 告 之 日 期 及 程 序</span></span>
                    </Col>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p contenteditable="true">
                            本 合 併 財 務 報 告 已 於 民 國 109 年 3 月 1 3 日 經 董 事 會 通 過 發 佈。
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default Other2;
