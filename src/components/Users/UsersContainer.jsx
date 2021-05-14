import {connect} from "react-redux";
import {getUsers, follow, unfollow} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";


class UserAjaxComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    OnPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users countPage={this.props.countPage}
                      OnPageChanged={this.OnPageChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      isLoading={this.props.isLoading}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      usersFollowProcess={this.props.usersFollowProcess}/>
    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countPage: state.usersPage.countPage(),
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        usersFollowProcess: state.usersPage.usersFollowProcess
    }
};

const UsersContainer = connect(mapStateToProps, {getUsers, follow, unfollow})(UserAjaxComponent);

export default UsersContainer;