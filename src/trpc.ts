import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export const context = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({})

const t = initTRPC.context().create()

export const router = t.router
export const middleware = t.middleware
export const procedure = t.procedure
