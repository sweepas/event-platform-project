import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongodb/database/database';
import User from '@/lib/mongodb/database/models/user.model';

type Data = {
  message?: string;
  error?: string;
  user?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { authId, email, username, firstName, lastName, password } = req.body;

    try {
      await connectToDatabase();
      const newUser = new User({ authId, email, username, firstName, lastName, password });
      await newUser.save();

      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

