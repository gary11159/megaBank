exports.colDefs = {
    dragButton: { id: 'dragButton', headerName: '', rowDrag: true, maxWidth: 50 },
    project: {
        id: 'project',
        field: 'name',
        headerName: '',
        minWidth: 500,
        autoHeight: true,
        cellClass: (params) => {
            return params.data.type === '1' ? ['title'] : ['titleInit', 'title_' + params.data.type]
        },
    },
    firstYear: { id: 'firstYear', field: 'firstYear', headerName: '108年度', minWidth: 300 },
    secondYear: { id: 'secondYear', field: 'secondYear', headerName: '107年度', minWidth: 300 },
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