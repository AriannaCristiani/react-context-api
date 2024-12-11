import Card from "../../components/Card/PostCard"
import PostsContext from "../../Context/PostsContext"
import { useContext } from 'react';
import { useEffect } from 'react';


export default function postList() {

    const { posts, fetchPosts } = useContext(PostsContext)

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="row">
            {posts.map(post => (
                <div className="post_list" key={post.id}>
                    <Card post={post} />
                </div>
            ))}
        </div>
    )
}