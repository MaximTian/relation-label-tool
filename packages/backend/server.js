const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const route = require('koa-route')
const DB = require('./DB')

const app = new Koa()
app.keys = ['some secret keys']
app.use(session(app))
app.use(bodyParser())
app.use(koaStatic(path.resolve(__dirname, './public')))

async function main() {
  const { port, coll } = require('minimist')(process.argv.slice(2))
  const db = new DB(coll)
  await db.connect()

  app.use(
    route.get('/get-data', async ctx => {
      const offset = Number(ctx.query.offset)
      const limit = Number(ctx.query.limit)
      ctx.body = await db.getFreeItems(offset, limit)
    }),
  )

  app.use(
    route.get('/get-data-count', async ctx => {
      ctx.body = await db.getItemsCount()
    }),
  )

  app.use(
    route.post('/save-data', async ctx => {
      const data_list = ctx.request.body
      await db.updateItems(data_list)
      ctx.status = 200
    }),
  )
  app.listen(port)
  console.log(`Server starts listening ${port} using ${coll}`)
}

main()
