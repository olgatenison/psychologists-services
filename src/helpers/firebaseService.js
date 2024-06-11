// firebaseService.js

import { getDatabase, ref, onValue } from "firebase/database";

export const getPsychologists = async () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const dataRef = ref(db);

    onValue(
      dataRef,
      (snapshot) => {
        const dataSnapshot = snapshot.val();
        resolve(dataSnapshot);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// Додавання фейворіту для користувача
// export const addFavorite = async (psychologistId) => {
//   const user = auth.currentUser;
//   if (user) {
//     const userId = user.uid;
//     await set(ref(db, `favorites/${userId}/${psychologistId}`), {
//       timestamp: new Date().toISOString(),
//     });
//   } else {
//     throw new Error("User not authenticated");
//   }
// };

// Видалення фейворіту для користувача
// export const removeFavorite = async (psychologistId) => {
//   const user = auth.currentUser;
//   if (user) {
//     const userId = user.uid;
//     await remove(ref(db, `favorites/${userId}/${psychologistId}`));
//   } else {
//     throw new Error("User not authenticated");
//   }
// };

// Отримання списку фейворітів для користувача
// export const getFavorites = async () => {
//   const user = auth.currentUser;
//   if (user) {
//     const userId = user.uid;
//     const favoritesRef = ref(db, `favorites/${userId}`);
//     const snapshot = await get(favoritesRef);
//     return snapshot.exists() ? snapshot.val() : {};
//   } else {
//     throw new Error("User not authenticated");
//   }
// };
