import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other9 = (props) => {

    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>九、 <span style={{ textDecoration: 'underline' }}>資 本 管 理</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            資 本 管 理 之 目 標
                        </p>
                        <Row>
                            <Col>
                                1.
                            </Col>
                            <Col xs={11} style={{ padding: 0, textAlign: 'left' }}>
                                <p contentEditable={true} suppressContentEditableWarning={true} >
                                    本行及子行之合格自有資本應足以因應法令資本需求，且達到最低法定
                                    資本適足率，此為本行及子行資本管理之基本目標。有關合格自有資本及
                                    法定資本之計提計算方式係依主管機關規定辦理。
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                2.
                            </Col>
                            <Col xs={11} style={{ padding: 0, textAlign: 'left' }}>
                                <p contentEditable={true} suppressContentEditableWarning={true} >
                                    為使本行及子行擁有充足之資本以承擔各種風險，應就本行及子行所面
                                    對之風險組合及其風險特性予以評估所需資本，藉由資本分配進行風險
                                    管理，實現資源配置最適化。
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            資 本 管 理 程 序
                        </p>
                        <Row>
                            <Col>
                                1.
                            </Col>
                            <Col xs={11} style={{ padding: 0, textAlign: 'left' }}>
                                <p contentEditable={true} suppressContentEditableWarning={true} >
                                    本行資本適足率之計算及申報依金融監督管理委員會頒定之「銀行資本
                                    適足性及資本等級管理辦法」辦理，以合併基礎計算資本適足性比率並按
                                    時申報相關資訊。
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                2.
                            </Col>
                            <Col xs={11} style={{ padding: 0, textAlign: 'left' }}>
                                <p contentEditable={true} suppressContentEditableWarning={true} >
                                    子行資本適足率之計算，其主管機關訂有相關規範者，從其規範；若無規
                                    範者，則以合格資本淨額除以法定資本需求之比率為準。
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 三 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            資 本 適 足 率
                        </p>
                        <Row>
                            <Col>
                                1.
                            </Col>
                            <Col xs={11}>
                                <Row>
                                    <Col xs={12} style={{ padding: 0, textAlign: 'left' }}>
                                        <p contentEditable={true} suppressContentEditableWarning={true} >
                                            下表係民國108年及107年12月31日依據「銀行資本適足性及資本等級
                                            管理辦法」規定計算之資本適足比率。
                                </p>
                                        <table style={{ width: '100%' }} contentEditable={true} suppressContentEditableWarning={true}>
                                            <thead>
                                                <tr>
                                                    <th className="splitLine" colSpan={3}>
                                                        <Row>
                                                            <Col xs={6}>
                                                                分析項目
                                                    </Col>
                                                            <Col xs={6} style={{ textAlign: 'right' }}>
                                                                年度
                                                    </Col>
                                                        </Row>
                                                    </th>
                                                    <th>108年12月31日</th>
                                                    <th>107年12月31日</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan={1} rowSpan={4}>自有資本</td>
                                                    <td colSpan={2}>普通股權益</td>
                                                    <td>$ 274,907,180</td>
                                                    <td>$ 269,019,665</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>其他第一類資本</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>第二類資本</td>
                                                    <td>30,180,451</td>
                                                    <td>31,163,675</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>自有資本</td>
                                                    <td>305,087,631</td>
                                                    <td>300,183,340</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={1} rowSpan={9}>加權風險性資產總額(註1)</td>
                                                    <td colSpan={1} rowSpan={3}>信用風險</td>
                                                    <td>標準法</td>
                                                    <td>2,020,197,737</td>
                                                    <td>1,996,297,669</td>
                                                </tr>
                                                <tr>
                                                    <td>內部評等法</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>資產證券化</td>
                                                    <td>97,333,175</td>
                                                    <td>95,487,850</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={1} rowSpan={3}>作業風險</td>
                                                    <td>基本指標法</td>
                                                    <td>97,333,175</td>
                                                    <td>95,487,850</td>
                                                </tr>
                                                <tr>
                                                    <td>標準法/選擇性標準法</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>進階衡量法</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={1} rowSpan={2}>市場風險</td>
                                                    <td>標準法</td>
                                                    <td>45,775,875</td>
                                                    <td>47,654,675</td>
                                                </tr>
                                                <tr>
                                                    <td>內部模型法</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>加權風險性資產總額</td>
                                                    <td>2,172,699,428</td>
                                                    <td>2,139,440,194</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}>資本適足率（註2)</td>
                                                    <td>14.04%</td>
                                                    <td>14.03%</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}>普通股權益占風險性資產之比率</td>
                                                    <td>12.65%</td>
                                                    <td>12.57%</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}>第一類資本占風險性資產之比率</td>
                                                    <td>12.65%</td>
                                                    <td>12.57%</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}>槓桿比率</td>
                                                    <td>7.61%</td>
                                                    <td>7.68%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={11} style={{ marginLeft: '3%', marginTop: '20px' }}>
                                <Row>
                                    <Col xs={1} style={{ padding: 0 }}>
                                        註 1：
                                    </Col>
                                    <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                        本表自有資本、加權風險性資產額及暴險總額應依「銀行資本適足性及資本等級管理辦法」及
                                        「銀行自有資本與風險性資產之計算方法說明及表格」之規定計算。
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={11} style={{ marginLeft: '3%', marginTop: '20px' }}>
                                <Row>
                                    <Col xs={1} style={{ padding: 0 }}>
                                        註 2：
                                    </Col>
                                    <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                        年度報表應填列本期及上期資本適足率，半年度財務報表除揭露本期及上期外，應增加揭露前
                                        一年年底之資本適足率。
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={11} style={{ marginLeft: '3%', marginTop: '20px' }}>
                                <Row>
                                    <Col xs={1} style={{ padding: 0 }}>
                                        註 3：
                                    </Col>
                                    <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                        本表應列示如下之計算公式：
                                        <Row>
                                            <Col style={{ padding: 0, marginRight: '2%' }}>
                                                (1)
                                            </Col>
                                            <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                                自有資本＝普通股權益＋其他第一類資本＋第二類資本。
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, marginRight: '2%' }}>
                                                (2)
                                            </Col>
                                            <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                                加權風險性資產總額＝信用風險加權風險性資產＋（作業風險＋市場風險）之資本計提×
                                                12.5。
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, marginRight: '2%' }}>
                                                (3)
                                            </Col>
                                            <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                                資本適足率＝自有資本／加權風險性資產總額。
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, marginRight: '2%' }}>
                                                (4)
                                            </Col>
                                            <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                                普通股權益占風險性資產之比率＝普通股權益／加權風險性資產總額。
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, marginRight: '2%' }}>
                                                (5)
                                            </Col>
                                            <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                                第一類資本占風險性資產之比率＝(普通股權益+其他第一類資本)／加權風險性資產總額。
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, marginRight: '2%' }}>
                                                (6)
                                            </Col>
                                            <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                                槓桿比率=第一類資本/暴險總額。
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={11} style={{ marginLeft: '3%', marginTop: '20px' }}>
                                <Row>
                                    <Col xs={1} style={{ padding: 0 }}>
                                        註 4：
                                    </Col>
                                    <Col xs={11} style={{ textAlign: 'left', padding: 0 }}>
                                        本表於編製第一季及第三季報告得免予揭露。
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )


}


export default Other9;
