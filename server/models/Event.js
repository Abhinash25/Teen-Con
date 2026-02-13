
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, default: 0 },
  capacity: { type: Number, required: true },
  registeredCount: { type: Number, default: 0 },
  image: { type: String }, // URL to cloudinary/S3
  status: { type: String, enum: ['upcoming', 'ongoing', 'past'], default: 'upcoming' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
