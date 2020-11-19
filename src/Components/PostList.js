import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }
    render(){
        console.log(this.props.post)
        return(
            <div>PostList</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {post: state.post}
}
export default connect(mapStateToProps, {fetchPost: fetchPost})(PostList);