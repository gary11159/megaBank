import React, { useState } from 'react';

const Title = (props) => {

    return (
        <div style={{ width: '90%' }}>
            <div style={{ textDecoration: 'underline', marginTop: '20px' }}>
                <div>兆 豐 國 際 商 業 銀 行 股 份 有 限 公 司 及 子 公 司</div>
                {props.from === 0 &&
                    <div>合 併 資 產 負 債 表</div>
                }
                {props.from === 1 &&
                    <div>合 併 綜 合 損 益 表</div>
                }
                {props.from === 2 &&
                    <div>合 併 權 益 變 動 表</div>
                }
                {props.from === 3 &&
                    <div>合 併 現 金 流 量 表</div>
                }
                {props.from === 4 &&
                    <div>合 併 財 務 報 表 附 註</div>
                }
                {props.from !== 4 ?
                    <div>民國 108 年及 107 年 1 月 1 日至 12 月 31 日</div>
                    : <div>民 國 108 年 度 及 10 7 年 度</div>
                }

            </div>
            <div style={{ textAlign: 'right' }}>
                <div>單位：新臺幣仟元</div>
                {props.from === 1 &&
                    <div>(除每股盈餘為新臺幣元外)</div>
                }
                {props.from === 4 &&
                    <div>(除特別註明者外)</div>
                }
            </div>
        </div>
    )


}


export default Title;
