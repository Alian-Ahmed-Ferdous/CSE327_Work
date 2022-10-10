// Https Basics

// const http = require('http')
// const { readFileSync } = require('fs')

// // get all files
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res) => {
//   // console.log(req.method)
//   const url = req.url
//   console.log(url)
//   // home page
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(homePage)
//     res.end()
//   }
//   // about page
//   else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>about page</h1>')
//     res.end()
//   }
//   // styles
//   else if (url === '/styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' })
//     res.write(homeStyles)
//     res.end()
//   }
//   // image/logo
//   else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' })
//     res.write(homeImage)
//     res.end()
//   }
//   // logic
//   else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/javascript' })
//     res.write(homeLogic)
//     res.end()
//   }
//   // 404
//   else {
//     res.writeHead(404, { 'content-type': 'text/html' })
//     res.write('<h1>page not found</h1>')
//     res.end()
//   }
// })

// server.listen(5000)


// >> Express basic <<

// const express = require('express')
// const path = require('path')

// const app = express()

// // setup static and middleware
// app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000....')
// })

//>> Basic Json <<
// const express = require('express')
// const app = express()
// const { products } = require('./data')
// app.get('/', (req, res) => {
//   res.json(products)
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })


// >>params-query<<

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product
//     return { id, name, image }
//   })

//   res.json(newProducts)
// })
// app.get('/api/products/:productID', (req, res) => {
//   console.log(req)
//   console.log(req.params)
//   const { productID } = req.params

//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   )
//   if (!singleProduct) {
//     return res.status(404).send('Product Does Not Exist')
//   }

//   return res.json(singleProduct)
// })

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//   console.log(req.params)
//   res.send('hello world')
// })

// app.get('/api/v1/query', (req, res) => {
//   console.log(req.query)
//   const { search, limit } = req.query
//   let sortedProducts = [...products] 

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search)
//     })
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }
//   if (sortedProducts.length < 1) {
//     res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] })
//   }
//   res.status(200).json(sortedProducts)
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })
