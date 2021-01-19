import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other7 = (props) => {

    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>七、 <span style={{ textDecoration: 'underline' }}>金 融 工 具 之 公 允 價 值 及 等 級 資 訊</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            概 述
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true}>
                            公 允 價 值 於 衡 量 日 ， 市 場 參 與 者 間 在 有 秩 序 之 交 易 中 出 售 資 產 所 能 收 取 或
                            移 轉 負 債 所 需 支 付 之 價 格。金 融 工 具 於原 始 認 列 時，係 以 公 允 價 值 入 帳，在
                            許 多 情 況 下，通 常 指 交 易 價 格；後 續 衡 量 時，除 部 分 金 融 工 具 係 以 攤 銷 後 成
                            本 衡 量 外 ， 均 以 公 允 價 值 衡 量 。 公 允 價 值 之 最 佳 證 據 係 活 絡 市 場 之 公 開 報
                            價， 假 若 金 融 工 具 之 市 場 非 活 絡 ，本 行 採 用 評價 技 術 或 參 考 Bloomberg 或 交
                            易 對 手 報 價 衡 量 金 融 工 具 之 公 允 價 值 ， 另 在 評 價 過 程 中 尚 考 量 評 估 交 易 對
                            手 與 本 行 之  信 用 風 險 資 訊 。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            金 融 工 具 之 公 允 價 值 資 訊
                        </p>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={{span: 11, offset: 0.5}} >
                                <p contentEditable={true} suppressContentEditableWarning={true}>
                                    除下表所列示者外，本行及子行部分金融工具 (如現金及約當現金、存放央行
                                    及拆借銀行同業、附賣回票券及債券投資、應收款項、貼現及放款、按攤銷後
                                    成本衡量之金融資產 -央行定期存單及短期票券、央行及銀行同業存款、央行
                                    及同業融資、附買回票劵及債券負債、應付款項、存款及匯款、應付金融債券
                                    及 其 他 金 融 負 債 )的帳面金額係公允價值之合理近似值(請詳附註七(五)說
                                    明)，另以公允價值衡量之金融工具之公允價值資訊請詳附註七 (六)說明。
                                </p>
                                <table style={{ width: '100%' }} contentEditable={true} suppressContentEditableWarning={true}>
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'left' }}>項目</th>
                                            <th>帳面價值</th>
                                            <th>公允價值</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ textAlign: 'left' }}>民國108年12月31日<br />按攤銷後成本衡量之金融資產-債券投資</td>
                                            <td>$ 30,616,578 </td>
                                            <td>$ 30,782,766</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: 'left' }}>民國107年12月31日<br />按攤銷後成本衡量之金融資產-債券投資</td>
                                            <td>20,647,674</td>
                                            <td>20,624,888</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p contentEditable={true} suppressContentEditableWarning={true}>
                                    上述按攤銷後成本衡量之金融資產 - 債券投資之公允價值等級屬第一等級及第二等級。
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    )


}


export default Other7;
