import "./App.css";
import { Component } from "react";

class App extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const postsResponse = fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const imagesResponse = fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );

        const [posts, images] = await Promise.all([
            postsResponse,
            imagesResponse,
        ]);

        const postJson = await posts.json();
        const imageJson = await images.json();

        const postAndImages = postJson.map((post, index) => {
            return { ...post, cover: imageJson[index].url, title: imageJson[index].title};
        });

        this.setState({ posts: postAndImages });
    };

    render() {
        const { posts } = this.state;
        return (
            <section className="container">
                <div className="posts">
                    {posts.map((post) => (
                        <div className="post">
                            <img src={post.cover} alt={post.title} />
                            <div
                                className="post-content"
                                id={post.id}
                                key={post.id}
                            >
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default App;
