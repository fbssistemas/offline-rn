import Model from "../database/sqlite";

type SellerModel = {
  group_id: number
  code: number
  company: string
  name: string
  uid: string
  cpf_cnpj: string
  rg_ie: string
  active: boolean
}

class Seller extends Model {
  dropTable() {
    const query: string = `DROP TABLE IF EXISTS sellers`
    return this.exec(query, [])
  }

  createTable() {
    const query: string = `CREATE TABLE IF NOT EXISTS sellers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER NOT NULL,
      code INTEGER,
      company varchar(100) NOT NULL,
      name varchar(100) NOT NULL,
      uid varchar(255) NOT NULL,
      cpf_cnpj varchar(14) NOT NULL,
      rg_ie varchar(20),
      active tinyint(1),
      created_at timestamp,
      updated_at timestamp
    )`
    return this.exec(query, [])
  }

  insert(params: SellerModel) {
    const query: string = `INSERT INTO sellers (
      group_id, code, company, name, uid, cpf_cnpj, rg_ie, active, created_at, updated_at
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, strftime('%Y-%m-%d %H:%M:%S','now'), strftime('%Y-%m-%d %H:%M:%S','now')
    )`
    let arr = [];
    Object.keys(params).map((key) => {
      arr.push(params[key])
    })
    return this.exec(query, arr)
  }

  update(params: SellerModel, id: string) {
    const query: string = `UPDATE sellers SET group_id=?, code=?, company=?, name=?, uid=?, cpf_cnpj=?, rg_ie=?, active=?, updated_at=strftime('%Y-%m-%d %H:%M:%S','now') WHERE id=?`
    let arr = [];
    Object.keys(params).map((key) => {
      arr.push(params[key])
    })
    arr.push(id)
    console.log(arr)
    return this.exec(query, arr)
  }

  destroy(id: string) {
    const query: string = `DELETE FROM sellers WHERE id = ?`
    let arr = []
    arr.push(id)
    return this.exec(query, arr)
  }

  all() {
    const query: string = `SELECT * FROM sellers`
    return this.exec(query, [])
  }
}

export default new Seller()