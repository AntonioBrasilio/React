import { useEffect, useState, useCallback } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(10);
    const [searchValue, setSearchValue] = useState("");

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
        ? allPosts.filter((post) =>
              post.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        : posts;

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

        posts.push(...nextPosts);
        setPosts(posts);
        setPage(nextPage);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postAndImages = await loadPosts();

        setPosts(postAndImages.slice(page, postsPerPage));
        setAllPosts(postAndImages);
    }, []);

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);
    
    return (
        <section className="container">
            <div className="search-container">
                {!!searchValue && <h1>Search value: {searchValue}</h1>}
                <TextInput
                    searchValue={searchValue}
                    handleChange={handleChange}
                />
            </div>

            {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
            {filteredPosts.length === 0 && <p>Não existem posts</p>}

            <div className="button-container">
                {!searchValue && (
                    <Button
                        onClick={loadMorePosts}
                        text="Load more posts"
                        disabled={noMorePosts}
                    />
                )}
            </div>
        </section>
    );
};
