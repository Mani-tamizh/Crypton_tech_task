const data = [
    {
        title:'Revenue',
        rate: '$2.047'
    }, 
    {
        title:'Orders',
        rate: '356'
    },
    {
        title:'Dine in',
        rate: '220'
    },
    {
        title:'Take away',
        rate: '135'
    }

];

const titleElement = document.querySelector('#title')
const rateElement = document.getElementById('description');
const get = data.map((datas)=>{
    titleElement.innerText = {datas[0].title};
    console.log(letter)
})
