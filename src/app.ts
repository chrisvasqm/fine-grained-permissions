import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());

app.use('/', (_, res) => {
    res.send('Welcome to the Fine-Grained Permissions Demo API');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));