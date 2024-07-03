import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const addToFavorite = async (productId) => {
  const { user } = useContext(UserContext);

  if (!user || !user.id) {
    console.error("User ID is missing");
    return;
  }

  const requestBody = {
    productId: productId,
    userId: user.id,
  };

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log("Response after adding to favorite: ", data);
  } catch (error) {
    console.error("Error adding to favorite: ", error);
  }
};

export default addToFavorite;
