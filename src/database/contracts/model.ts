import { SQLiteDatabase } from "react-native-sqlite-storage";

export interface ModelInterface {
  connect: () => Promise<SQLiteDatabase>
  exec: (query: string, params: null | []) => Promise<any>
}