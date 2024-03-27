import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

function App() {
    return (
        <PostsProvider>
            <Posts />
        </PostsProvider>
    );
}

export default App;
