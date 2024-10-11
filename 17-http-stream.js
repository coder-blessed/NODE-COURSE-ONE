// var http = require('http');
// var fs = require('fs');

// http
//   .createServer(function (req, res) {
//     const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

//     // Pipe the stream to the response when the file is successfully opened
//     fileStream.on('open', () => {
//       fileStream.pipe(res);
//     });

//     // Handle any errors during the stream
//     fileStream.on('error', (err) => {
//       res.statusCode = 500; // Send a 500 (Internal Server Error) status
//       res.end(`Error: ${err.message}`); // Send the error message as a string
//     });
//   })
//   .listen(5000, () => {
//     console.log('Server is listening on port 5000...');
//   });


