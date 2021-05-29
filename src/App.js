import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {appInit} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {useEffect} from "react";
import {getIsInitialized} from "./utilities/selectors";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";


const App = () => {

    const dispatch = useDispatch();
    const isInit = useSelector(getIsInitialized);

    useEffect(() => {
        dispatch(appInit());
    }, []);

    if (!isInit) {
        return <Preloader/>
    }

    return (
        <div className='social-wrapper'>
            <Header/>
            <Sidebar/>
            <div className={'social-wrapper__content'}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}>profile</Route>
                <Route path='/messages/' render={() => <Messages/>}>messages</Route>
                <Route exact path='/news' render={() => <News/>}>news</Route>
                <Route exact path='/music' render={() => <Music/>}>music</Route>
                <Route exact path='/settings' render={() => <Settings/>}>settings</Route>
                <Route exact path='/users' render={() => <UsersContainer/>}>users</Route>
                <Route exact path='/login' render={() => <Login/>}>login</Route>
            </div>
        </div>
    )

}

export default App;
