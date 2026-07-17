import { useState } from 'react'
import './App.css'



export const App = () => {
    const [articles, setArticles] = useState([]);

    retun(
        <>
            <ul>
                {articles.map(article => (
                    <li key={article}>{article}</li>
                ))}
            </ul>
        </>
    )
};
