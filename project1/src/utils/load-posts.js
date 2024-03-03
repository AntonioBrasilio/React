export const loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");

    const imagesResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, images] = await Promise.all([postsResponse, imagesResponse]);

    const postJson = await posts.json();
    const imageJson = await images.json();

    const postAndImages = postJson.map((post, index) => {
        return { ...post, cover: imageJson[index].url };
    });

    return postAndImages;
};
