import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
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
export default connect(mapStateToProps, {fetchPost: fetchPost})(PostList);