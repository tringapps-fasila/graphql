// import {graphqlHTTP} from 'express-graphql';
// import schema from './schema/schema';
// const app:express.Application=express();


// app.use('/graph',graphqlHTTP({
//     schema:schema,
//     graphiql:true
// }));
// app.use(express.json());


// app.listen(3000,()=>{
//     console.log("server start at 3000");
// })
import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';
import { typeDefs } from "./schema/schema";
import {resolvers} from "./resolver"

const app=express();

   let server=null;
     async function Serverstart(){
       server=new ApolloServer({typeDefs,resolvers});
       await server.start();
        server.applyMiddleware({ app });
      
    }
    Serverstart();

    // app.use(express.json());

  app.listen(4000,()=>{
    console.log('server start');
  });