import * as SQLite from 'expo-sqlite';

const dbStatuses = SQLite.openDatabase('statuses.db');

export const initStatuses = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS statuses (idlng TEXT PRIMARY KEY, status INTEGER)',
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

export const insertStatus = (idlng, status) => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        `REPLACE INTO statuses (idlng, status) VALUES (?,?);`,
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

export const deleteZeroStatuses = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM statuses WHERE status = '0';`,
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

export const deleteAll = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM statuses;`,
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
