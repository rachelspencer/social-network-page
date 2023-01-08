import React from 'react';
import CommentShow from './comment-show';

const CommentList = ({comments}) => {
    const renderedComments = comments.map((comment) => {
        return <CommentShow key={comment.id} comment={comment} />; 
    });
    
    return <div className="comment-list">{renderedComments}</div>;
};

export default CommentList;