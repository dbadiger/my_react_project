import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Posts from './Posts';
import Pagination from './Pagination';


const Blogs=()=>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage]=useState(1);
    const [postsPerPage, setpostsPerPage] = useState(10)

    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(true)
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])
// console.log(posts);


//get current posts
const indexOfLastPost = postsPerPage* currentPage;
const indexOfFirstPage = indexOfLastPost - postsPerPage
const curretPost = posts.slice(indexOfFirstPage, indexOfLastPost)

//change page
const paginate=(pageNumber)=>setcurrentPage(pageNumber);

    return (
        <>
        <div className='container'>
        <h1>MY Blogs</h1>
        <Posts posts={curretPost} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPages={posts.length} paginate={paginate}/>
        </div>
        </>
    )
}

export default Blogs