import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other16 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十六、 <span style={{ textDecoration: 'underline' }}>其他</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            金 融 資 產 之 移 轉 及 負 債 消 滅 之 相 關 資 訊
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            無此情形。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            重 要 組 織 之 調 整 及 管 理 制 度 之 重 大 變 革
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行為提升外匯營運管理之綜效，於民國108年4月2日成立外
                            匯營運處。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 三 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            因 政 府 法 令 變 更 而 產 生 之 重 大 影 響
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            無此情形。
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Other16;
