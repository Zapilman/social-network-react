import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='social-wrapper'>
            <HeaderContainer store={props.store}/>
            <Sidebar sidebar={props.store.getState().sidebar}/>

            <div className={'social-wrapper__content'}>
                <Route  path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}></Route>
                <Route path='/messages/' render={() => <MessagesContainer store={props.store}/>}></Route>
                <Route exact path='/news' render={() => <News/>}></Route>
                <Route exact path='/music' render={() => <Music/>}></Route>
                <Route exact path='/settings' render={() => <Settings/>}></Route>
                <Route exact path='/users' render={() => <UsersContainer store={props.store}/>}></Route>
            </div>

        </div>
    )

}

export default App;
