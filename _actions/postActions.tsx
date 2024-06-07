export const createUser = async (user: {
  authId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}) => {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.error || 'Failed to create user' };
    }

    const data = await response.json();
    return { user: data.user };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: 'An unexpected error occurred' };
  }
};
