exports.colDefs = {
    dragButton: { id: 'dragButton', headerName: '', rowDrag: true, maxWidth: 50 },
    assets: {
        id: 'assets',
        field: 'name',
        headerName: '資產',
        cellClass: (params) => {
            return params.data.type === '6' ? ['title_6'] : ['titleInit', 'title_' + params.data.type]
        },
    },
    other: { id: 'other', field: 'other', headerName: '附註', maxWidth: 150, },
    firstYear: {
        id: 'firstYear',
        headerName: '108 年 12 月 31 日',
        children: [{
            field: 'firstMoney',
            maxWidth: 200,
            headerName: '金額',
        }, {
            field: 'firstPercent',
            maxWidth: 200,
            headerName: '%'
        }]
    },
    secondYear: {
        id: 'secondYear',
        headerName: '107 年 12 月 31 日',
        children: [{
            field: 'secondMoney',
            headerName: '金額',
            maxWidth: 200,
        }, {
            field: 'secondPercent',
            headerName: '%',
            maxWidth: 200,
        }]
    },
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