// Single line comment

/*
    Multi line comment
*/

// DATA TYPE ชนิดข้อมูล
// String   
console.log("AAAAA")
console.log('BBBBB')
console.log(`CCCCC`)

//Nember
console.log(11111)      //integer
console.log(15.426879)  //float

//Boolean
console.log(true)      // 1 หรือ มีค่าข้อมูลใดๆ
console.log(false)     // 0

//Null
console.log(null)     // ค่าNull

//object เขียนอยู่ใน { } curly brackets และมีรูปแบบเป็น Key : Value
console.log({
    name: 'John',
    age: 20,
    isStudent: true,
    address : {
        province: 'Chonburi',
        contry : 'Thailand'
    }
    food: ['KFC', 'Pizza', 'Burger']
})

//Array เขียนอยู่ใน [ ] square brackets มีได้หลายข้อมูล , comma
//ทุกValue ของ Array จะมี Index number กำกับ โดยเริ่มต้นที่ 0 
console.log([1,2,3,4,5])
console.lofg([111, 'Somjai', true, 555, {name: 'John', age: 20}, [111,222,333]])

//undefined ยังไม่กำหนดค่า
let x
console.log(x)