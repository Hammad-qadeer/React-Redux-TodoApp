import { useState } from "react";
import "../index.css"

const TableHead = ({headers, handleSorting}) => {
    const [sortField, setSortField] = useState('')
    const [order, setOrder]  = useState('asc');

    const handleSortingChange = (accessor) => {
        console.log(sortField)
        const sortingOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        console.log(sortingOrder);
        setSortField(accessor);
        setOrder(sortingOrder);
        handleSorting(accessor, sortingOrder);
    } 
    return ( 
        <thead>
            <tr>
                {headers.map(({label, accessor}) => {
                    const cl = sortField === accessor && order === "asc"
                    ? "up" : sortField === accessor && order === "desc"
                    ? "down" : "default";
                    return <th key={accessor} onClick={() => handleSortingChange(accessor)} className={cl}>{label}</th>
                })}
            </tr>
        </thead>
     );
}
 
export default TableHead;