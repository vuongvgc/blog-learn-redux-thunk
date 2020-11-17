import React from 'react';
import { connect } from 'react-redux';
import fetchList from '../Actions';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchList();
    }
    render(){
        return(
            <div>PostList</div>
        )
    }
}
export default connect(null, {fetchList: fetchList})(PostList);