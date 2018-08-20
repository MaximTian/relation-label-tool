const fs = require('fs')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const route = require('koa-route')
const dbUtils = require('./db-utils')

const app = new Koa()
app.keys = ['some secret hurr']
app.use(session(app))
app.use(bodyParser())

let user_list = {}
let user_data = {}
let user_visit_time = {}

async function main() {
  const db = await dbUtils.connect()
  await dbUtils.clearLocks(db)

  app.use(
    route.get('/', ctx => {
      ctx.body = fs.readFileSync('./public/index.html', 'utf-8')
    }),
  )
  app.use(
    route.get('/public/index.css', ctx => {
      ctx.body = fs.readFileSync('./public/index.css', 'utf8')
      ctx.set('Content-Type', 'text/css')
    }),
  )
  app.use(
    route.get('/public/index.js', ctx => {
      ctx.body = fs.readFileSync('./public/index.js', 'utf8')
    }),
  )

  app.use(
    route.get('/get-data', async ctx => {
      const offset = Number(ctx.query.offset)
      const limit = Number(ctx.query.limit)
      const username = String(ctx.query.usedname)
      if (!(username in user_list)) {
        user_list[username] = username
      }
      const items = await dbUtils.getFreeItems(db, offset, limit)
      const idList = items.map(item => item.id)
      await dbUtils.lockItems(db, idList)

      user_data[username] = idList
      ctx.body = items
    }),
  )

  app.use(
    route.post('/save-data', async ctx => {
      const data_list = ctx.request.body
      dbUtils.updateItems(db, data_list)
      ctx.status = 200
    }),
  )

  app.use(
    route.get('/heart-beat', ctx => {
      const username = ctx.query.username
      const visit_time = new Date()
      user_visit_time[username] = visit_time.getTime()
      console.log(user_visit_time)
      ctx.status = 200
    }),
  )

  setInterval(async function() {
    const current_time = new Date().getTime()
    let removing_user = []
    for (const user of Object.keys(user_list)) {
      if (current_time - user_visit_time[user] > 5000) {
        removing_user.push(user)
      }
    }
    for (const user of removing_user) {
      delete user_visit_time[user]
      delete user_list[user]
      await dbUtils.unlockItems(db, user_data[user])
      delete user_data[user]
    }

    console.log('data', user_data)
    console.log('user', user_list)
    console.log('time', user_visit_time)
  }, 3000)

  app.listen(3000, '0.0.0.0')
}

main()
