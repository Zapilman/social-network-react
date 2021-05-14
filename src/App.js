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
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {appInit} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {useEffect} from "react";
import {getIsInitialized} from "./utilities/selectors";


const App = () => {

    const dispatch = useDispatch();
    const isInit = useSelector(getIsInitialized);

    useEffect(()=>{
        dispatch(appInit());
    },[]);

    if(!isInit){
        return <Preloader/>
    }

    return (
        <div className='social-wrapper'>
            <HeaderContainer />
            <Sidebar />
            <div className={'social-wrapper__content'}>
                <Route exact path='/profile' render={() => <ProfileContainer/>}></Route>
                <Route exact path='/profile/:userId' render={() => <ProfileContainer/>}></Route>
                <Route path='/messages/' render={() => <MessagesContainer/>}></Route>
                <Route exact path='/news' render={() => <News/>}></Route>
                <Route exact path='/music' render={() => <Music/>}></Route>
                <Route exact path='/settings' render={() => <Settings/>}></Route>
                <Route exact path='/users' render={() => <UsersContainer/>}></Route>
                <Route exact path='/login' render={() => <Login/>}></Route>
            </div>
        </div>
    )

}

export default App;
