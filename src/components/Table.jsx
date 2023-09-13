/* eslint-disable react/jsx-key */
// import { useEffect, useMemo, useState } from "react"
// import { useTable } from "react-table"
// import MOCK_DATA from './MOCK_DATA.json'
import './table.css'

function Table({data, column}) {
    
    return <div className='table-wrapper'>
        <table>
            <thead>
                <tr>
                    {column.map((item, index ) => <TableHeadItem key={index} item={item}/>)}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => <TableRow key={index} item={item} column={column} />)}
            </tbody>
        </table>
    </div>

}

function TableHeadItem({item}) {
    return <th>{item.heading}</th>
}

function TableRow({ item, column }) {
    return <tr>{column.map((columnItem, index) => {
        if (columnItem.value.includes('.')) {
            const itemSplit = columnItem.value.split('.')
            return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
        }
            
        return <td key={index}>{item[`${columnItem.value}`]}</td>
    })}</tr>
}

export default Table


// const data = useMemo(() => MOCK_DATA, []);
    // const columns = useMemo(() => [
    //     {
    //         Header: 'Id',
    //         accessor: 'id'
    //     },
    //     {
    //         Header: 'First Name',
    //         accessor: 'first_name'
    //     },
    //     {
    //         Header: 'Last Name',
    //         accessor: 'last_name',
    //     },
    //     {
    //         Header: 'Gender',
    //         accessor: 'gender'
    //     },
    //     {
    //         Header: 'Country',
    //         accessor: 'country'
    //     },
    //     {
    //         Header: 'Phone',
    //         accessor: 'phone'
    //     }
    // ], [])

    // const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data })
    
    // return <div>
    //      <table {...getTableProps()}>
    //          <thead>
    //             {headerGroups.map((headerGroup) => (
    //                 <tr {...headerGroup.getHeaderGroupProps()}>
    //                     {
    //                         headerGroup.headers.map(column => (
    //                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    //                         ))
    //                     }
    //                 </tr>
    //             ))}
    //         </thead>
    //         <tbody {...getTableBodyProps()}>
    //             {rows.map(row => {
    //                 prepareRow(row)
    //                 return (
    //                     <tr {...row.getRowProps()}>
    //                         {
    //                             row.cells.map(cell => {
    //                                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //                             })
    //                         }
                            
    //                     </tr>
    //                 )
    //             })}
                
    //         </tbody>
    //     </table>
    // </div>

