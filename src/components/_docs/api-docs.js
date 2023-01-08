import './api-docs.css';
import { useState, useEffect, useRef } from 'react';

export const ApiDocs = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const cb = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.body.addEventListener('click', cb);
    return () => {
      document.body.removeEventListener('click', cb);
    };
  }, [visible]);

  const docs = (
    <div className="api-docs-container">
      <button onClick={() => setVisible(!visible)}>X</button>
      <h1>Api Docs</h1>
      <p>
        This social app fetches data from an outside API. Below is some
        documentation on how the API works.
      </p>

      <h5>Comments</h5>

      <p>Comments are objects with the following structure:</p>
      <pre>
        &#123; id: number, userId: number, postId: number, content: string
        &#125;
      </pre>

      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/posts/&#123;postId&#125;/comments</td>
            <td>GET</td>
            <td>Fetches all comments related to the given post</td>
          </tr>
          <tr>
            <td>/posts/&#123;postId&#125;/comments</td>
            <td>POST</td>
            <td>
              Creates a comment attached to the given post. You must supply a
              'userId', 'postId', and 'content'
            </td>
          </tr>
          <tr>
            <td>/posts/&#123;postId&#125;/comments/&#123;commentId&#125;</td>
            <td>PUT</td>
            <td>
              Updates a comment. You must supply a 'content' and/or 'imageUrl'
              property.
            </td>
          </tr>
          <tr>
            <td>/posts/&#123;postId&#125;/comments/&#123;commentId&#125;</td>
            <td>DELETE</td>
            <td>Deletes a comment</td>
          </tr>
        </tbody>
      </table>

      <h5>Posts</h5>

      <p>Posts are objects with the following structure:</p>
      <pre>
        &#123; id: number, userId: number, content: string, imageUrl: string,
        comments: Comment[], user: User &#125;
      </pre>

      <div>
        Note: the query string <pre>?_embed=comments</pre> can be added onto any
        route to include comments related to this post.
      </div>

      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/posts</td>
            <td>GET</td>
            <td>Fetches a list of all posts</td>
          </tr>
          <tr>
            <td>/posts/&#123;id&#125;</td>
            <td>GET</td>
            <td>Fetches a post with a given ID</td>
          </tr>
          <tr>
            <td>/posts</td>
            <td>POST</td>
            <td>
              Creates a post. You must supply a 'userId', 'content', and
              'imageUrl'
            </td>
          </tr>
          <tr>
            <td>/posts/&#123;id&#125;</td>
            <td>PUT</td>
            <td>
              Updates a post. You must supply a 'content' and/or 'imageUrl'
              property.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="api-docs" ref={ref}>
      <div className="floating">
        <button onClick={() => setVisible(!visible)}>Show API Docs</button>
      </div>

      {visible && docs}
    </div>
  );
};
