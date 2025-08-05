"use strict";
/*
 
const user={
    name:'akshay',
    email:'akk@gmail.com',
    isActive:true
}



//syntax for a function which return a object

function create():{name:string,isPaid:boolean}{

    return {name:'akki',isPaid:true}
}

create()


// function createUser({name:string,isPaid:boolean}):string{

//     return 'tesing'
// }

// createUser({name:'akshay',isPaid:true})




///just simplifying the above code


function createUser({name:string,isActives:boolean}){

   console.log(`User created with name: ${name} `);
   
}

//createUser({name:'akshay',isActive:true})

///just simplifying the above code

const users={name:'akshay',isActives:true}

createUser(users)




//type Aliases


type User={
    firstName:string,
    emails:string,
    isActivated:boolean
}



function createuser(details:User):User{
return {firstName:details.firstName,emails:details.emails,isActivated:details.isActivated}
}


createuser({firstName:'',emails:'',isActivated:true})



*/
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    name: 'akki',
    email: "ssf@.com",
    isActive: true,
};
myUser.email = 'newemail@.com';
myUser.name = 'newName';
myUser.isActive = false;
console.log(myUser);
