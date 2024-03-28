import { useState } from 'react';
import './styles.css';
import { useFetch } from '../hooks/use-fetch';

function App() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const [postId, setPostId] = useState('');
    const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, options);

    const handleClick = (id) => {
        setPostId(id);
    };

    if (!loading && result) {
        return (
            <div>
                {result?.length > 0 ? (
                    result.map((p) => (
                        <div
                            key={`post-${p.id}`}
                            onClick={() => handleClick(p.id)}
                        >
                            <p>{p.title}</p>
                        </div>
                    ))
                ) : (
                    <div onClick={() => handleClick('')}>
                        <p>{result?.title}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
