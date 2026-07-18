import { useState } from 'react';
import './App.css';
import { Articles } from './components/Articles';
import { NewArticle } from './components/NewArticle';

export const App = () => {
    const [articles, setArticles] = useState([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Articles articles={articles} />
            <NewArticle
                setArticles={setArticles}
                inputValue={inputValue}
                setInputValue={setInputValue} />
        </>
    );
};
