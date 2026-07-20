import { useState } from 'react';

export const ExtensionBlog = props => {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: true
    });

    const handleFormChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData(formData => ({
            ...formData,
            [e.target.name]: value
        }));
    };

    return (
        <div className="container">
            <form onSubmit={e => {
                e.preventDefault();
                props.setArticles([...props.articles, formData]);
                setFormData({
                    author: '',
                    title: '',
                    body: '',
                    public: true
                });
            }}>
                <div>
                    <input
                        className="form-control"
                        name="author"
                        placeholder="Autore"
                        type="text"
                        value={formData.author}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <input
                        className="form-control"
                        name="title"
                        placeholder="Titolo"
                        type="text"
                        value={formData.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <input
                        className="form-control"
                        name="body"
                        placeholder="Corpo"
                        type="text"
                        value={formData.body}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <input type="checkbox"
                        className="form-control"
                        name="public"
                        placeholder="Pubblico"
                        value={formData.public}
                        onChange={handleFormChange}
                    />
                </div>
                <button type="submit">Aggiungi</button>
            </form>
        </div>
    );
};