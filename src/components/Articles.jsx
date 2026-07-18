export const Articles = props => (
    <ul>
        {props.articles.map(article => (
            <li key={article}>{article}</li>
        ))}
    </ul>
);

