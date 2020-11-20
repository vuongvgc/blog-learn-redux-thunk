import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../Actions';
class UserHeader extends React.Component {
    componentDidMount() {
        // console.log(this.props.userId)
        this.props.fetchUser(this.props.userId);
    }
    render(){
        // console.log(this.props.users)
        // const user = this.props.users.find((user) => user.id === this.props.userId);
        const { user } = this.props;
        if(!user){
            return null
        }
        return(
            <div className="alert alert-primary" role="alert">
                <h3>{user.name}</h3>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.userId);
    return {user: state.users.find(user => user.id === ownProps.userId)}
}
export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);
// https://react-redux.js.org/using-react-redux/connect-mapstate