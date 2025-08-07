

//array syntax first option

let names:string[]=[]

names.push('akki','john','doe')

console.log(names);



//array syntax second option

let ages:Array<number>=[]

ages.push(12,66,33,22)

console.log(ages);


//array syntax third option


type User={
    firstname:string,
    age:number,
    isActive:boolean
}


const allUser:User[]=[]

allUser.push({firstname:'akki',age:33,isActive:true})


//array of arrays


let multipleArr:number[][]=[]

multipleArr.push([1,2,3],[4,5,6])

console.log(multipleArr);




export{}
