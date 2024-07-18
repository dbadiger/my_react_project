import React from "react";
import {useParams} from 'react-router-dom'

const User=()=>{
    const params = useParams()
return(
    <>
    <h1>User Page</h1>
    <h2>Welcom: {params.username}</h2>
    </>
)
}
export default User