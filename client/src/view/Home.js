import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);
            setNotes(response.data.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    useEffect(() => {
        loadNotes();
    }, []);

    const handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete this note?');
            if (confirmDelete) {
                await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${id}`);
                // Remove the deleted note from the state
                setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
            }
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const logout = () =>
    {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note, index) => (
                    <div key={index} className="bg-white shadow-md rounded p-4 transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
                        <h2 className="text-xl font-bold mb-2">{note.title}</h2>
                        <p className="text-gray-700">{note.content}</p>
                        <div className="mt-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{note.category}</span>
                        </div>
                        <div className="mt-4">
                            <button onClick={() => handleDelete(note._id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mx-4 rounded inline-block">
                                Delete
                            </button>
                            <Link to={`/update/${note._id}`}>
                            <button  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block">
                                Edit
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/addnote" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block">
                Add New Note
            </Link>

            {/* <button onClick={logout} className=" border border-blue-600 my-4  rounded-sm drop-shadow-sm  flex ">
                <span className='flex justify-center align-middle ' >
                    <img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' className='h-5 my-auto mx-3  ' alt='G-logo' />
                    <h1 className='font-semibold hover:bg-blue-700 bg-blue-600 p-2 pe-5 text-gray-200'>Logout</h1>
                </span>
            </button> */}
        </div>
    );
}

export default Home;
