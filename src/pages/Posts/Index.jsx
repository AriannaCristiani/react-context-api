import Card from "../../components/Card/Card"
import { useEffect } from 'react';
import { useContext } from 'react';
import GlobalContext from "../../Context/GlobalContext";


export default function Index() {

    const { posts, fetchPosts } = useContext(GlobalContext)

    // const [posts, setPosts] = useState([])

    // function fetchPosts() {

    //     axios.get(`${BASE_API_URI}/posts`)
    //         .then(res => {
    //             setPosts(res.data.filteredPosts)
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <main>
            <section>
                <div className='container'>
                    <h1 className='main_title'>Ecco l'elenco dei Post</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {posts.map(post => (
                            <div className="post_list" key={post.id}>
                                <Card post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}