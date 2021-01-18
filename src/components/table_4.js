import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import TableSetting from '../config/table4Setting';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Title from './title';
import TableFooter from './tableFooter';

const data = [{
    'id': 0,
    'name': '營業活動之現金流量',
    'type': '2',
}, {
    'id': 2,
    'type': '4',
    'name': '本期稅前淨利',
    'firstYear': '$ 28,380,580',
    'secondYear': '$ 26,718,951'
}, {
    'id': 3,
    'type': '4',
    'name': '調整項目',
}, {
    'id': 4,
    'type': '4',
    'name': '收益費損項目',
}, {
    'id': 5,
    'type': '5',
    'name': '呆帳費用、承諾及保證責任準備提存',
    'firstYear': '746,859',
    'secondYear': '2,045,773'
}, {
    'id': 6,
    'name': '投資活動之現金流量',
    'type': '2',
}, {
    'id': 7,
    'type': '5',
    'name': '購買不動產及設備',
    'firstYear': '( 745,435 )',
    'secondYear': '( 677,172 )'
},
]

let colDefs = [];

const Table_4 = () => {
    const [rowData, setRowData] = useState(data);
    const [columns, setColumns] = useState(colDefs);
    const [gridApi, setGridApi] = useState(null);

    const onGridReady = (params) => {
        console.log(params);
        // 初始化資料
        setRowData(data);
        // 欄位自動適應
        params.api.sizeColumnsToFit();
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
        window.addEventListener('resize', function () {
            setTimeout(function () {
                params.api.sizeColumnsToFit();
            });
        });

        params.api.sizeColumnsToFit();
        setColumns(pre => [...pre, TableSetting.colDefs['dragButton']]);
        setColumns(pre => [...pre, TableSetting.colDefs['removeButton']]);
        setColumns(pre => [...pre, TableSetting.colDefs['project']]);
    }

    const handleCol = (type) => {
        // 新增
        if (document.getElementById(type + '_span').className.indexOf('remove') === -1) {
            document.getElementById(type + '_span').className = 'remove';
            document.getElementById(type).style.backgroundColor = "#f4511e";
            setColumns(pre => [...pre, TableSetting.colDefs[type]]);
        }
        // 刪除 
        else {
            document.getElementById(type + '_span').className = '';
            document.getElementById(type).style.backgroundColor = "#337ab7";
            setColumns(columns.filter(col => type !== col.id));
        }

        gridApi.sizeColumnsToFit();
    };

    // 自適應Row高度
    const onColumnResized = (params) => {
        params.api.resetRowHeights();
    };

    return (
        <>
            <Title from={3} />
            <div className="outer" style={{ width: '90%' }}>
                <div style={{ width: '100%', height: "500px" }} className="inner-col ag-theme-alpine">
                    <div>
                        <button id="firstYear" className="button" onClick={() => handleCol('firstYear')}><span id="firstYear_span">107年度</span></button>
                        <button id="secondYear" className="button" onClick={() => handleCol('secondYear')}><span id="secondYear_span">108年度</span></button>
                    </div>
                    <div id="grid-wrapper"
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                        className="ag-theme-alpine test-grid">
                        <AgGridReact
                            onColumnResized={onColumnResized}
                            rowDragManaged={true}
                            animateRows={true}
                            rowData={rowData}
                            onGridReady={onGridReady}
                            columnDefs={columns}
                            suppressSizeToFit={true}
                            defaultColDef={{
                                initialWidth: 100,
                                maxWidth: 500,
                                sortable: true,
                                resizable: true,
                                editable: true,
                            }}>
                        </AgGridReact>
                    </div>
                    <TableFooter />
                </div>
            </div>
        </>
    );
};

export default Table_4;