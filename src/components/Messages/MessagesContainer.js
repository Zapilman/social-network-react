import Messages from "./Messages";

import {connect} from "react-redux";
import withRedirectHoc from "../../hoc/withRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
    }
};

export default compose(
    withRedirectHoc,
    connect(mapStateToProps,
        {})
)(Messages)