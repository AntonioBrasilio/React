export const PostCard = ({cover, title, id, body}) => {

    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content" id={id}>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};
