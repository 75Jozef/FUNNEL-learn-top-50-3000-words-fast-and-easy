import * as SQLite from 'expo-sqlite';

// lets create reference to my db into const, then open it and give it a name 'products'
const dbStatuses = SQLite.openDatabase('statuses.db');
const dbSettings = SQLite.openDatabase('settings.db');

// now initialize db = prepare some records = rows for data, table
// transaction is a function that wrapes my queries and if anything goes wrong, it roll back 'transaction' to save my data structure

export const initStatuses = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS statuses (idlng TEXT PRIMARY KEY NOT NULL, status INTEGER NOT NULL)',
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

export const initSettings = () => {
  const promise = new Promise((resolve, reject) => {
    dbSettings.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS settings (parameter TEXT PRIMARY KEY NOT NULL, setting TEXT NOT NULL)',
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

// executeSql takes table in (); then parameter [] which shall be an array of arguments to be stored/get from db; then two parameters 3rd and 4th; 3rd is 'success function' if query operation succeeded and the fourth is error funcion if it failed;

// we put transaction into promise and then if we call it from entire application, if it is OK it will return resolved data and if not, it will execure error function; all by the use of newPromise that we put all into it

// to prepare all I open my db as soon as app starts, so in app.js like this:

// import { init } from './.../db';
// init()
//   .then(() => {
//     console.log('initialized db OK');
//   })
//   .catch((err) => {
//     console.log('failed to open db');
//     console.log(err);
//   });

export const insertStatus = (idlng, status) => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO statuses (idlng, status) VALUES (?,?);`,
        [idlng, status],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const deleteStatuses = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM statuses where status = 0;`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const loadStatuses = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM statuses',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertSetting = (idlng, status) => {
  const promise = new Promise((resolve, reject) => {
    dbSettings.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO settings (parameter, setting) VALUES (?, ?);`,
        [parameter, setting],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const loadSettings = () => {
  const promise = new Promise((resolve, reject) => {
    dbSettings.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM settings',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
