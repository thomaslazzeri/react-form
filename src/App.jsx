import { useState } from 'react';
import './App.css';
import { Articles } from './components/Articles';
import { NewArticle } from './components/NewArticle';

export const App = () => {
    const [articles, setArticles] = useState([]);

    return (
        <>
            <Articles articles={articles} />
            <NewArticle setArticles={setArticles} />
        </>
    );
};
