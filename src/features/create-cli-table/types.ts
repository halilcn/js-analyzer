export interface IDefaultCreateTable {
  head?: string[]
  [key: string]: any
}

export interface ICreateMultipleRowsCountTable extends IDefaultCreateTable {
  rows: any[]
}

export interface ICreateLineCountTable extends Omit<IDefaultCreateTable, 'head'> {
  head: string[]
}

export interface ICreateTableTitle extends IDefaultCreateTable {
  title: string
}
