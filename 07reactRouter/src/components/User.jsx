import React from "react";
import { useParams } from "react-router-dom";

const User =()=>{
    const params = useParams()
    return(
        <>
        <h1>User Page</h1>
        <h1>Welcome {params.username}</h1>
        </>
    )
}

export default User;