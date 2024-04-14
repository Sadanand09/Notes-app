import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Note from './models/Note.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async() =>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database Connected")
}

connectDB();

const PORT = process.env.PORT || 5000;


app.get("/health", (req, res) =>{
    res.json({
        success : true,
        message: "Server is Running",
        data: null
    })
});

app.post("/notes", async (req, res) => {
    const { title, content, category } = req.body;

    const newNote = await Note.create({
        "title": title,
        "content": content,
        "category": category,
    })

    // NOTES.push(newNote);

    res.json({
        success : true,
        message : "Note Added SuccessFully",
        data : newNote
    })
})

app.get("/notes", async(req,res) =>{

    const notes = await Note.find();
    res.json({
        success: true,
        message : "Notes Fetch Successfully",
        data : notes
    })
})

app.get("/notes/:id" , async(req, res) =>{
    // const id = req.params.id;
    const {id} = req.params;

    const note = await Note.findById(id);

    res.json({
        success : true,
        messgea : "Note Fetched Successfully",
        data : note
    })

})

app.put("/notes/:id", async (req, res) => {
    const { id } = req.params;
  
    const { title, content, category } = req.body;
  
    await Note.updateOne({ _id: id }, {
      $set: {
        title: title,
        content: content,
        category: category
      }
    })
  
    res.json({
      success: true,
      message: "Note updated successfully",
      data: null
    })
  })

app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;
  
    await Note.deleteOne({ _id: id })
  
    res.json({
      success: true,
      message: "Note deleted successfully",
      data: null
    })
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
