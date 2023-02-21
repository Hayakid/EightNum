//Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded',function (e)
{
    console.log('все теги прогрузились');})

//2Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('DOMContentLoaded',function (e)
{
    console.log('страница загрузилась');})
//num3
const bode = document.querySelector('body');
bode.onclick= function () {
    console.log('Класс super_element присутствует в элементе div- сообщение должно определять присутствует или отсутствует класс super_element- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по- которому был совершен клик.- Необходимо использовать делегирование')
}
//num4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const  introduction = document.querySelector('textarea');
introduction.addEventListener('mouseover',function (e){
    console.log('Вы навели на textarea.')
})
//5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const touches = document.querySelector('ul');
    touches.onclick=function() {
        console.log('Вы нажали на кнопку,на какую вы можете и сами посмотреть ')
        
    }
