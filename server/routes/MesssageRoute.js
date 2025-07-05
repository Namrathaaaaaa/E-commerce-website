// const express = require('express');
// const router = express.Router();
// const Message = require('../models/message.model');

// router.post('/', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
    
//     const newMessage = new Message({
//       name,
//       email,
//       message
//     });

//     await newMessage.save();
//     res.status(201).json({ message: 'Message sent successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to send message' });
//   }
// });

// module.exports = router;

//
import express from 'express';
const router = express.Router();
import Message from '../models/message.js';
import { model } from 'mongoose';

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router; 


