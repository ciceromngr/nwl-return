import 'dotenv/config';
import nodemailer from 'nodemailer';
import mailConfig from './config/mailConfig';
export const mailTransport = nodemailer.createTransport(mailConfig);