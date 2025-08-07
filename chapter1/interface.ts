
interface User{
    readonly id:number
    userId:number,
    name:string,
    email:string,
    goodleId?:string,
    sucess():string

    getcouppon(cpnname:string):number
}


const signup:User={

    id:2,
    userId:1,
    name:'akki',
    email:'akk@gmai.com',
    sucess:()=>'is a sucess signup',

    getcouppon:(cpnname:'offer10')=>{
        return 10;
    }

}

signup.userId=8