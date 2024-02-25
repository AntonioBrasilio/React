import "./App.css";
import { Component } from "react";

class App extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: "Title 1",
                body: "Body 1",
            },
            {
                id: 2,
                title: "Title 2",
                body: "Body 2",
            },
            {
                id: 3,
                title: "Title 3",
                body: "Body 3",
            },
        ],
    };

    render() {
        const { posts } = this.state;
        return (
            <div className="App">
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
