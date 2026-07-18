import { useState } from 'react';
import './App.css';

export const App = () => {
    const [articles, setArticles] = useState([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <ul>
                {articles.map(article => (
                    <li key={article}>{article}</li>
                ))}
            </ul>
            <form onSubmit={e => {
                e.preventDefault();
                setArticles(articles => articles.concat(inputValue));
                setInputValue('');
            }}>
                <input type="text" 
                placeholder='Titolo articolo' 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}/>
               
                <button type="submit">Aggiungi</button>
            </form>
        </>
    );
};
