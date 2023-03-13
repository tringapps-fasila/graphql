import {Client} from 'pg';
const conn= new Client({
    host:"localhost",
    port:6000,
    user:"postgres",
    password:"sql",
    database:"demo",
})
conn.connect();


export default conn;
// export const book = [
//     {
//       name: 'The Awakening',
//       author: 'Kate Chopin',
//       page:[{page1: '1',page2:'2'}]
//     },
//     {
//       name: 'City of Glass',
//       author: 'Paul Auster',
//       page:[{page1: '1',page2:'2'}]

//     },
//   ];

//   export default  book;