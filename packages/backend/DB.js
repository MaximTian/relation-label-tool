const MongoClient = require('mongodb').MongoClient
const MONGO_URL = 'mongodb://10.214.224.142:20000'
const DB_NAME = 'relation_data'

module.exports = class DB {
  constructor(collName) {
    this.collName = collName
    this.db = null
  }

  async connect() {
    this.db = await new Promise((resolve, reject) => {
      MongoClient.connect(
        MONGO_URL,
        function(err, db) {
          if (err) {
            reject(err)
          }
          resolve(db)
        },
      )
    })
  }

  async updateItems(items) {
    for (const item of items) {
      await this.db
        .db(DB_NAME)
        .collection(this.collName)
        .updateOne(
          { id: item.id },
          {
            $set: {
              abandoned: item.abandoned,
              pairs: item.pairs,
              author: item.author,
            },
          },
        )
    }
  }

  async getFreeItems(offset, limit) {
    return await this.db
      .db(DB_NAME)
      .collection(this.collName)
      .find({}, { _id: false })
      .sort({ id: 1 })
      .skip(offset)
      .limit(limit)
      .toArray()
  }

  async getItemsCount() {
    return await this.db
      .db(DB_NAME)
      .collection(this.collName)
      .count()
  }
}
