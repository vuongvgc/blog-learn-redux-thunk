import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUser } from '../Actions';
import UserHeader from '../Components/UserHeader';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostAndUser();
    }
    renderList() {
        return (
            this.props.post.map(post => {
                return(
                    <li key={post.id} className="list-group-item ">
                       <div className="row">
                            <div className="col-2">
                                <i className="fa fa-user-alt"></i>
                            </div>
                            <div className="col-10">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <UserHeader userId = {post.userId}/>
                            </div>
                       </div>
                    </li>
                )
            })
        )
    }
    render(){
        // console.log(this.props.post);
        return(
            <div className="container">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {post: state.post}
}
export default connect(mapStateToProps, {fetchPostAndUser: fetchPostAndUser})(PostList);