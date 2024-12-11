import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_API_URI } from '../../baseUrl';
import placeHolderSrc from '../../assets/placeholder.png';

export default function Show() {
    const [posts, setPosts] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        axios.get(`${BASE_API_URI}/posts/${id}`)
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => {
                console.error(err);
                setPosts(null);
            });
    }, [id]);

    const navigate = useNavigate();


    if (!posts) {
        return
    }

    return (
        <main>
            <div className="container">
                <button className='back_btn' onClick={() => navigate(-1)}>Torna indietro</button>
                <h1 className="main_title">{posts.title}</h1>
            </div>
            <section className='show_container'>
                <figure>
                    <img
                        className="img_show"
                        src={posts.image ? `${BASE_API_URI}/${posts.image}` : placeHolderSrc}
                        alt={posts.title}
                    />
                </figure>

                <div className="container">
                    <p>{posts.content}</p>
                </div>
            </section>
        </main>
    );
}