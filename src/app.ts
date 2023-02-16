import * as trpcExpress from '@trpc/server/adapters/express'
import express from 'express'
import { notesRouter } from './routes/notes'
import { context, router } from './trpc'

const app = express()

const appRouter = router({
  note: notesRouter
})

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: context
}))

export default app
