export const NewArticle = props => (
    <form onSubmit={e => {
        e.preventDefault();
        props.setArticles(articles => articles.concat(props.inputValue));
        props.setInputValue('');
    }}>
        <input type="text"
            placeholder='Titolo articolo'
            value={props.inputValue}
            onChange={e => props.setInputValue(e.target.value)} />

        <button type="submit">Aggiungi</button>
    </form>
);