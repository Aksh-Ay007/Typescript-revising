

//this is not just you just is writing the code this is a team of 20 or 30 people
//and they are working on the same codebase and they are working on the same file so someone try to return a string
//and someone try to return a number so how we can handle this situation
//so we can use the typescript to handle this situation,that why iam using and mention type number which should return the function
//and if you try to return a string then typescript will give you an error

function addTwo(num:number):number{
     return num+2;
    //return 'hello';
}


function toUpper(val:string){

    return val.toUpperCase();
}


function signUp(name:string,email:string,isPaid:boolean){

}

let isLogin=(name:string,email:string,isPaid?:boolean)=>{}


signUp('akki','njfdskfds',true)

addTwo(5);
isLogin('akki','njfdskfds')


toUpper('akki')





///part 2 of functions


function isValues(val:number):boolean|string{


    if(val>0){
        return true
    }
    return 'its not a positive number';
}


//for arrow function

let isCheck=(val:number):boolean|string=>{

    if(val>0){
        return true
    }
    return 'it is not'
}


function isError(errMsg):void{

    console.log(errMsg)
}

function errCheck(err:string):never{

    throw new Error(err);
}

isError('this is an error message')
errCheck('this is an error message')


isValues(5)
isCheck(7)

export{}