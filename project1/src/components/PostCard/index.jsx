import './styles.css';

export const PostCard = ({cover, title, id, body}) => {

    return (
        <div data-testid="post-card-test-id" className="post">
            <img src={cover} alt={title} />
            <div className="post-content" id={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};
