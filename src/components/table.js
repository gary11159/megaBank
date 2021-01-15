import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Title from './title';
// import 'ag-grid-enterprise';

// const chooseData = [{
//     'id': 10,
//     'num': 8787,
//     'name': '採用權益法認列之關聯企業及合資之其他綜合損益之份額-不重分類至損益之項目',
//     'other': '七(二十一)',
// }]

// const data = [{
//     'id': 0,
//     'name': '其他綜合損益',
//     'type': '2',
// }, {
//     'id': 1,
//     'name': '不重分類至損益之項目',
//     'type': '3',
// }, {
//     'id': 2,
//     'type': '1',
//     'num': 65201,
//     'name': '確定福利計畫之再衡量數',
//     'other': '六(二十一)',
//     'firstMoney': '($ 883,550)',
//     'firstPercent': '(1)',
//     'secondMoney': '($ 757,090)',
//     'secondPercent': '(2)',
//     'changePercent': '17',
// }, {
//     'id': 3,
//     'type': '1',
//     'num': 65201,
//     'name': '透過其他綜合損益按公允價值衡量之權益工具評價損益 ',
//     'other': '六(二十一)',
//     'firstMoney': '($ 983,550)',
//     'firstPercent': '(1)',
//     'secondMoney': '($ 757,090)',
//     'secondPercent': '(2)',
//     'changePercent': '17',
// }, {
//     'id': 4,
//     'name': '後續可能重分類至損益之項目',
//     'type': '3',
// }, {
//     'id': 5,
//     'type': '1',
//     'num': 65301,
//     'name': '國外營運機構財務報表換算之兌換差額',
//     'other': '六(二十六)',
//     'firstMoney': '( 771,311)',
//     'firstPercent': '(1)',
//     'secondMoney': '1,100,821',
//     'secondPercent': '(1)',
//     'changePercent': '(170)',
// }, , {
//     'id': 6,
//     'type': '1',
//     'num': 65306,
//     'name': '採用權益法認列之關聯企業及合資之其他綜合損益之份額-可能重分類至損益之項目  ',
//     'other': '六(八)(二十六)',
//     'firstMoney': '21,269',
//     'firstPercent': '-',
//     'secondMoney': '( 33,551)',
//     'secondPercent': '-',
//     'changePercent': '( 163)',
// },
// ]

// const baseDefaultColDef = {
//     sortable: true,
//     filter: true,
//     resizable: true,
//     editable: true,
// };


// const baseGridOptions = {
//     getRowNodeId: function (data) {
//         return data.id;
//     },
//     rowDragManaged: true,
//     animateRows: true,
//     suppressMoveWhenRowDragging: true
// }

// const leftGridOptions = {
//     ...baseGridOptions,
//     defaultColDef: {
//         ...baseDefaultColDef
//     }
// };

// const rightGridOptions = {
//     ...baseGridOptions,
//     defaultColDef: {
//         ...baseDefaultColDef
//     }
// };

// const Table = () => {
//     const [leftGridApi, setLeftGridApi] = useState(null);
//     const [rightGridApi, setRightGridApi] = useState(null);

//     function addGridDropZone(params, side) {
//         let gridApi = (side === 'Left' ? leftGridOptions : rightGridOptions).api;
//         let dropZone = gridApi.getRowDropZoneParams();
//         params.api.addRowDropZone(dropZone);
//     }


//     const onLeftGridReady = (params) => {
//         // 初始化資料
//         params.api.setRowData(chooseData);
//         // 欄位自動適應
//         params.api.sizeColumnsToFit();
//         // 設定可以拉到的區域
//         addGridDropZone(params, 'Right');
//         setLeftGridApi(params.api);
//     }

//     const onRightGridReady = (params) => {
//         // 初始化資料
//         params.api.setRowData(data);
//         // 欄位自動適應
//         params.api.sizeColumnsToFit();
//         setRightGridApi(params.api);
//     }

//     const gridDragOver = (event) => {
//         event.preventDefault();
//         const dragSupported = event.dataTransfer.types.length;
//         if (dragSupported) {
//             event.dataTransfer.dropEffect = 'copy';
//             event.preventDefault();
//         }
//     };

//     // 自適應Row高度
//     const onColumnResized = (params) => {
//         params.api.resetRowHeights();
//     };

//     return (
//         <>
//             <Title />
//             <div className="outer" style={{ width: '90%' }}>
//                 <div style={{ width: '100%', height: "700px" }} className="inner-col ag-theme-alpine" onDragOver={gridDragOver}>
//                     <AgGridReact gridOptions={rightGridOptions} onGridReady={onRightGridReady} onColumnResized={onColumnResized}
//                         sideBar={{
//                             toolPanels: [
//                                 {
//                                     id: 'columns',
//                                     labelDefault: '欄位調整',
//                                     labelKey: 'columns',
//                                     iconKey: 'columns',
//                                     toolPanel: 'agColumnsToolPanel',
//                                     toolPanelParams: {
//                                         suppressRowGroups: true,
//                                         suppressValues: true,
//                                         suppressPivots: true,
//                                         suppressPivotMode: true,
//                                     },
//                                 },
//                             ],
//                         }} >
//                         <AgGridColumn field="" rowDrag={true} maxWidth={50} />
//                         <AgGridColumn headerName="項目" field="project">
//                             <AgGridColumn headerName="" field="num" maxWidth={100}/>
//                             <AgGridColumn headerName="" field="name" autoHeight={true} minWidth={300}
//                                 cellClass={(params) =>
//                                     params.data.type === '1' ? ['title'] : ['title', 'title_' + params.data.type]
//                                 }
//                             />
//                         </AgGridColumn>
//                         <AgGridColumn headerName="附註" field="other" />
//                         <AgGridColumn headerName="108年度" width={100}>
//                             <AgGridColumn headerName="金額" field="firstMoney" />
//                             <AgGridColumn headerName="%" field="firstPercent" />
//                         </AgGridColumn>
//                         <AgGridColumn headerName="107年度" width={100}>
//                             <AgGridColumn headerName="金額" field="secondMoney" />
//                             <AgGridColumn headerName="%" field="secondPercent" />
//                         </AgGridColumn>
//                         <AgGridColumn headerName="變動百分比%" field="changePercent" />
//                         <AgGridColumn field=""
//                             suppressMenu={true}
//                             maxWidth={100}
//                             cellRenderer={(params) => {
//                                 let button = document.createElement('i');
//                                 button.addEventListener('click', function () {
//                                     params.api.applyTransaction({ remove: [params.node.data] });
//                                 });

//                                 button.classList.add('far');
//                                 button.classList.add('fa-trash-alt');
//                                 button.style.cursor = 'pointer';

//                                 return button;
//                             }}
//                         />
//                     </AgGridReact>
//                 </div>
//             </div>
//         </>
//     );
// }


// export default Table;