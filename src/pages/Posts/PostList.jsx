import Card from "../../components/Card/Card"
import GlobalContext from "../../Context/GlobalContext"
import { useContext } from 'react';
import { useEffect } from 'react';


export default function postList() {

    const { posts, fetchPosts } = useContext(GlobalContext)

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