import { useState } from 'react';

export const ExtensionBlog = () => {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: true
    });

    const handleFormChange = e => {
        const value = e.target.type === "checbox" ? e.target.checked : e.target.value;
        setFormData(formData => ({
            ...formData,
            [e.target.name]: value
        }));
    };

    return (
        <div className="container">
            <form onSubmit={e => {
                e.preventDefault();
                setFormData(formData);
                setFormData('');
            }}>


                <div>
                    <input
                        className="form-control"
                        name="author"
                        placeholder="Autore"
                        type="text"
                        value={formData.author}
                        onChange={e => handleFormChange(e.target.name)}
                    />
                    <button type="submit">Aggiungi</button>
                </div>
                <div>
                    <input
                        className="form-control"
                        name="title"
                        placeholder="Titolo"
                        type="text"
                        value={formData.title}
                        onChange={e => handleFormChange(e.target.name)}
                    />
                    <button type="submit">Aggiungi</button>
                </div>
                <div>
                    <input
                        className="form-control"
                        name="body"
                        placeholder="Corpo"
                        type="text"
                        value={formData.body}
                        onChange={e => handleFormChange(e.target.name)}
                    />
                    <button type="submit">Aggiungi</button>
                </div>
                <div>
                    <input type="checkbox"
                        className="form-control"
                        name="public"
                        placeholder="Pubblico"
                        value={formData.public}
                        onChange={e => handleFormChange(e.target.name)}
                    />
                </div>
            </form>
        </div>
    );
};