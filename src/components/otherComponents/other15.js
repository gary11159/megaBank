import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other15 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十五、 <span style={{ textDecoration: 'underline' }}>重 大 期 後 事 項</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行於民國108年10月18日經董事會決議申請無擔保主順位金融債
                            券循環發行額度新臺幣十億元整，經主管機關於民國108年12月4日核准，
                            且已於民國109年3月11日募集與發行109年度第一期無擔保一般順位金融
                            債，發行總額為新臺幣十億元整。
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default Other15;
