import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import TableSetting from '../config/tableSetting';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Title from './title';

const data = [{
    'id': 0,
    'name': '其他綜合損益',
    'type': '2',
}, {
    'id': 1,
    'name': '不重分類至損益之項目',
    'type': '3',
}, {
    'id': 2,
    'type': '1',
    'num': 65201,
    'name': '確定福利計畫之再衡量數',
    'other': '六(二十一)',
    'firstMoney': '($ 883,550)',
    'firstPercent': '(1)',
    'secondMoney': '($ 757,090)',
    'secondPercent': '(2)',
    'changePercent': '17',
}, {
    'id': 3,
    'type': '1',
    'num': 65201,
    'name': '透過其他綜合損益按公允價值衡量之權益工具評價損益 ',
    'other': '六(二十一)',
    'firstMoney': '($ 983,550)',
    'firstPercent': '(1)',
    'secondMoney': '($ 757,090)',
    'secondPercent': '(2)',
    'changePercent': '17',
}, {
    'id': 4,
    'name': '後續可能重分類至損益之項目',
    'type': '3',
}, {
    'id': 5,
    'type': '1',
    'num': 65301,
    'name': '國外營運機構財務報表換算之兌換差額',
    'other': '六(二十六)',
    'firstMoney': '( 771,311)',
    'firstPercent': '(1)',
    'secondMoney': '1,100,821',
    'secondPercent': '(1)',
    'changePercent': '(170)',
}, , {
    'id': 6,
    'type': '1',
    'num': 65306,
    'name': '採用權益法認列之關聯企業及合資之其他綜合損益之份額-可能重分類至損益之項目  ',
    'other': '六(八)(二十六)',
    'firstMoney': '21,269',
    'firstPercent': '-',
    'secondMoney': '( 33,551)',
    'secondPercent': '-',
    'changePercent': '( 163)',
},
]

let colDefs = [];

const Table_2 = () => {
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
            <Title />
            <div className="outer" style={{ width: '90%' }}>
                <div style={{ width: '100%', height: "500px" }} className="inner-col ag-theme-alpine">
                    <div>
                        {/* <button id="dragButton" className="button" onClick={() => handleCol('dragButton')}><span id="dragButton_span">拖拉鍵</span></button>
                        <button id="removeButton" className="button" onClick={() => handleCol('removeButton')}><span id="removeButton_span">刪除鍵</span></button> */}
                        <button id="project" className="button" onClick={() => handleCol('project')}><span id="project_span">項目</span></button>
                        <button id="other" className="button" onClick={() => handleCol('other')}><span id="other_span">附註</span></button>
                        <button id="firstYear" className="button" onClick={() => handleCol('firstYear')}><span id="firstYear_span">108年度</span></button>
                        <button id="secondYear" className="button" onClick={() => handleCol('secondYear')}><span id="secondYear_span">107年度</span></button>
                        <button id="changePercent" className="button" onClick={() => handleCol('changePercent')} style={{ width: '200px' }}><span id="changePercent_span">變動百分比%</span></button>
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
                </div>
            </div>
        </>
    );
};

export default Table_2;