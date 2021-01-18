import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Title from '../title';
import Other2 from './other2';
import Other3 from './other3';
import Other4 from './other4';
import Other5 from './other5';

const Other = (props) => {

    return (
        <>
            <Title from={4} />
            <Container style={{marginBottom: '20px'}}>
                <Row>
                    <Col xs={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>一、 <span style={{ textDecoration: 'underline' }}>公 司 沿 革</span></span>
                    </Col>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contenteditable="true">
                            兆 豐 國 際 商 業 銀 行 股 份 有 限 公 司 (以 下 簡 稱 本 行 )前 身 為 中 國 銀 行 ， 於 民 國
                            60 年 12 月 15 日 依 據 總 統 公佈 之 「中 國 國 際 商 業 銀 行條 例 」 (已 於 民 國 94
                            年 12 月 廢 止 )及 有 關 法 令 正 式 改 組。民 國 91 年 12 月 3 1 日本 行 依 金 融 控 股
                            公 司 法 股 份 轉 換 而 為 兆 豐 金 融 控 股 股 份 有 限 公 司 百 分 之 百 持 股 之 子 公 司 ，
                            並終 止 上市 買 賣 。 為擴 大 經 營 規 模， 強 化市 場 占 有 率， 本 行 以 民 國 9 5 年 8
                            月 21 日 為 基 準 日吸 收 交 通 銀 行 股 份有 限 公 司 (以 下簡 稱 交 通 銀 行 )並 更名 為
                            兆 豐 國 際 商 業 銀 行 股 份 有 限 公 司。兆 豐 金 融 控 股 股 份 有 限 公 司 (以 下 簡 稱 兆
                            豐 金 控 )持 有 本 行 100% 股 數 ，為 本 行 之 最 終 母 公 司 。
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contenteditable="true"> 
                            本 行 經 營 之 業 務為：(1)依 銀 行 法 商 業 銀 行 章 規 定之 業務；(2)國 際 匯 兌 及 有
                            關 業 務；(3)進 出 口 貸 款 及 保 證 業 務；(4)其 他 與 國 際 貿 易 發 展 有 關 之 金 融 業
                            務； (5)辦 理 信 託 業 務； (6)接 受 客 戶 全 權 委 託 投 資 業 務； (7)辦 理 中 長 期 開
                            發 性 放 款、保 證 等 授 信 業 務；(8)參 加 投 資 創 導 性 及 創 業 投 資 之 事 業；(9)經
                            中 央 主 管 機 關 核 准 辦 理 之 其 他 有 關 業 務 。
                        </p>
                    </Col>
                </Row>
            </Container>
            <Other2/>
            <Other3/>
            <Other4/>
            <Other5/>
        </>
    )


}


export default Other;
