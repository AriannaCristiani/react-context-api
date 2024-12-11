import style from './Card.module.css'
import placeHolderSrc from '../../assets/placeholder.png'
import { BASE_API_URI } from '../../baseUrl';
import { Link } from 'react-router-dom';


export default function Card({ post = {} }) {
    //console.log('card props:', props)

    const { id, title, image, content, category } = post


    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src={image ? `${BASE_API_URI}/${image}` : placeHolderSrc} alt="" />
            </figure>
            <div className={style.body}>
                <h3 className='title_card'>{title}</h3>
                <p>{content}</p>
                <p><strong>Categoria:</strong>
                    <span className='title_card' >{category}</span>
                </p>
            </div>
            <div className={style.body}>
                <Link className='link' to={`/posts/${id}`}>Vai al post</Link>
            </div>
        </div >
    )
}