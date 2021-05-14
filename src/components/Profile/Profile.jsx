import m from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Status from "./Status/Status";


const Profile = (props) => {
    return (
        <div className={m.content}>
            <img className={m.wallpaper}
                 src="https://www.wallpaperup.com/uploads/wallpapers/2016/09/30/1021581/54a1b15628c7ade77a1799666d37c9e3-700.jpg"
                 alt=""/>
            <ProfileInfo profile={props.profile}/>
            <Status/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile;