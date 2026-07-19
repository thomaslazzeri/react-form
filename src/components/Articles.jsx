export const Articles = props => {
    const deleteArticle = articleToRemove => {
        props.setArticles(currentArticles =>
            currentArticles.filter(article => article !== articleToRemove)
        );
    };

    const clearList = () => {
        props.setArticles([]);
    };

    return (
        <>
            <ul>
                {props.articles.map(article => (
                    <li key={article}>
                        {article}
                        <button
                            onClick={() => deleteArticle(article)}
                        >
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>

            {props.articles.length > 0 && (
                <button onClick={clearList}>
                    Svuota lista articoli
                </button>
            )}
        </>
    );
};