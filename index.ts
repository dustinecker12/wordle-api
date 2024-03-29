import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import wordList from './wordList';

const PORT = 8000;
const app: Application = express();
app.use(cors());

type Word = {
  secret: string;
};

app.get('/', (req: Request, res: Response) => {
  res.send('My Wordle API');
});

app.get('/secret', (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * wordList.length) + 1;
  const word = wordList[randomIndex];

  const secret: Word = {
    secret: word,
  };

  res.json(secret);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
