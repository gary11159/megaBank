import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import TableSetting from '../config/table3Setting';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Title from './title';
import TableFooter from './tableFooter';

const data = [{
    'id': 0,
    'name': '107年度',
    'type': '2',
}, {
    'id': 2,
    'type': '1',
    'name': '107 年 1 月 1 日餘額 ',
    'normal': '$ 85,362,336',
    'assets': '$ 62,219,540',
    'other': '六(二十一)',
    'legalAssets': '$ 79,690,847',
    'specialAssets': '$ 4,000,055',
    'unassignedAssets': '$ 35,028,439',
    'assignedAssets': '($ 2,713,370 )',
    'unassignSaleMoney': ' $ 295,026',
    'unassignAssets': '$ -',
    'otherEquity': '$ -',
    'equityTotal': '$ 263,882,873',
},
]

let colDefs = [];

const Table_3 = () => {
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
            <Title from={2}/>
            <div className="outer" style={{ width: '90%' }}>
                <div style={{ width: '100%', height: "500px" }} className="inner-col ag-theme-alpine">
                    <div>
                        {/* <button id="project" className="button" onClick={() => handleCol('project')}><span id="project_span">項目</span></button> */}
                        <button id="other" className="button" onClick={() => handleCol('other')}><span id="other_span">附註</span></button>
                        <button id="normal" className="button" onClick={() => handleCol('normal')}><span id="normal_span">普通股</span></button>
                        <button id="assets" className="button" onClick={() => handleCol('assets')}><span id="assets_span">資本公積</span></button>
                        <button id="legalAssets" className="button" onClick={() => handleCol('legalAssets')} style={{width: '200px'}}><span id="legalAssets_span">法定資本公積</span></button>
                        <button id="specialAssets" className="button" onClick={() => handleCol('specialAssets')} style={{width: '200px'}}><span id="specialAssets_span">特別盈餘公積</span></button>
                        <button id="unassignedAssets" className="button" onClick={() => handleCol('unassignedAssets')} style={{width: '220px'}}><span id="unassignedAssets_span">未分配盈餘</span></button>
                        <button id="assignAssets" className="button" onClick={() => handleCol('assignAssets')} style={{width: '500px'}}><span id="assignAssets_span">國外營運機構財務報表換算之兌換差額</span></button>
                        <button id="unassignSaleMoney" className="button" onClick={() => handleCol('unassignSaleMoney')} style={{width: '500px'}}><span id="unassignSaleMoney_span">備供出售金融資產未實現評價損益</span></button>
                        <button id="unassignAssets" className="button" onClick={() => handleCol('unassignAssets')} style={{width: '670px'}}><span id="unassignAssets_span">透過其他綜合損益按公允價值衡量之金融資產未實現損益</span></button>
                        <button id="otherEquity" className="button" onClick={() => handleCol('otherEquity')} style={{width: '250px'}}><span id="otherEquity_span">其他權益-其他</span></button>
                        <button id="equityTotal" className="button" onClick={() => handleCol('equityTotal')}><span id="equityTotal_span">權益總額</span></button>
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

export default Table_3;