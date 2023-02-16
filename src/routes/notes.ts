import { procedure, router } from '../trpc'

const getNotes = procedure.query(() => {
  return []
})

export const notesRouter = router({
  get: getNotes
})
