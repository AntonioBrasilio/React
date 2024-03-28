import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import { useRef } from 'react';

const useFetch = (url, options) => {
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const refOptions = useRef(options);
    const refUrl = useRef(url);

    const isObjectEqual = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    };

    useEffect(() => {
        let changed = false;
        if (!isObjectEqual(url, refUrl.current)) {
            refUrl.current = url;
            changed = true;
        }
        if (!isObjectEqual(options, refOptions.current)) {
            refOptions.current = options;
            changed = true;
        }
        if (changed) {
            setShouldUpdate((s) => !s);
        }
    }, [url, options]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(refUrl.current, refOptions.current);
                const responseJson = await response.json();
                setResult(responseJson);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                throw error;
            }
        };
        fetchData();
    }, [shouldUpdate]);

    return [result, loading];
};

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
