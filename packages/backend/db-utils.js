const DB = 'relation_data'
const COLL_NAME = 'relation_sentence'

const MongoClient = require('mongodb').MongoClient
const MONGO_URL = 'mongodb://10.214.224.142:20000'

async function connect() {
  return new Promise((resolve, reject) => {
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

async function lockItems(db, idList) {
  for (const id of idList) {
    await db
      .db(DB)
      .collection(COLL_NAME)
      .update(
        { id },
        {
          $set: {
            is_visited: 1,
          },
        },
      )
  }
}

async function unlockItems(db, idList) {
  for (const id of idList) {
    await db
      .db(DB)
      .collection(COLL_NAME)
      .update(
        { id },
        {
          $set: {
            is_visited: 0,
          },
        },
      )
  }
}

async function updateItems(db, items) {
  for (const item of items) {
    await db
      .db(DB)
      .collection(COLL_NAME)
      .update(
        { id: item.itemId },
        {
          $set: {
            entityOne: item.entityOne,
            entityTwo: item.entityTwo,
            relations: item.relations,
            label: item.label,
            is_visited: 0,
          },
        },
      )
  }
}

async function getFreeItems(db, offset, limit) {
  const items = await db
    .db(DB)
    .collection(COLL_NAME)
    .find({ label: 0, is_visited: 0 }, { _id: false })
    .sort({ id: 1 })
    .skip(offset)
    .limit(limit)
    .toArray()
  return items
}

async function clearLocks(db) {
  await db
    .db(DB)
    .collection(COLL_NAME)
    .updateMany(
      { is_visited: 1 },
      {
        $set: { is_visited: 0 },
      },
    )
}

module.exports = {
  lockItems,
  unlockItems,
  updateItems,
  getFreeItems,
  connect,
  clearLocks,
}
