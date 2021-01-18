exports.colDefs = {
    dragButton: { id: 'dragButton', headerName: '', rowDrag: true, maxWidth: 50 },
    project: {
        id: 'project',
        headerName: '項目',
        children: [{
            field: 'num',
            headerName: '',
            maxWidth: 70,
        },
        {
            field: 'name',
            minWidth: 300,
            maxWidth: 300,
            autoHeight: true,
            cellClass: (params) => {
                return params.data.type === '1' ? ['title'] : ['titleInit', 'title_' + params.data.type]
            },
            headerName: '',
        }]
    },
    other: { id: 'other', field: 'other', headerName: '附註', maxWidth: 100, },
    firstYear: {
        id: 'firstYear',
        headerName: '108年度',
        children: [{
            field: 'firstMoney',
            maxWidth: 150,
            headerName: '金額',
        }, {
            field: 'firstPercent',
            maxWidth: 150,
            headerName: '%'
        }]
    },
    secondYear: {
        id: 'secondYear',
        headerName: '107年度',
        children: [{
            field: 'secondMoney',
            headerName: '金額',
            maxWidth: 150,
        }, {
            field: 'secondPercent',
            headerName: '%',
            maxWidth: 150,
        }]
    },
    changePercent: { id: 'changePercent', field: 'changePercent', headerName: '變動百分比%', maxWidth: 200, minWidth: 150 },
    removeButton: {
        id: 'removeButton',
        headerName: '',
        suppressMenu: true,
        maxWidth: 50,
        cellRenderer: (params) => {
            let button = document.createElement('i');
            button.addEventListener('click', function () {
                params.api.applyTransaction({ remove: [params.node.data] });
            });

            button.classList.add('far');
            button.classList.add('fa-trash-alt');
            button.style.cursor = 'pointer';

            return button;
        }
    },
};