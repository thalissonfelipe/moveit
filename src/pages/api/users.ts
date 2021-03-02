import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db } from 'mongodb';
import { URL } from 'url';

let cachedDb: Db = null

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  const db = await client.db(new URL(uri).pathname.substr(1));
  cachedDb = db;

  return db;
}

interface UserBody {
  name: string;
  email: string;
  avatarUrl: string;
  level: number;
  challengesCompleted: number;
  experience: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection('users');

    if (req.method === 'POST') {
      const userBody = req.body as UserBody;

      await collection.updateOne(
          { email: userBody.email }, { $set: userBody }, { upsert: true}
      );

      return res.status(204);
    } else if (req.method === 'GET') {
      const users = await collection.find({}).sort({ experience: -1 }).toArray();

      return res.status(200).json({ users });
    }
  } catch (error) {
      console.log(error);
      return res.status(500).send('Internal Error.');
  }
}
