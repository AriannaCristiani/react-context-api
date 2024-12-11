import PostList from "./PostList";


export default function Index() {

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