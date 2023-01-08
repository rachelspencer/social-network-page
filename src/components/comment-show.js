import React from 'react';
import { useSelector } from 'react-redux';

const CommentShow = ({comment}) => {
    const author = useSelector(state => state.users[comment.userId]);
        if (!author) {
            return null;
        };

    return (
        <div className="comment">
            <div>{author.name}</div>
            <div>{comment.content}</div>
        </div>
    );
};

export default CommentShow;