import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Table = () => {
    return (
        <>
            <div style={{ width: '90%' }}>
                <div style={{ marginTop: '20px' }}>
                    <div>兆豐國際商業銀行股份有限公司及子公司</div>
                    <div>地區別財務資訊明細表</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div>單位：新臺幣仟元</div>
                </div>
            </div>
            <div>
                <Row>
                    <div className="contentunderline offset-md-1-5 col-md-10-5">
                        <span contentEditable={true} suppressContentEditableWarning={true}>108年度</span>
                    </div>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <div className="contentunderline offset-md-1-5 col-1-5">
                        <span contentEditable={true} suppressContentEditableWarning={true}>國內</span>
                    </div>
                    <div className="contentunderline col-1-5" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>亞洲(註)</span>
                    </div>
                    <div className="contentunderline col-1-5" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>北美洲</span>
                    </div>
                    <div className="contentunderline col-1-5-1" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>其他國外營運部門</span>
                    </div>
                    <Col xs="2" className="contentunderline" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>調整及沖銷</span>
                    </Col>
                    <Col xs="2" className="contentunderline" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>合 計</span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <div className="col-1-5">
                        <span contentEditable={true} suppressContentEditableWarning={true}>來自公司以外客戶之收益</span>
                    </div>
                    <div className="contentunderline col-1-5">
                        <span contentEditable={true} suppressContentEditableWarning={true}>$ 42,647,441</span>
                    </div>
                    <div className="contentunderline col-1-5" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>$ 7,283,832</span>
                    </div>
                    <div className="contentunderline col-1-5" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>$ 2,645,023</span>
                    </div>
                    <div className="contentunderline col-1-5-1" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>$ 2,616,018</span>
                    </div>
                    <Col xs="2" className="contentunderline" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>$ (313,264)</span>
                    </Col>
                    <Col xs="2" className="contentunderline" style={{ marginLeft: '5px' }}>
                        <span contentEditable={true} suppressContentEditableWarning={true}>$ 54,879,050</span>
                    </Col>
                </Row>
            </div>
        </>
    )
}


const Other10 = (props) => {
    return (
        <>
            <Container style={{ marginBottom: '20px' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        <span>十、 <span style={{ textDecoration: 'underline' }}>營 運 部 門 別 資 訊</span></span>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 一 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            一 般 性 資 訊
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行以主要營運決策者於制定決策所使用之報導資訊辨認應報導部
                            門。本行及子行目前著重於亞洲及美洲之業務發展。本行及子行所揭露之營
                            運部門主要係以經營銀行法第三條業務所產生之收入為主要收入來源。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 二 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            部 門 損 益 、 資 產 與 負 債 之 資 訊
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行主要營運決策者主要係著重於全行營運結果，全行營運結果與
                            本合併財務報告之合併綜合損益表一致，請參閱合併綜合損益表。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 三 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            重 要 客 戶 之 資 訊
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行之收入來源分散，未顯著集中於單一客戶或單一交易相對人進
                            行交易。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 四 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            產 品 別 及 勞 務 別 之 資 訊
                        </p>
                        <p contentEditable={true} suppressContentEditableWarning={true} >
                            本行及子行所有營運部門之營運結果大部分係來自外部客戶之利息收入，
                            亦與綜合損益表採相同之衡量基礎衡量。而部門收入來源除來自外部收入
                            外，亦有部門間依照約定之收入分攤標準合理的分攤內部收支。相關收入餘
                            額組成明細請參詳地區別之資訊。
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={{ span: 0.5, offset: 1 }} >
                        ( 五 )
                    </Col>
                    <Col xs={10} >
                        <p contentEditable={true} suppressContentEditableWarning={true} style={{ textDecoration: 'underline' }}>
                            地 區 別 之 資 訊
                        </p>
                    </Col>
                </Row>
                <Table />
            </Container>
        </>
    )


}


export default Other10;
