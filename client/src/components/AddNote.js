import React, { useState } from 'react';
import axios from 'axios';

function AddNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/notes`, {
                title,
                content,
                category
            });
            console.log('Note added:', response.data);
           
            setTitle('');
            setContent('');
            setCategory('');
         
            setAlertMessage('Note added successfully!');
          
            setTimeout(() => {
                setAlertMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add Note</h2>
            {alertMessage && (
                <div className="bg-green-200 text-green-800 px-4 py-2 mb-4 rounded-md">
                    {alertMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-medium">Title :</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block font-medium">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block font-medium">User:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                >
                    Add Note
                </button>
            </form>
        </div>
    );
}

export default AddNote;
