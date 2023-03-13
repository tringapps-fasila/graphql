import conn from "./config/db";
import {v4 as uuidv4} from 'uuid';

interface User {
    id: string
    name: string
    email: string
    password: string
}
 export const readQuery=async (querys: string) =>{
    try{
        
        const result= await conn.query(querys);
        return result.rows;
    }catch(err){
        return err;
    }finally{
        conn.end();
    }
}
export const createUserTable =async()=>{
    console.log("hii");
    const query=`
    CREATE TABLE book(
        id text primary key,
        name text,
        age Int
    );`;
    return readQuery(query);
     
}
export const createProjectTable = async () => {

    const query = `
    CREATE TABLE projects (
        id serial primary key,
        title varchar,
        status varchar
    )
    `;


 return  await readQuery(query) ? console.log("Table created.") : ("Unable to create table.");
}

 
export const findUserByname = async (name: string) => {
    const query = {
        text: 'SELECT * FROM book WHERE name= $1',
        values: [name]
    }

    try {
        const res = await conn.query(query);
        return res.rows;
    } catch (err) {
        console.error(err);
    }
    // return [{
    //     id: '0',
    //     name: "J Doe",
    //     age:22
    // }]
}
export const InsertUserTable=async(name:string,age:number)=>{
    const query = {
        text: 'INSERT INTO book(id,name, age) VALUES($1, $2,$3)',
        values: [uuidv4(),name,age],
      }
    const userQuery = await findUserByname(name);
    if (userQuery?.length === 0) {
        try {
            const res = await conn.query(query);
            console.log("User added.");
        } catch (err) {
            console.error(err);
        }
    } else {
        console.log("Unable to add user. Check your email address");
    }
       
}
export const addProject = async (title: string, status: string) => {
    const query = {
        text: 'INSERT INTO projects(title, status) VALUES($1, $2)',
        values: [title, status],
    }

    try {
        const res = await conn.query(query);
        console.log("Project added.");
    } catch (err) {
        console.error(err);
    } 

}

export const getUsers = async () => {
    const usersFromUsersTable:any = await selected();
    const assignments:any = await selectedproject();
    const users:any = await usersFromUsersTable.map(async (user:any) => {
        let projects: object [] = [];
        console.log("heloo");
        await assignments.forEach( (assignment: { id:any; title: any; status: any; }) => {
           
                projects.push({
                   id: assignment.id,
                   title: assignment.title,
                   status: assignment.status 
                });
            
        })
        return {
            id: user.id,
            name: user.name,
            age:user.age,
            projects: projects,
        }
    })
    return users;   
}

export const ListTable=async ()=>{
    const query=`select table_name from information_schema.tables
    where table_schema='public' order by table_name`;

    try{
        const result= await conn.query(query);
        console.log("selected successfully");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    finally{
        conn.end();
    }
}
 
export const selected=async()=>{
    const query = {
        text: 'Select * from book',
        values: [],
      }
      try{
        const result= await conn.query(query.text);
        // console.log("selected successfully");
        // console.log(result);
        return result.rows;
    }
    catch(err){
        console.log(err);
    }
}
export const selectedproject=async()=>{
    const query = {
        text: 'Select * from projects',
        values: [],
      }
    
      try{
        const result= await conn.query(query.text);
        // console.log("selected successfully");
        // console.log(result);
        return result.rows;
    }
    catch(err){
        console.log(err);
    }
    
}

function findUserByEmail(email: any) {
    throw new Error("Function not implemented.");
}
