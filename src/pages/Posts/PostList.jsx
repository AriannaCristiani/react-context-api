import { useContext, useEffect } from "react";
import Card from "../../components/Card/PostCard";
import PostsContext from "../../Context/PostsContext";

export default function PostList({ selectedCategory }) {

    const { posts, fetchPosts } = useContext(PostsContext);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const filteredPosts = selectedCategory
        ? posts.filter((post) => post.category === selectedCategory)
        : posts;

    return (
        <div className="row">
            {filteredPosts.map((post) => (
                <div className="post_list" key={post.id}>
                    <Card post={post} />
                </div>
            ))}
        </div>
    );
}