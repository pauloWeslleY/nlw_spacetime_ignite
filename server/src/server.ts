import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(memoriesRoutes)
app.register(authRoutes)

app.register(cors, {
  origin: true, // todas URLs de front end poderão acessar nosso back end
})

app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333 🚀')
  })
