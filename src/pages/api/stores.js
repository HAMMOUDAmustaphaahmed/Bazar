import { getSession } from 'next-auth/react';
import prisma from '../../../utils/db';

export default async function handler(req, res) {
  const session = await getSession({ req });
  
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    // Create store
    const { name, description } = req.body;
    
    try {
      const newStore = await prisma.store.create({
        data: {
          name,
          description,
          owner: { connect: { id: session.user.id } }
        }
      });
      
      return res.status(201).json(newStore);
    } catch (error) {
      console.error('Error creating store:', error);
      return res.status(500).json({ message: 'Error creating store' });
    }
  }
  
  if (req.method === 'PUT') {
    // Update store
    const { id, name, description } = req.body;
    
    try {
      const updatedStore = await prisma.store.update({
        where: { id },
        data: { name, description }
      });
      
      return res.status(200).json(updatedStore);
    } catch (error) {
      console.error('Error updating store:', error);
      return res.status(500).json({ message: 'Error updating store' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}