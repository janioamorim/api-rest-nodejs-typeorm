import express from 'express'
import { AppDataSource } from './data-source'
// import routes from './routes'

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())

	app.use('/', (req, res)=>{
        return res.json('Certo')
    })

	return app.listen(3000)
})