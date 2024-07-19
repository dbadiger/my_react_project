import React from "react";

const Pagination = ({postsPerPage, totalPages,setcurrentPage})=>{
// const Pagination = ({postsPerPage, totalPages, paginate})=>{
    const pageNumber = [];
    for(let i=1; i<=Math.ceil(totalPages/ postsPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <>
        {/* <nav className="pagination">
            {pageNumber.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>paginate(number)} href="" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </nav> */}

        {pageNumber.map((number)=>{
            return <button key={number} onClick={()=>setcurrentPage(number)}>{number}</button>
        })}
        </>
    )
}

export default Pagination