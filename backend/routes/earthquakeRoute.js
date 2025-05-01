import earthquakeController from '../controllers/earthquakeController.js';
import express from 'express';
    
const router = express.Router();

router.get("/earthquake", earthquakeController.getEarthquakeData);

export default router;