import SQLite, { SQLiteDatabase } from "react-native-sqlite-storage";
import { ModelInterface } from './contracts/model'

SQLite.enablePromise(true);

class Model implements ModelInterface {
  private db: SQLiteDatabase

  connect(): Promise<SQLiteDatabase> {
    return SQLite.openDatabase({
      name: "my.db",
      location: "default"
    })
  }

  async exec(query: string, params: any) {
    if (!this.db) {
      this.db = await this.connect()
    }
    return new Promise((resolve, reject) => {
      this.db.transaction((txn) => {
        txn.executeSql(query, params, (tx, res) => resolve(res), (tx, err) => reject(err))
      })
    })
  }
}

export default Model