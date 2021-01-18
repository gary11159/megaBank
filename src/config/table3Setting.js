exports.colDefs = {
    dragButton: { id: 'dragButton', headerName: '', rowDrag: true, maxWidth: 50 },
    project: {
        id: 'project',
        field: 'name',
        headerName: '',
        minWidth: 200,
        maxWidth: 300,
        autoHeight: true,
        cellClass: (params) => {
            return params.data.type === '1' ? ['title'] : ['titleInit', 'title_' + params.data.type]
        },
    },
    other: { id: 'other', field: 'other', headerName: '附註', maxWidth: 150, },
    normal: { id: 'normal', field: 'normal', headerName: '普通股' },
    assets: { id: 'assets', field: 'assets', headerName: '資本公積' },
    legalAssets: { id: 'legalAssets', field: 'legalAssets', headerName: '法定資本公積' },
    specialAssets: { id: 'specialAssets', field: 'specialAssets', headerName: '特別盈餘公積' },
    unassignedAssets: { id: 'unassignedAssets', field: 'unassignedAssets', headerName: '未分配盈餘' },
    assignAssets: { id: 'assignAssets', field: 'assignAssets', headerName: '國外營運機構財務報表換算之兌換差額' },
    unassignSaleMoney: { id: 'unassignSaleMoney', field: 'unassignSaleMoney', headerName: '備供出售金融資產未實現評價損益' },
    unassignAssets: { id: 'unassignAssets', field: 'unassignAssets', headerName: '透過其他綜合損益按公允價值衡量之金融資產未實現損益' },
    otherEquity: { id: 'otherEquity', field: 'otherEquity', headerName: '其他權益-其他' },
    equityTotal: { id: 'equityTotal', field: 'equityTotal', headerName: '權益總額' },
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