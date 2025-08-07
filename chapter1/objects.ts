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





type User={
    readonly _id:string
    name:string,
    email:string,
    isActive:boolean,
    credintials?:number

}


let myUser:User={

   _id:'12345',
    name:'akki',
    email:"ssf@.com",
    isActive:true,
}

myUser.email='newemail@.com'


myUser.name='newName'
myUser.isActive=false

console.log(myUser);



*/



///combine multiple types




type cardNumber={

    cardNum:string
}


type cardData={

    cardHolderName:string,
}


type cardDetails=cardNumber & cardData & {

    cvv:number
}



function getCardDetails(details:cardDetails):cardDetails{

    return details;

}

let res=getCardDetails({cardNum:'1234',cardHolderName:'Akshay',cvv:123})


console.log(res);







export{}