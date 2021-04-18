import m from './Posts.module.css'
import Post from './Post/Post'
import React from "react";


let inputEl = React.createRef();

const Posts = (props) => {

    let addPost = () => {
        props.addPost()
    }
    let setInput = () => {
        props.setInput(inputEl.current.value)
    }

    return (
        <div className={m.posts}>
            <div>
                My post
            </div>
            <div>
                <input onInput={()=>{props.setInput(inputEl.current.value)}}
                       ref={inputEl} type="text" value={props.newInputText}/>
                <button onClick={props.addPost}>add post</button>
            </div>
            {props.posts.map(post => <Post message={post.message} key={post.id} likeCount={post.likeCount}/>)}
        </div>
    )
}

export default Posts;