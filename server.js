const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'blockchain'; // Replace with your actual database name
const collectionName = 'Users'; // Replace with your collection name where user data is stored

app.post('/login', async (req, res) => {
  const {email} = req.body;

  const client = new MongoClient(mongoURI, {useUnifiedTopology: true});

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const user = await collection.findOne({email});

    if (user) {
      // User found
      res.json({exists: true});
    } else {
      // User not found
      res.json({exists: false});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
