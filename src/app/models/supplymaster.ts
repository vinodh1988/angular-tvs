export interface supplymaster{
    Custcode:number;
    Module:string;
    cost:number;
    custgroup:number;
    partno:string;
    qty:number;
    productcode:number;
    recordtype:number;
    sno:number;
    supplymonth:number;
}

export interface product{
    ProductCode:string;
    Expense:number;
    Units:number;
}

export const columnNames=[
    {headerName: 'Sno', field: 'sno' },
    {headerName: 'Customer Code', field: 'Custcode' },
    {headerName: 'Module', field: 'Module' },
    {headerName: 'Cost', field: 'cost',sortable: true,filter:true },
    {headerName: 'Part number', field: 'partno' },
    {headerName: 'Quantity', field: 'qty',sortable: true },
    {headerName: 'Product Code', field: 'productcode' ,filter:true},
    {headerName: 'Record type', field: 'recordtype' },
    {headerName: 'SupplyMonth', field: 'supplymonth' }
]

export const proColumnNames=[
    {headerName: 'ProductCode', field: 'ProductCode' },
    {headerName: 'Expense', field: 'Expense' },
    {headerName: 'Units', field: 'Units' },
]