import "./App.css";
import { Component } from "react";

class App extends Component {
    state = {
        counter: 0,
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

    timeoutUpdate = null;

    handleTimeout = () => {
        let { posts, counter } = this.state;
        counter++;
        posts[0].title = "Title 1 Updated";
        this.timeoutUpdate = setTimeout(() => {
            this.setState({ posts, counter });
        }, 1000);
    };

    componentDidMount() {
        this.handleTimeout();
    }

    componentDidUpdate() {
        this.handleTimeout();
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutUpdate);
    }

    render() {
        const { posts, counter } = this.state;
        return (
            <div className="App">
                <h1>{counter}</h1>
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
