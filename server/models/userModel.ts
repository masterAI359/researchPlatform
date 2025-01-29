import mongoose from 'mongoose';
const { Schema, model } = mongoose

//TODO: send user input from signup form to mongoDB

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,


});

