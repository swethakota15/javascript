//numbers
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

//obj
const person = {
    name: 'sai'
};
const newPerson = {
    ...person,
    age: 22
}
console.log(newPerson);


//rest numbrs
const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));