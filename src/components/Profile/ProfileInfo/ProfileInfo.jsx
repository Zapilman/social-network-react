import m from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={m.profileInfo}>
            <div className={m.avatar}>

            </div>
            <div className={m.info}>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJob
                ? props.profile.lookingForAJobDescription
                : 'i am not looking for a job'}</div>
        </div>
    )
}

export default ProfileInfo