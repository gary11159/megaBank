import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TableFooter = (props) => {

    return (
        <div style={{ width: '100%' }}>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                後附合併財務報表附註為本合併財務報告之一部分，請併同參閱。
            </div>
            <Row style={{padding: '30px 0 50px 0'}}>
                <Col>董事長：張兆順</Col>
                <Col>經理人：蔡永義</Col>
                <Col>會計主管：李靜怡</Col>
            </Row>
        </div>
    )


}


export default TableFooter;
