import m from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={m.content}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt=""/>
                <span>{props.message}</span>
            </div>

            <div>
                <span>like</span>
                <span>{props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post