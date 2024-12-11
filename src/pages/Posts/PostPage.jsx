import { useContext } from 'react';
import GlobalContext from "../../Context/GlobalContext";
import PostList from "./PostList";


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



    return (
        <main>
            <section>
                <div className='container'>
                    <h1 className='main_title'>Ecco l'elenco dei Post</h1>
                </div>
                <div className="container">
                    <PostList />
                </div>
            </section>
        </main>
    )
}