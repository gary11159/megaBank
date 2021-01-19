import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Other5 = (props) => {

    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>四、 <span style={{ textDecoration: 'underline' }}>重 大 會 計 政 策 之 彙 總 說 明</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p contentEditable={true} suppressContentEditableWarning={true}>
                            本 合 併 財 務 報 告 已 於 民 國 109 年 3 月 1 3 日 經 董 事 會 通 過 發 佈。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            遵 循 聲 明
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true}>
                            本 合 併 財 務 報 告 係 依 據「 公 開 發 行 銀 行 財 務 報 告 編 製 準 則」與 金 管 會 認 可 之
                            國 際 財 務 報 導 準 則、國 際 會 計 準 則、解 釋 及 解 釋 公告 (以 下 簡 稱 IFRSs)編 製。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            編 製 基 礎
                        </p>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={0.5} >
                                1.
                            </Col>
                            <Col xs={11} >
                                <p contentEditable={true} suppressContentEditableWarning={true}>
                                    本 合 併 財 務 報 告 除 按 公 允 價 值 衡 量 之 透 過 損 益 按 公 允 價 值 衡 量 之 金 融 資
                                    產 及 負 債 (包 括 衍 生 工 具 )、 按 公 允 價 值 衡 量 之 透 過 其 他 綜 合 損 益 按 公 允
                                    價 值 衡 量 之 金 融 資 產 及 負 債 及 按 退 休 基 金 資 產 減 除 確 定 福 利 義 務 現 值 之
                                    淨 額 認 列 之 確 定 福 利 負 債 外 ， 其 餘 係 按 照 歷 史 成 本 編 製。
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={0.5} >
                                2.
                            </Col>
                            <Col xs={11} >
                                <p contentEditable={true} suppressContentEditableWarning={true}>
                                    本 行 及 子 行 對 於 費 用 之 分 析 係 依 費 用 之 性 質 分 類 。
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={0.5} >
                                3.
                            </Col>
                            <Col xs={11} >
                                <p contentEditable={true} suppressContentEditableWarning={true}>
                                    在 按 照 經 金 管 會 認 可 之 國 際 財 務 報 導 準 則 編 製 財 務 報 表 時 ， 管 理 階 層 必
                                    須 依 其 專 業 之 判 斷 做 出 若 干 重 大 之 會 計 估 計 ， 並 決 定 會 計 政 策 。 假 設 之
                                    改 變 可 能 會 導 致 財 務 報 告 產 生 重 大 之 影 響 。 本 行 及 子 行 之 管 理 階 層 相 信
                                    本 合 併 財 務 報 告 所 使 用 之 假 設 係 為 適 當 。 涉 及 高 度 判 斷 或 高 度 複 雜 之 事
                                    項 ， 或 對 本 合 併 財 務 報 告 影 響 重 大 之 判 斷 、 估 計 及 假 設 不 確 定 性 來 源 ，
                                    請 參 閱 附 註 五 之 說 明 。
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    )


}


export default Other5;
