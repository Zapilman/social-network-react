import m from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {

    const sidebar = useSelector((state) => state.sidebar)

    return (
        <nav>
            <ul className={m.navigation}>
                <li className={`${m.link} ${m.active}`}>
                    <NavLink to="/profile" activeClassName={m.active}>{sidebar.profile.name}</NavLink>
                </li>
                <li className={m.link}>
                    <NavLink to="/messages" activeClassName={m.active}>
                        {sidebar.messages.name}
                    </NavLink>
                </li>
                <li className={m.link}>
                    <NavLink to="/news" activeClassName={m.active}>
                        {sidebar.news.name}
                    </NavLink>
                </li>
                <li className={m.link}>
                    <NavLink to="/music" activeClassName={m.active}>
                        {sidebar.music.name}
                    </NavLink>
                </li>
                <li className={m.link}>
                    <NavLink to="/settings" activeClassName={m.active}>{sidebar.settings.name}</NavLink>
                </li>
                <li className={m.link}>
                    <NavLink to='/users' activeClassName={m.active}>
                        {sidebar.users.name}
                    </NavLink>
                </li>
                <li className={m.link}>
                    <NavLink to="/friends" activeClassName={m.active}>{sidebar.friends.name}</NavLink>
                    <div className={m.friends__wrapper}>
                        <div className={m.friendPromo}>
                            <img src={sidebar.friends.friend1.img} alt=""/>
                            <span>{sidebar.friends.friend1.name}</span>
                        </div>
                        <div className={m.friendPromo}>
                            <img src={sidebar.friends.friend2.img} alt=""/>
                            <span>{sidebar.friends.friend2.name}</span>
                        </div>
                        <div className={m.friendPromo}>
                            <img src={sidebar.friends.friend3.img} alt=""/>
                            <span>{sidebar.friends.friend3.name}</span>
                        </div>
                    </div>
                </li>

            </ul>
        </nav>
    )
}

export default Sidebar;