import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
import Link from 'next/link'
const appID='600e8ef5ece4448c1abb3925'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    const fetchData = async () => {
        if(postId){
            const datapostID = await axios.get(`${baseURL}/post/${postId}`, { headers: { "app-id": appID }})
            const dataComment = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { "app-id": appID }})
            setPost(datapostID.data)
            setComment(dataComment.data.data)
            console.log(dataComment.data.data)
            
        }
    }

    useEffect(()=>{
        if(postId){fetchData()}
        },[postId])
    return (
        <>
            
            <h1 style={{margin:10}}>Posts</h1>
            {post !== null ? (
                <div style={{padding:10}}>
                    <p>Post : {post.text}</p>
                    <p>Tag : {post.tags}</p>
                    <p><img src={post.image} width={600}></img> </p>

                    <p><b>PostBy :</b> {post.owner.firstName} {post.owner.lastName}  </p>
                   
                    <p><b>likes :</b> {post.likes}</p>
                    
                
                </div>
            ):null}
    
                {comment.map(comment => (

<div style={{padding:10}}>
    
                                <div key={comment.id}>
                                    
                                 <b> {comment.owner.firstName} {comment.owner.lastName} </b>: {comment.message}


                                    
                
                                </div>
                                </div>

                        ))}






            <Link href={`/post`}>
            <button style={{margin:10}}>Go to this post</button>
            </Link>
        </>
    )
}

export  default  Post

