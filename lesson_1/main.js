const a = "a"; // string

console.log(a);

let c = 32; // number

const bool = true; // boolean
const bool2 = false;

console.log(typeof c)

const obj = {
    key: "value",
    username: "Sara",
    data:   {
        first_name: "jack",
        last_name: "rus"
    }
}

console.log(obj);
console.log(obj.data.first_name);

const arr = ["Aidana", true, false, 34]
console.log(arr[1], arr[0], arr[2], arr[3]);
const arr2 = [
    {
        key: 'value'
    },
    {
        key: 'value'
    },
    {
        key: 'value2'
    },
]
console.log(arr2[2].key);

//const name = prompt("Как вас зовут?")
//console.log("Hello " + name)

//const age = alert("Вам еще нет 18")

// const first_number = prompt("первое число")
// const last_number = prompt("Второе число")
//
// if(first_number > last_number){
//     console.log(first_number + ">" + last_number)
// }else if(first_number < last_number){
//     console.log(first_number + "<" + last_number)
// } else {
//     console.log( first_number + "=" + last_number)
// }

const age = prompt("Сколько вам лет")

if(age < 18){
    console.log("вам нельзя входить")
} else if(age === 18){
    console.log("Вы можете входить")
} else {
    console.log("Пошел вон")
}
