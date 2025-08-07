

/*
let score:number|string=44

score='fs'



type User={
    id:number,
    name:string,
}

type Admin={

    id:number,
    Adminname:string,
}


let akshay:User|Admin={
    id:1,
    name:'Akshay'
}

akshay={id:8,
Adminname:'Akshay Admin'}

akshay={id:999,name:'vivek'}

console.log(akshay);


*/



function getId(id:string|number){

    if(typeof id==='string'){
        id.toUpperCase()
    }
}


let array:(string|number)[]=[1,2,3,"4"]


 

export{}