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
            
            <h1  className="header">Posts</h1>
            {post !== null ? (
                <p style={{maxWidth:2000, textAlign:'center'}} >
                <div style={{padding:10}}>
                    <p><b>Post :</b> {post.text}</p>
                    <p><b>Tag :</b> {post.tags} </p>
                    <div><b>PostBy :</b> {post.owner.firstName} {post.owner.lastName} <b>likes :</b> {post.likes}</div>
                   
                   
                    
                    <p><img src={post.image} width={600}></img> </p>
                    <div><b>Comment</b>
</div>
                    
                
                </div></p>
            ):null}
    
                {comment.map(comment => (
                     <p style={{maxWidth:2000, textAlign:'center'}} >

<div >
    
                                <div key={comment.id}>
                                    
                                 <b> {comment.owner.firstName} {comment.owner.lastName} </b>: {comment.message}


                                    
                
                                </div>
                                </div></p>

                        ))}






            <Link href={`/post`}>
                <p style={{maxWidth:2000, textAlign:'center'}}>
            <button style={{margin:10}}>Go to this post</button></p>
            </Link>
        </>
    )
}

export  default  Post

