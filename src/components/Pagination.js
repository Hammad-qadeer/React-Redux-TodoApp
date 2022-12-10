import React from 'react'
import { useTasks } from '../TodoListContext';

const Pagination = ( { totalPosts} ) => {
    const {postsPerPage, paginate} = useTasks();
    const pageNumbers = [];
     
    for(let i =1; i<=Math.ceil(totalPosts/ postsPerPage); i++) {
        console.log(i)
        pageNumbers.push(i);
    }
return ( 
<nav aria-label="Page navigation example">
  <ul className="pagination m-5">
    {pageNumbers.map(number => {
        return (
        <li key={number} className='page-item'>
        <a href='!#' onClick={() => paginate(number)} className='page-link'>
            {number}
        </a>
        </li>
        )
    })}
  </ul>
</nav>
     );  
}
 
export default Pagination;