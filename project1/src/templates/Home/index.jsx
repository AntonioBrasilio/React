import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";

export class Home extends Component {
    state = {
        posts: [],
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    loadPosts = async () => {
        const postAndImages = await loadPosts();

        this.setState({ posts: postAndImages });
    };

    render() {
        const { posts } = this.state;
        return (
            <section className="container">
                <Posts posts={posts} />
            </section>
        );
    }
}
