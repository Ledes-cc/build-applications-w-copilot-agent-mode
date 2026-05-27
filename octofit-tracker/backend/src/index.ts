import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', port: PORT });
});

app.listen(PORT, async () => {
  console.log(`OctoFit Tracker backend listening on port ${PORT}`);

  try {
    await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB at ${mongoUri}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
});
