// import React from 'react';
// import { useSelector } from 'react-redux';
// import { addToFavorites } from '../utils/api';

// const YourComponent = () => {
//   const userId = useSelector(state => state.user.id);
//   const productId = '667bd321a47f500e2823cbe1'; // Thay thế bằng productId thực tế

//   const handleAddToFavorites = () => {
//     if (userId) {
//       addToFavorites(productId, userId);
//     } else {
//       console.error('User ID is missing');
//     }
//   };

//   return (
//     <button onClick={handleAddToFavorites}>Add to Favorites</button>
//   );
// };

// export default YourComponent;

import React from 'react';
import { useSelector } from 'react-redux';
import { addToFavorites } from '../utils/api';

const YourComponent = () => {
  const userId = useSelector(state => state.user.id); // Đảm bảo userId được lấy đúng
  const productId = '667bd321a47f500e2823cbe1'; // Thay thế bằng productId thực tế

  const handleAddToFavorites = () => {
    if (userId) {
      addToFavorites(productId, userId);
    } else {
      console.error('User ID is missing');
    }
  };

  return (
    <button onClick={handleAddToFavorites}>Add to Favorites</button>
  );
};

export default YourComponent;
