import m from './Posts.module.css'
import Post from './Post/Post'
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../redux/profileReducer";
import {getPosts} from "../../../utilities/selectors";


const Posts = React.memo(() => {
    const posts = useSelector(getPosts)
    return (
        <div className={m.posts}>
            <div>
                My post
            </div>
            <div>
                <PostsForm/>
            </div>
            {posts.map(post => <Post message={post.message} key={post.id} likeCount={post.likeCount}/>)}
        </div>
    )
});


const PostsForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"});
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addPost(data.postMessage));
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