import { useState } from 'react';

export const NewArticle = props => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();
                props.setArticles(articles => articles.concat(inputValue));
                setInputValue('');
            }}>
                <input type="text"
                    placeholder='Titolo articolo'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)} />

                <button type="submit">Aggiungi</button>
            </form>
        </>
    );
};