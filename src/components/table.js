import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import TableSetting from '../config/tableSetting';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Title from './title';
import TableFooter from './tableFooter';

const data = [{
    'id': 0,
    'name': '資產',
    'type': '2',
}, {
    'id': 2,
    'type': '6',
    'num': 11000,
    'name': '現金及約當現金',
    'other': '六(一)',
    'firstMoney': '$ 141,035,478',
    'firstPercent': '4',
    'secondMoney': '123,184,884',
    'secondPercent': '4',
},{
    'id': 3,
    'type': '6',
    'num': 11500,
    'name': '存放央行及拆借銀行同業',
    'other': '六(二)及十一(三)',
    'firstMoney': '493,945,509',
    'firstPercent': '15',
    'secondMoney': '520,312,432',
    'secondPercent': '16',
},
]

let colDefs = [];

const Table = () => {
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
            <Title from={0}/>
            <div className="outer" style={{ width: '90%' }}>
                <div style={{ width: '100%', height: "500px" }} className="inner-col ag-theme-alpine">
                    <div>
                        {/* <button id="dragButton" className="button" onClick={() => handleCol('dragButton')}><span id="dragButton_span">拖拉鍵</span></button>
                        <button id="removeButton" className="button" onClick={() => handleCol('removeButton')}><span id="removeButton_span">刪除鍵</span></button> */}
                        <button id="assets" className="button" onClick={() => handleCol('assets')}><span id="assets_span">資產</span></button>
                        <button id="other" className="button" onClick={() => handleCol('other')}><span id="other_span">附註</span></button>
                        <button id="firstYear" className="button" onClick={() => handleCol('firstYear')}><span id="firstYear_span">108年度</span></button>
                        <button id="secondYear" className="button" onClick={() => handleCol('secondYear')}><span id="secondYear_span">107年度</span></button>
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
                    <TableFooter/>
                </div>
            </div>
        </>
    );
};

export default Table;