// import { GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLList, GraphQLSchema,GraphQLID} from 'graphql';
// import _ from 'lodash';
// import { QueryResult } from 'pg';
// import conn  from '../config/db';


// // let  books=[
// //     {name:'book 1',genre: 'genre 1', id:'1',authorid:'1'},
// //     {name:'book 2',genre: 'genre 2', id:'2',authorid:'1'},
// //     {name:'book 3',genre: 'genre 3', id:'3',authorid:'2'}];

// // let author=[
// //     {name:'author 1',age:22,id:'1'},
// //     {name:'author 2',age:23,id:'2'},
// //     {name:'author 3',age:24,id:'3'}
// // ];

//         const bookType:any=new GraphQLObjectType({
//         name:'book',
//         fields:():any=>({
//                 id: {type:GraphQLID},
//                 name:{type:GraphQLString},
//                 genre:{type:GraphQLString},
                
//         })
        
//         });

// //         const authorType:any=new GraphQLObjectType({
// //             name:'Author',
// //             fields:():any=>({
// //                     id: {type:GraphQLID},
// //                     name:{type:GraphQLString},
// //                     age:{type:GraphQLInt},
// //                     book:{
// //                         type:new GraphQLList(bookType),
// //                         resolve(parent:any,args:any){
// //                             return _.filter(books,{authorid:parent.id})
// //                         }
// //                     }
// //             })
            
// //             });
//         let res:any;
//         const query:any=new GraphQLObjectType({
//             name:'queryType',
//             fields:{
//                 book:{
//                     type: bookType,
//                     args: {id: {type:GraphQLID}},
//                     resolve(parent,args){
//                       conn.query('select * from book where id=$1',
//                      [args.id],
//                      (err:Error,result:QueryResult)=>{
//                        res=result.rows;
//                      });
//                      console.log(res);
//                      return _.find(res);
                
//                    }

//                 }
                
//             }
//         })
//         const schema:any=new GraphQLSchema({
//             query:query
//         })
    
//  export default schema;
import {  gql } from "apollo-server-express";

export const typeDefs=gql`
   type book{
    id:String
    name: String
    age: String
    projects: [Project]
   }
   type Project {
        id: Int
        title: String 
        status: String 
        members: [book]
    }
  
   type Query{
    books: [book]
   }
`;


