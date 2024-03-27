import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;

    useEffect(() => {
        loadPosts(postsDispatch);
    }, [postsDispatch]);

    return (
        <div>
            <h1>Posts</h1>
            {postsState.isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {postsState.posts.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};
