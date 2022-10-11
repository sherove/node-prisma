const {prisma} = require('./generated/prisma-client');
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
   res.send('Hello world')
})

app.listen(port, () => {
   console.log(`서버실행즁^ http://localhost:${port}`);
})

// app.get('/all/users', async (req, res) => {
//    const allUsers = await prisma.users();

//    res.json({
//         success: true,
//         data: allUsers
//     });
// })
