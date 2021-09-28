import axios from 'axios'
import React, { useState , useEffect } from 'react'

function DataFetching() {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        // return () => {
        //     cleanup
        // }
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default DataFetching
