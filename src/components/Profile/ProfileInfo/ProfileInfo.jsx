import m from './ProfileInfo.module.css'

const ProfileInfo = ({profile}) => {
    return (
        <div className={m.profileInfo}>
            <div className={m.avatar}>

            </div>
            <div className={m.info}>{profile.fullName}</div>
            <div>{profile.aboutMe}</div>
            <div>{profile.lookingForAJob
                ? profile.lookingForAJobDescription
                : 'i am not looking for a job'}</div>
        </div>
    )
}

export default ProfileInfo