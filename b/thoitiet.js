function animations() {
    var animation = document.querySelector('.animation')
    animation.classList.add('loading')
    setTimeout( function removes() {
        animation.classList.remove('loading')
    } , 1000)
}
// setTimeout(animations() , 1000)



const tinh = document.querySelector('.province');
const trang_thai = document.querySelector('.status');
const colors = document.querySelector('.container')
const logo = document.querySelector('.item-logo');
const temperature = document.querySelector('.temperature');
const a =document.querySelector('.location');
const b =document.querySelector('.logo')

var Api = 'aaa68224a72fc2584864545c7d82e72c';
b.addEventListener('click' , () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a.value}&appid=${Api}&units=metric&lang=vi`)
        .then((res) => {
            setTimeout(animations() , 1000)

            return res.json()
        })
        .then((data) => {
            tinh.innerHTML = data.name;
            trang_thai.innerHTML = data.weather[0].description
            logo.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            temperature.innerHTML =  Math.round(data.main.temp) ;
             if(data.main.temp > 30) {
                temperature.classList.add('highlight') 
             }
             if(data.main.temp < 30) {
                temperature.classList.remove('highlight') 
             }
             console.log(trang_thai)
            //  if(trang_thai.includes('mưa')) {
            //      colors.classList.add('rain')
            //  }
        })
        .catch((err) =>{
            tinh.innerHTML = '__';
         alert('moi nhap ')
        })
})

   function color() {
    temperature.classList.add('highlight')
   }