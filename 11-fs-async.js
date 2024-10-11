// const {readFileSync, writeFileSync, readFile, writeFile,} =require('fs')
const { readFile, writeFile,} =require('fs')
console.log('start')
// const first     = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

//  writeFileSync('./content/result-sync.txt',
//      `here is the result: ${first} ,${second}`, {flag: 'a'})

//  console.log(first,second);
 readFile('./content/first.txt', 'utf8' ,(err, result) => {
    if(err){
     console.log(err)
     return
     }
     const first = result;
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err) {
             console.log(err)
             return
        }
        const second = result
         writeFile('/content/result/-async.txt',
             `here is the result :${first}, ${second}`
             ,(err,result) => {
                 if(err) {
                     console.log(err)
                     return
                 }
                //  console.log(result)
                 console.log('done with this task')
             }
         )
    
     })
})
console.log('starting next task')

