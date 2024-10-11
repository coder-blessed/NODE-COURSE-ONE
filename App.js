//GLOBALS - N0 WINDOW !!!
// _dirname -  path to currrent directory
// _filename - filename
// require - function  to use modules (commonJS)
// MODULE - info about current path
//process - 

// console.log(_dirname)
// setInterval(() => {
//     console.log('hello world')
// },1000)



// const amount = 12;

// if(amount < 10){
//     console.log('small number');
// } else {
//     console.log('large number');
// }

// console.log(`hey it's my first node app !!!`);

//commonJs every file is a module (by default)
//modules - encapsulated code (only share minimum)

//modules
// const john = `john`
// const peter = 'john'
// const names = require('./4-names')
// // const sayHI = require('./5-utils')
// const data = require('./6-Alternative-flavor')
// require('./7-mind-grenade')
// console.log(data)
// const sayHI = (name) => {
//     console.log(`hello dear ${name}`)
// }
// sayHI('susan')
// sayHI(john)
// sayHI(peter)

//  module.exports = {john,peter}




// const os = require('os')
// //info about current user

// const user = os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`)




// const currentOS = {
//     name:os.type(),
//     releases:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem(),
// }

// console.log(currentOS)



// const path = require('path')
// console.log(path.sep)

// const filePath = path.join('./content','subfolder','test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt');
// console.log(absolute)


// const {readFileSync, writeFileSync, readFile, writeFile,} =require('fs')
// console.log('start')
// const first     = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt', 'utf8')


// writeFileSync('./content/result-sync.txt',
//    `here is the result: ${first} ,${second}`, {flag: 'a'})
// console.log('done with this task')
// console.log('starting the next one')
// // console.log(first,second);
// readFile('./content/first.txt', 'utf8' ,(err, result) => {
//    if(err){
//     console.log(err)
//     return
//     }
//     const first = result;
//     readFile('./content/second.txt','utf8',(err,result) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('/content/result/-async.txt',
//             `here is the result :${first}, ${second}`
//             ,(err,result) => {
//                 if(err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
    
//     })
// })


// const http = require('http');

// const server = http.createServer((req,res) => {
//     if (req.url === '/') {
//         res.end('welcome to our homepage.')
//     }
//    if (req.url === '/about') {
//     res.end('Here is our short history')
//    }
//    res.end(`<h1>Oops !</h1>  <p> we cant seem to find the page you are looking for.</p>  <a href="/"> homepage</a>`)
// })

// server.listen(5000)

// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems)
// console.log('hello world')






// //started operating system process

// console.log('first')
// setTimeout(() => {
//  console.log('second')
// }, 0)
// console.log('third')
// // completed and exited operating process


// setInterval(() => {
//     console.log('hello world')
// }, 2000)      //in this case every two seconds the event loop is just gonna run the callback
// console.log(`i will run first`)
// //process stays alive unless
// //kill process control + c
// // unexpected error










// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('request event');
//     res.end('Hello world');
// });

// server.listen(5000, () => {
//     console.log('server listen on port : 5000....');
// });



// const http = require('http');

// const server = http.createServer((req,res) => {
//    if (req.url === '/') {
//     res.end('Home Page');
//    }
//    if (req.url === '/about'){
//     //BLOCKING CODE !!!
//     for (let i = 0; i < 1000; i++) {
//         for (let J = 0; J < 1000; J++) {
//        console.log(`${i} ${J}`);
        
//         }
        
//     }
//     res.end('About page');
//    } res.end('error page')



// });

// server.listen(5000, () => {
// console.log('server listening on port 5000...')
// });





// //from the file system module.
// const {readFile , writeFile} =  require('fs');
// // const {readFile , writeFile} =  require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);





// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');  
//         const second = await readFilePromise('./content/second.txt', 'utf8');
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)  
//         console.log(first, second)
//     } catch (error) {
//         console.log('error') 
//     }
   
   
// }
// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');  
//         const second = await readFilePromise('./content/second.txt', 'utf8');
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)  
//         console.log(first, second)
//     } catch (error) {
//         console.log('error') 
//     }
   
   
// }
// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt', 'utf8');  
//         const second = await getText('./content/second.txt', 'utf8');
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)  
//         console.log(first, second)   
//     } catch (error) {
//         console.log('error')     
//     }
   
   
// }

// start()

// const getText = (path) => {
//     return new Promise((resolve , reject) => {
//         readFile(path, 'utf8', (err,data) => {
//             if (err) {
//               reject(err)
//             } else{
//               resolve(data);
//             }
//           })
//     })

// };

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));





// const EventEmitter = require('events');

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name,id) => {
//         console.log(`data recieved  user ${name} with id: ${id}`);
// });
// customEmitter.on('response', () => {
//         console.log(`some other logic here`);
// });


// customEmitter.emit('response', 'john', 34)

// const { createReadStream } = require('fs');
// const http = require('http');

// http
//     .createServer(function (req, res) {
//         // Use streaming instead of readFileSync
//         const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

//         // Pipe the stream directly to the response to avoid blocking
//         stream.on('open', () => {
//             stream.pipe(res);  // Pipe the stream data to the response
//         });

//         // Handle any errors that might occur and send the error message as a string
//         stream.on('error', (err) => {
//             res.statusCode = 500;  // Optional: Set the status code to 500 (Internal Server Error)
//             res.end(`Error: ${err.message}`);  // Send the error message as a string
//         });
//     })
//     .listen(5000, () => {
//         console.log('Server is listening on port 5000...');
//     });

