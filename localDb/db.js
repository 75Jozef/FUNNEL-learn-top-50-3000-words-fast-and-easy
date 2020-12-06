import * as SQLite from 'expo-sqlite';

const dbStatuses = SQLite.openDatabase('statuses.db');
const dbSettings = SQLite.openDatabase('settings.db');

export const initStatuses = () => {
  const promise = new Promise((resolve, reject) => {
    dbStatuses.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS statuses (idlng TEXT PRIMARY KEY, status INTEGER);',
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
        'CREATE TABLE IF NOT EXISTS settings (set_id INTEGER, lngfrst TEXT, lngscnd TEXT, theme TEXT);',
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

export const insertSettings = (set_id, lngfrst, lngscnd, theme) => {
  const promise = new Promise((resolve, reject) => {
    dbSettings.transaction((tx) => {
      tx.executeSql(
        `REPLACE INTO settings (set_id, lngfrst, lngscnd, theme) VALUES (?,?,?,?);`,
        [set_id, lngfrst, lngscnd, theme],
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
  console.log('delete statuses');
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
        'SELECT * FROM statuses;',
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

export const loadSettings = () => {
  const promise = new Promise((resolve, reject) => {
    dbSettings.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM settings;',
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

export const deleteSettings = () => {
  console.log('delete settings');
  const promise = new Promise((resolve, reject) => {
    dbSettings.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM settings;`,
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
