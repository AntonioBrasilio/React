import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    loadMorePosts = () => {
        const { page, postsPerPage, allPosts, posts } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

        posts.push(...nextPosts);
        this.setState({ posts, page: nextPage });
    };

    loadPosts = async () => {
        const { page, postsPerPage } = this.state;

        const postAndImages = await loadPosts();

        this.setState({
            posts: postAndImages.slice(page, postsPerPage),
            allPosts: postAndImages,
        });
    };

    render() {
        const { posts, page, postsPerPage, allPosts } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;
        return (
            <section className="container">
                <Posts posts={posts} />
                <div class="button-container">
                    <Button
                        onClick={this.loadMorePosts}
                        text="Load more posts"
                        disabled={noMorePosts}
                    />
                </div>
            </section>
        );
    }
}
