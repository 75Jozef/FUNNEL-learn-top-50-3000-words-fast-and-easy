import * as SQLite from 'expo-sqlite';

const userDb = SQLite.openDatabase('userWords.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    userDb.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS userWords (userId TEXT PRIMARY KEY NOT NULL, wordId INT NOT NULL, word TEXT NOT NULL, description TEXT NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

// export const insertProduct = (
//   id,
//   ownerId,
//   title,
//   imageUrl,
//   description,
//   price
// ) => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         `INSERT INTO products (id, ownerId, title, imageUrl, description, price) VALUES (?, ?, ?, ?, ?, ?);`,
//         [id, ownerId, title, imageUrl, description, price],
//         (_, result) => {
//           resolve(result);
//         },
//         (_, err) => {
//           reject(err);
//         }
//       );
//     });
//   });
//   return promise;
// };

// export const loadProducts = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'SELECT * FROM products',
//         [],
//         (_, result) => {
//           resolve(result);
//         },
//         (_, err) => {
//           reject(err);
//         }
//       );
//     });
//   });
//   return promise;
// };
