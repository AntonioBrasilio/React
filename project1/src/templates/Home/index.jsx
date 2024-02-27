import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
        searchValue: "",
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

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ searchValue: value });
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
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;

        const filteredPosts = !!searchValue
            ? allPosts.filter((post) =>
                  post.title.toLowerCase().includes(searchValue.toLowerCase())
              )
            : posts;

        return (
            <section className="container">
                <div className="search-container">
                    {!!searchValue && <h1>Search value: {searchValue}</h1>}
                    <TextInput
                        searchValue={searchValue}
                        handleChange={this.handleChange}
                    />
                </div>

                {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
                {filteredPosts.length === 0 && <p>Não existem posts</p>}

                <div className="button-container">
                    {!searchValue && (
                        <Button
                            onClick={this.loadMorePosts}
                            text="Load more posts"
                            disabled={noMorePosts}
                        />
                    )}
                </div>
            </section>
        );
    }
}
