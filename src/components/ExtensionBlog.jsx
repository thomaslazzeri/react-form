import { useState } from 'react';

export const ExtensionBlog = () => {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: ''
    });

    const handleFormChange = e => {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    }

    return (
        < form >
            <div className="container">
                <div>
                    <input className="form-control"
                        name="author"
                        placeholder="autore"
                        type="text"
                    />
                </div>
                <div
                >
                    <input className="form-control"
                        name="title"
                        placeholder="titolo"
                        type="text"
                    />
                </div>
                <div>
                    <input className="form-control"
                        name="body"
                        placeholder="corpo"
                        type="text"
                    />
                </div>
                <div>
                    <input className="form-control"
                        name="public"
                        placeholder="pubblico"
                        type="text"
                    />
                </div>
            </div>
        </form >
    );
};