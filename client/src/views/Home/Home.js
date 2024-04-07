import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'

function Home() {

    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {
        const response = await axios.get('http://localhost:5000/notes');

        console.log(response.data.data);
        setNotes(response.data.data);
    }
    useEffect(() => {
        loadNotes();
    }, [])

    return (
        <div>
            <h3>Home</h3>

            {
                notes.map((note, index) => {
                    return(
                        <div>
                            <h1>{note.title} </h1>
                            <h1>{note.content} </h1>
                        </div>
                    )
                })
            }
      
    </div >
  )
}

export default Home
