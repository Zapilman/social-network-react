import m from './Posts.module.css'
import Post from './Post/Post'
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addPost} from "../../../redux/profileReducer";


const Posts = React.memo(({posts}) => {
    const dispatch = useDispatch();

    return (
        <div className={m.posts}>
            <div>
                My post
            </div>
            <div>
                <PostsForm onSubmit={(data) => {
                    dispatch(addPost(data.postMessage))
                }}/>
            </div>
            {posts.map(post => <Post message={post.message}
                                     key={post.id}
                                     likeCount={post.likeCount}/>)}
        </div>
    )
});


const PostsForm = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        props.onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={(errors.postMessage) ? m.invalid_area : m.area}
                   type="text"
                   autoComplete={"off"}
                   {...register('postMessage', {
                       minLength: 0,
                       maxLength: 10
                   })}/>
            <input type="submit" value={'add post'}/>
        </form>
    )
}

export default Posts;