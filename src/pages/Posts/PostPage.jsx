import PostList from "./PostList";
import PostsContext from "../../Context/PostsContext";
import { useContext, useState } from "react";

export default function Index() {

    const { posts } = useContext(PostsContext);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const handleCategoryClick = (category) => setSelectedCategory(category);

    return (
        <main>
            <section>
                <div className="category">
                    {[...new Set(posts.map((post) => post.category))].map(
                        (category, index) => (
                            <div className="post_list" key={index}>
                                <button
                                    onClick={() => handleCategoryClick(category)}
                                    className="category-button"
                                >
                                    {category}
                                </button>
                            </div>
                        )
                    )}
                </div>
                <div className="container">
                    <h1 className="main_title">Ecco l'elenco dei Post</h1>
                </div>
                <div className="container">
                    <PostList selectedCategory={selectedCategory} />
                </div>
            </section>
        </main>
    );
}