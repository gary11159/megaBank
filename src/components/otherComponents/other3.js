import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other3 = (props) => {

    return (
        <>
            <Container style={{marginBottom: '20px'}}>
                <Row>
                    <Col xs={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>三、 <span style={{ textDecoration: 'underline' }}>新 發 佈 及 修 訂 準 則 及 解 釋 之 適 用</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contenteditable="true" style={{ textDecoration: 'underline' }}>
                            已 採 用 金 融 監 督 管 理 委 員 會 (以 下 簡 稱「 金 管 會」)認 可 之 新 發 佈、修 正 後 國
                            際 財 務 報 導 準 則 之 影 響
                        </p>
                        <p contenteditable="true">
                            下 表 彙 列 金 管 會 認 可 之 民 國 108 年 適 用 之 國 際 財 務 報 導 準 則 之 新 發 佈、 修
                            正 及 修 訂 之 準 則 及 解 釋 ：
                        </p>
                    </Col>
                    <Col md={{ span: 7, offset: 1 }} className="contentunderline">
                        <span contenteditable="true">新發佈/修正/修訂準則及解釋</span>
                    </Col>
                    <Col md={3} className="contentunderline" style={{marginLeft: '5px'}}>
                        <span contenteditable="true">國際會計準則理事會發佈之生效日</span>
                    </Col>
                    <Col md={{ span: 7, offset: 1 }} >
                        <span contenteditable="true">國際財務報導準則第9號之修正「具負補償之提前還款特性」</span>
                    </Col>
                    <Col md={3} style={{marginLeft: '5px'}}>
                        <span contenteditable="true">民國108年1月1日</span>
                    </Col>
                    <Col md={{ span: 7, offset: 1 }}>
                        <span contenteditable="true">國際財務報導準則第16號「租賃」</span>
                    </Col>
                    <Col md={3} style={{marginLeft: '5px'}}>
                        <span contenteditable="true">民國108年1月1日</span>
                    </Col>
                    <Col md={{ span: 7, offset: 1 }} >
                        <span contenteditable="true">國際會計準則第19號之修正「計畫之修正、縮減或清償」</span>
                    </Col>
                    <Col md={3} style={{marginLeft: '5px'}}>
                        <span contenteditable="true">民國108年1月1日</span>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default Other3;
