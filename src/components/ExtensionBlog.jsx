import { useState } from 'react';

export const ExtensionBlog = props => {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: ''
    });

    const handleFormChange = e => {
        props.setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="container">
            <form>
                <div>
                    <input className="form-control"
                        name="author"
                        placeholder="Autore"
                        type="text"
                        value={formData.author}
                        onChange={handleFormChange} />

                </div>
                <div>
                    <input className="form-control"
                        name="title"
                        placeholder="Titolo"
                        type="text"
                        value={formData.title}
                        onChange={handleFormChange} />

                </div>
                <div>
                    <input className="form-control"
                        name="body"
                        placeholder="Corpo"
                        type="text"
                        value={formData.body}
                        onChange={handleFormChange} />

                </div>
                <div>
                    <input className="form-control"
                        name="public"
                        placeholder="Pubblico"
                        type="text"
                        value={formData.public}
                        onChange={handleFormChange} />

                </div>
            </form>

            <div className="card">
               <p>{author}</p> 
                <p>{title}</p>
                <p>{body}</p>
                
            </div>

        </div>
    );
};