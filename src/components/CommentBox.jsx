import React from 'react';

const CommentBox = () => {
  return (
    <div className="comment-box absolute hidden bg-white p-4 rounded-md shadow-md">
      <div className="flex items-start">
        <div className="flex-1">
          <textarea
            placeholder="Leave a comment..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            rows="3"
          ></textarea>
          <div className="mt-2 flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
