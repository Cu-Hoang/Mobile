export const addToFavorites = async (productId, userId) => {
    try {
      const response = await fetch('http://localhost:5000/api/favorites', { // Đảm bảo URL đúng
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          userId,
        }),
      });
  
      const data = await response.json();
      console.log('Response after adding to favorite:', data);
    } catch (error) {
      console.error('Error adding to favorite:', error);
    }
  };
  