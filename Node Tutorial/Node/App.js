// Intro-1

// const amount = 12

// if(amount < 10) {
//     console.log("small number")
// } else {
//     console.log("large number")
// }

// console.log("hey it's my first node app!!!")

// --------------------------------------------------------

// Globals

// console.log(__dirname)
// setInterval(() => {
//     console.log('Hello World')
// },1000)

// --------------------------------------------------------

// Modules

// const name = require('./4-name')
// console.log(name)

// const data = require('./6-alternative-favor')
// console.log(data)

// const sayHi = require('./5-utils')

// require('./7-mind-grenade')

// sayHi(`susan`)
// sayHi(name.john)
// sayHi(name.peter)

// --------------------------------------------------------

// >> OS module <<

// const os = require('os')

// const user = os.userInfo()
// console.log(user)

// console.log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }
// console.log(currentOS)

// --------------------------------------------------------

// >> Path module <<

// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

// --------------------------------------------------------

// >> fs(async) module <<

// const { readFileSync, writeFileSync } = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )

// --------------------------------------------------------

// >> fs(sync) module <<

// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log(result)
//       }
//     )
//   })
// })

// --------------------------------------------------------

// >> Http module <<

// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Welcome to the home page')
//   } else if (req.url === '/about') {
//     res.end('What are we about')
//   } else {
//     res.end(`
//     <h1>Oh no!</h1>
//     <p>There is nothing to see here</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)

// //--------------------------------------------------------

// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

