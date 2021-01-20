import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Table = () => {
    return (
        <>
            <Row style={{ marginLeft: '50px' }}>
                <Col md={5} className="contentunderline">
                    <span contentEditable={true} suppressContentEditableWarning={true}>關　　係　　人　　名　　稱</span>
                </Col>
                <Col md={2} className="contentunderline" style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>關係人簡稱</span>
                </Col>
                <Col md={4} className="contentunderline" style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>與 本 行 之 關 係</span>
                </Col>
            </Row>
            <Row style={{ marginLeft: '50px' }}>
                <Col md={5}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>兆豐票券金融(股)公司</span>
                </Col>
                <Col md={2} style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>兆豐票券</span>
                </Col>
                <Col md={4} style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>與本行同受兆豐金控控制之企業</span>
                </Col>
            </Row>
            <Row style={{ marginLeft: '50px' }}>
                <Col md={5}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>兆豐證券(股)公司</span>
                </Col>
                <Col md={2} style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>兆豐證券</span>
                </Col>
                <Col md={4} style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>與本行同受兆豐金控控制之企業</span>
                </Col>
            </Row>
            <Row style={{ marginLeft: '50px' }}>
                <Col md={5}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>兆豐國際證券投資信託(股)公司</span>
                </Col>
                <Col md={2} style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>兆豐國際投信</span>
                </Col>
                <Col md={4} style={{ marginLeft: '3px' }}>
                    <span contentEditable={true} suppressContentEditableWarning={true}>與本行同受兆豐金控控制之企業</span>
                </Col>
            </Row>
        </>
    )
}

const Other11 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十一、 <span style={{ textDecoration: 'underline' }}>關 係 人 交 易</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            母 公 司 與 最 終 控 制 者
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行由兆豐金融控股股份有限公司控制，其擁有本行100%股份。
                            本行及子行之最終控股公司即為兆豐金融控股股份有限公司。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            關 係 人 之 名 稱 及 關 係
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行主要營運決策者主要係著重於全行營運結果，全行營運結果與
                            本合併財務報告之合併綜合損益表一致，請參閱合併綜合損益表。
                        </p>
                    </Col>
                </Row>
                <Table />
            </Container>
        </>
    )


}


export default Other11;
