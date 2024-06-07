'use server'

// import { connectToDatabase } from '../mongodb/database';
import User from '../mongodb/database/models/user.model';

// export async function createUser(){
//   try {
//     await connectToDatabase();
//     const data = JSON.parse(JSON.stringify(await User.find()));
//     console.log(data)
//     // throw new Error('Error!')

//     return { data }
//   } catch (error) {
//     return { error }
//   }
// }

export const createUser = async (userData: any) => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!res.ok) {
        const error = await res.json();
        return { error: error.error };
      }
  
      return await res.json();
    } catch (error) {
      return { error: 'An unexpected error occurred' };
    }
  };