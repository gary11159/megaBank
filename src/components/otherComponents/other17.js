import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Table = () => {
    return (
        <>
            <table style={{ width: '100%' }} contentEditable={true} suppressContentEditableWarning={true}>
                <thead>
                    <tr>
                        <th rowSpan={2}>買、賣之公司</th>
                        <th rowSpan={2}>有價證券種類及名稱</th>
                        <th rowSpan={2}>帳列科目</th>
                        <th rowSpan={2}>交易對象</th>
                        <th rowSpan={2}>關係</th>
                        <th colSpan={2}>期初</th>
                        <th colSpan={2}>買進</th>
                        <th colSpan={3}>賣出</th>
                        <th colSpan={2}>期末</th>
                    </tr>
                    <tr>
                        <th>股數(仟股)</th>
                        <th>金額</th>
                        <th>股數(仟股)</th>
                        <th>金額</th>
                        <th>股數(仟股)</th>
                        <th>金額</th>
                        <th>處分損益</th>
                        <th>股數(仟股)</th>
                        <th>金額</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>本公司</td>
                        <td>台灣50</td>
                        <td>透過損益按公允價值衡量之金融資產-淨額</td>
                        <td>-</td>
                        <td>-</td>
                        <td>5,450</td>
                        <td>415,252</td>
                        <td>5,450</td>
                        <td>404,045</td>
                        <td>5,450</td>
                        <td>404,045</td>
                        <td>5,450</td>
                        <td>404,045</td>
                        <td>-</td>
                    </tr>
                    {['T50反1', '台泥', '亞泥', '台塑', '台化', '遠東新', '中鋼', '台達電', '台積電'].map(company => {
                        return (
                            <tr key={company}>
                                <td>〃</td>
                                <td>{company}</td>
                                <td>透過損益按公允價值衡量之金融資產-淨額</td>
                                <td>-</td>
                                <td>-</td>
                                <td>5,450</td>
                                <td>415,252</td>
                                <td>5,450</td>
                                <td>404,045</td>
                                <td>5,450</td>
                                <td>404,045</td>
                                <td>5,450</td>
                                <td>404,045</td>
                                <td>-</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

const Other17 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十七、 <span style={{ textDecoration: 'underline' }}>附 註 揭 露 事 項</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            本 行 及 各 子 行 重 大 交 易 事 項 相 關 資 訊
                        </p>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={0.5} >
                                1.
                            </Col>
                            <Col xs={11} >
                                <p contentEditable={true} suppressContentEditableWarning={true}>
                                    本期累積買進或賣出同一轉投資事業股票之金額達新臺幣三億元或實收資本額百分之十以上
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Table />
            </Container>
        </>
    )
}

export default Other17;
