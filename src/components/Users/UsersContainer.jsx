import {connect} from "react-redux";
import {setUsers, toggleFollow, setNewPage, setTotalUsers, setLoadingIcon} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UserAjaxComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setLoadingIcon(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });
    }

    OnPageChanged = (pageNumber) => {
        this.props.setNewPage(pageNumber);
        this.props.setLoadingIcon(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setLoadingIcon(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users countPage={this.props.countPage}
                      OnPageChanged={this.OnPageChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      toggleFollow={this.props.toggleFollow} isLoading={this.props.isLoading}/>
    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countPage: state.usersPage.countPage(),
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading
    }
};

const UsersContainer = connect(mapStateToProps, {
    toggleFollow, setUsers,
    setNewPage, setTotalUsers, setLoadingIcon
})(UserAjaxComponent);

export default UsersContainer