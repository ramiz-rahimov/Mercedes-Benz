const car =document.querySelector('.car') 
window.onload = myCar


async function myCar(){
    const ourCar = 'car.json'
    try{
      const carnot_toGo = await fetch(ourCar)
      const car_toGo = await carnot_toGo.json()
      for(let i=0; i<car_toGo.length; i++){
        car.innerHTML +=`
        <div class="all-car"><div class="img_car"> <img class="mercedes_img"src="${car_toGo[i].img}"/>
         <p> ${car_toGo[i].necedir}</p>
         <img class="logo" src="${car_toGo[i].logo}"/>
         <p>${car_toGo[i].transport}</p>
         </div></div>
        `
      }
   
    }
    catch(hata){
        console.log("Xata bash verdi: " + hata);
    }
}