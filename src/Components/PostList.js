import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }
    render(){
        return(
            <div>PostList</div>
        )
    }
}
export default connect(null, {fetchPost: fetchPost})(PostList);