import React, { Component, useState } from 'react';

//apollo client
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag'

const endPointUrl = 'http://localhost:9000/graphql'
const client = new ApolloClient({
  link: new HttpLink({uri:endPointUrl}),
  cache:new InMemoryCache()
});

async function loadGreeting() {
    const response =  await fetch('http://localhost:9000/graphql', {
       method:'POST',
       headers:{'content-type':'application/json'},
       body:JSON.stringify({query:'{greeting}'})
    })
    const rsponseBody =  await response.json();
    return rsponseBody.data.greeting;
    console.log("end of function")
 }

 async function  loadSayhello(name) {
    const response =  await fetch('http://localhost:9000/graphql', {
       method:'POST',
       headers:{'content-type':'application/json'},
       body:JSON.stringify({query:`{sayHello(name:"${name}")}`})
    })
    const rsponseBody =  await response.json();
    return rsponseBody.data.sayHello;
 }

 const loadStudentsAsync = async() => {
    const query = gql`
    {
       students{
          id
          firstName
          lastName
          college{
             name
             id
          }
       }
    }
    `
    const {data} = await client.query({query}) ;
    return data.students;
 }

 


const  GraphQLComp = () => {

    const [greetingMessage, setGreeting ] = useState();
    const [sayHelloMessage, setHello] = useState();
    const [userName, setUser] = useState();
    const [students, setStudents] = useState([]);

    const showGreeting = () => {
        loadGreeting().then(g => setGreeting( g+ " :-)" ))
     }
     
    const updateName = (event) => {
        setUser(event.target.value);
    }
    const showSayHelloMessage = () => {
        const name = userName;
        console.log(name)
        loadSayhello(name).then(m => setHello(m))
     }
     const loadStudents =  async() => {
      const studentData =  await loadStudentsAsync();
      setStudents(studentData)         
      console.log("loadStudents")
   }

    return (

        <div>
            
     


        <hr/>

        <div>
            <input type = "button"  value = "loadStudents" onClick = {loadStudents}/>
            <div>
               <br/>
               <hr/>
               <table border = "3">
                  <thead>
                     <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>college Name</td>
                     </tr>
                  </thead>
                  
                  <tbody>
                     {
                        students.map(s => {
                           return (
                              <tr key = {s.id}>
                                 <td>
                                    {s.firstName}
                                 </td>
                                 <td>
                                    {s.lastName}
                                 </td>
                                 <td>
                                    {s.college.name}
                                 </td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
               </table>
            </div>
         </div>

        </div>


    );
}
 export default GraphQLComp;