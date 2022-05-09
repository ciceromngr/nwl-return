import cors from 'cors';
import express from 'express';
import { feedbackRouter } from './routers/feedbacks.routes';
export const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(feedbackRouter)
