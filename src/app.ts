/* eslint-disable @typescript-eslint/no-unused-vars */
import express, {  Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import userRouter from './app/module/user/user.route'

// import globalErrorHandler from './middleware/globalErrorHandler'

const app = express()

// middleware
app.use(express.json())

app.use('/api/v1/user', userRouter)
// app.use('/api/tour', tourRouter)
// app.use('/api/booking', bookingRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// app.use(globalErrorHandler)

////
app.use("*",  (req: Request, res: Response) => {
  res.json({
    susses: StatusCodes.BAD_GATEWAY, 
    message: "Api not found"
  })
})

export default app
