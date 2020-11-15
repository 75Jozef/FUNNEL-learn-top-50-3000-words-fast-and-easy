import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('words.db');
//open db; if db does not exists, it creates it; if it already present, it will just connect and open if

// now we need to initialize it
// db return an database object, which is initialized = transaction object is made from database object and you can make what you need on transaction object without risk of damaging database object; transaction object is initialized here:

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((object) => {
      object.executeSql(
        'CREATE TABLE IF NOT EXISTS words (userlvl TEXT NOT NULL,iden INTEGER PRIMARY KEY NOT NULL,sten INTEGER NOT NULL, en TEXT NOT NULL,   idit INTEGER NOT NULL,    stit INTEGER NOT NULL,    it TEXT NOT NULL,    idpa INTEGER NOT NULL,    stpa INTEGER NOT NULL,    pa TEXT NOT NULL,    idjv INTEGER NOT NULL,    stjv INTEGER NOT NULL,    jv TEXT NOT NULL,    idth INTEGER NOT NULL,    stth INTEGER NOT NULL,    th TEXT NOT NULL,    idpl INTEGER NOT NULL,    stpl INTEGER NOT NULL,    pl TEXT NOT NULL,    idfa INTEGER NOT NULL,    stfa INTEGER NOT NULL,    fa TEXT NOT NULL,    idur INTEGER NOT NULL,    stur INTEGER NOT NULL,    ur TEXT NOT NULL,    iduk INTEGER NOT NULL,    stuk INTEGER NOT NULL,    uk TEXT NOT NULL,    idro INTEGER NOT NULL,    stro INTEGER NOT NULL,    ro TEXT NOT NULL,    idnl INTEGER NOT NULL,    stnl INTEGER NOT NULL,    nl TEXT NOT NULL,    idsr INTEGER NOT NULL,    stsr INTEGER NOT NULL,    sr TEXT NOT NULL,    idhr INTEGER NOT NULL,    sthr INTEGER NOT NULL,    hr TEXT NOT NULL,    idhu INTEGER NOT NULL,    sthu INTEGER NOT NULL,    hu TEXT NOT NULL,    idel INTEGER NOT NULL,    stel INTEGER NOT NULL,    el TEXT NOT NULL,    idcs INTEGER NOT NULL,    stcs INTEGER NOT NULL,    cs TEXT NOT NULL,    idsv INTEGER NOT NULL,    stsv INTEGER NOT NULL,    sv TEXT NOT NULL,    idbe INTEGER NOT NULL,    stbe INTEGER NOT NULL,    be TEXT NOT NULL,    idfi INTEGER NOT NULL,    stfi INTEGER NOT NULL,    fi TEXT NOT NULL,    idda INTEGER NOT NULL,    stda INTEGER NOT NULL,    da TEXT NOT NULL,    idcn INTEGER NOT NULL,    stcn INTEGER NOT NULL,    cn TEXT NOT NULL,    ides INTEGER NOT NULL,    stes INTEGER NOT NULL,    es TEXT NOT NULL,    idar INTEGER NOT NULL,    star INTEGER NOT NULL,    ar TEXT NOT NULL,    idpt INTEGER NOT NULL,    stpt INTEGER NOT NULL,    pt TEXT NOT NULL,    idid INTEGER NOT NULL,    stid INTEGER NOT NULL,    id TEXT NOT NULL,    idms INTEGER NOT NULL,    stms INTEGER NOT NULL,    ms TEXT NOT NULL,    idfr INTEGER NOT NULL,    stfr INTEGER NOT NULL,    fr TEXT NOT NULL,    idru INTEGER NOT NULL,    stru INTEGER NOT NULL,    ru TEXT NOT NULL,    idde INTEGER NOT NULL,    stde INTEGER NOT NULL,    de TEXT NOT NULL,    idja INTEGER NOT NULL,    stja INTEGER NOT NULL,    ja TEXT NOT NULL,    idhi INTEGER NOT NULL,    sthi INTEGER NOT NULL,    hi TEXT NOT NULL,    idbn INTEGER NOT NULL,    stbn INTEGER NOT NULL,    bn TEXT NOT NULL,    idtr INTEGER NOT NULL,    sttr INTEGER NOT NULL,    tr TEXT NOT NULL,    idmr INTEGER NOT NULL,    stmr INTEGER NOT NULL,    mr TEXT NOT NULL,    idko INTEGER NOT NULL,    stko INTEGER NOT NULL,    ko TEXT NOT NULL,    idvi INTEGER NOT NULL,    stvi INTEGER NOT NULL,    vi TEXT NOT NULL,    idta INTEGER NOT NULL,    stta INTEGER NOT NULL,    ta TEXT NOT NULL,    idsk INTEGER NOT NULL,    stsk INTEGER NOT NULL,    sk TEXT NOT NULL,    idaf INTEGER NOT NULL,    staf INTEGER NOT NULL,    af TEXT NOT NULL,    idlv INTEGER NOT NULL,    stlv INTEGER NOT NULL,    lv TEXT NOT NULL,    ideo INTEGER NOT NULL,    steo INTEGER NOT NULL,    eo TEXT NOT NULL,    idet INTEGER NOT NULL,    stet INTEGER NOT NULL,    et TEXT NOT NULL,    idbg INTEGER NOT NULL,    stbg INTEGER NOT NULL,    bg TEXT NOT NULL);',
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

// there are methods to use with transaction object, here you can see it when initialising transaction object;
