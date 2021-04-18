import m from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={m.content}>
            <img className={m.wallpaper}
                 src="https://www.wallpaperup.com/uploads/wallpapers/2016/09/30/1021581/54a1b15628c7ade77a1799666d37c9e3-700.jpg"
                 alt=""/>
            <ProfileInfo profile={props.profile}/>
            <Posts posts={props.posts}
                            newInputText={props.newInputText}
                            addPost={props.addPost}
                            setInput={props.setInput}/>
        </div>
    )
}

export default Profile;