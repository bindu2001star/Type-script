//const express=require('express');
import express from 'express';
import todosRoute from './routes/todos';
import bodyparser from 'body-parser';
const app=express();
app.use(bodyparser.json());
app.use(todosRoute);
app.listen(3005);