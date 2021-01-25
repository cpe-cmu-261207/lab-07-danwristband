import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'

const appID='600e8ef5ece4448c1abb3925'

const Posts = () => {

    const [posts,setPosts] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`${baseURL}/post`, { headers: { "app-id": appID }})
        
        console.log(response.data)
        setPosts(response.data.data)

    

    }  
    useEffect(()=>{fetchData()},[]);
    return (
        <>
            <h1>All Posts</h1>
            <ul>
                    {
                        posts.map(post => (

                            <Link  key={post.id} href={`/post/${post.id}`}>
                                <p style={{maxWidth:2000, textAlign:'center'}} >
                                    post : {post.text}<br></br>
                                   <p><img src={post.image} width={600}></img> </p>
                                    <p> likes: {post.likes} <button style={{margin:10}}>Go to this post</button></p>
                                    
                                    <br></br>
                                </p>
                            </Link>

                        ))
                    }
                </ul>
        </>
    )
}

export default  Posts
