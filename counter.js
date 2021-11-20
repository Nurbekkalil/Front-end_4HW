// Сделать Counter: es6
// то есть сделать две кнопки + и -
// будет let num = 0
// при клике на кнопку + добавлять к num 1
// при клике на кнопку - отнимать к num 1


let count = 0

const updateCount = () => {
    const countTag = document.getElementById('count')
    countTag.innerText = count
}
updateCount()

const plusCount = () => {
    count++
    updateCount()
}
const minusCount = () => {
    count--
    updateCount()
}







// Сделать Counter:
// то есть сделать две кнопки + и -
// будет let num = 0
// при клике на кнопку + добавлять к num 1
// при клике на кнопку - отнимать к num 1


// let number = document.getElementById("Number");
// let num = 0;
//
// let add = document.getElementById("Plus");
// add.addEventListener('click', function (){
//     num += 1;
//     number.innerHTML = num;
// })
//
// let reduce = document.getElementById("Minus")
// reduce.addEventListener('click', function (){
//     num -= 1;
//     number.innerHTML = num
// })
//



// Map позволяет перебрать массив без помощи цикла. Можно производить какие либо операции.
// Результатом работы Map является новый массив. Не нужно вводить переменные.


// Filter
// Этот метод нужен для фильтрации вхождения внутрь массива.
// Создает новый массив не изменяя предыдущий.




// Reduce переберает массив и сохраняет промежуточный результат.
//
//
//