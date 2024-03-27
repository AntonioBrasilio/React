import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { decremmentCounter, incrementCounter } from '../../contexts/CounterProvider/actions';

export const Posts = () => {
    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;

    const counterContext = useContext(CounterContext);
    const {
        counterState: { counter },
        counterDispatch,
    } = counterContext;

    useEffect(() => {
        loadPosts(postsDispatch);
    }, [postsDispatch]);

    return (
        <div>
            <button onClick={() => incrementCounter(counterDispatch, 5)}>Counter: {counter}</button>
            <button onClick={() => decremmentCounter(counterDispatch, 5)}>Counter: {counter}</button>
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
