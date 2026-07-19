import { useState } from 'react';
import './App.css';
import { Articles } from './components/Articles';
import { NewArticle } from './components/NewArticle';
import { ExtensionBlog } from './components/ExtensionBlog';

export const App = () => {
    const [articles, setArticles] = useState([]);

    return (
        <>
            <Articles articles={articles} setArticles={setArticles} />
            <NewArticle setArticles={setArticles} />
            <ExtensionBlog ExtensionBlog />
        </>
    );
};
