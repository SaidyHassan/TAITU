const services = document.querySelector(".service-contents");
const image = document.querySelector(".service-images");
document.querySelector('#list-1').addEventListener('click',()=>{
    services.innerHTML= `
    <h2>Dining</h2>
    <p>We offers unforgettable journey into the heart of Ethiopian cuisine.
        With a menu rich in trtaditional flavors and welcoming ambiance guests experience the 
        best of Ethiopian hospitality.<br>
        Explore our favorite dishes such as:<br>
        INJERA<br>
        DORO WAT<br>
        MISIR WAT
    </p>
    <button><a href="#">ORDER NOW</a></button>
    </div>
    `  
})
document.querySelector('#list-1').addEventListener('click',()=>{
    image.innerHTML =`
    <img src="./images/food2.jpg" height="100%" width="100%" style="border-radius: 10px;">
    </div>
    `
})
document.querySelector('#list-2').addEventListener('click',()=>{
    services.innerHTML= `
    <h2>Reservation</h2>
    <p>At Taittu Restaurant, reservation unlock the world of culinary delight and persomalized hospitality.
    Secure your spot amidst the vibrant ambiance and tanalizing aromas of Ethiopian cuisine.With reservations,
    gguests eembark on journey of exquisite flavors and seamless service,ensuring every moment is savored and seamless service.
    </p>
    <button><a href="#">ORDER NOW</a></button>
    </div>
    `  
})
document.querySelector('#list-2').addEventListener('click',()=>{
    image.innerHTML =`
    <img src="./images/food1.jpeg" height="100%" width="100%" style="border-radius: 10px;">
    </div>
    `
})
document.querySelector('#list-3').addEventListener('click',()=>{
    services.innerHTML= `
    <h2>Private Events</h2>
    <p>Experience the exclusivity of Taitu Restaurants private event services. From corporate functions
     to intimate gaherings,our team delivers personalized menus and impeccable service in a cozy setting.
     Let us make your special occasion unforgetable.
    </p>
    <button><a href="#">ORDER NOW</a></button>
    </div>
    `  
})
document.querySelector('#list-3').addEventListener('click',()=>{
    image.innerHTML =`
    <img src="./images/c1c934befa0098222654c0b599de28bd.jpg" height="100%" width="100%" style="border-radius: 10px;">
    </div>
    `
})

document.querySelector('#list-4').addEventListener('click',()=>{
    services.innerHTML= `
    <h2>Delivery</h2>
    <p>Our delivery service is tailored to bring the rich aromas and distinct flavors of Ethiopian cuisine straights
    to your doorstep. With attention to detail and timely delivers,we ensure that every order arrives fresh and ready
    to be savored,allowing you to enjoy the essence of Ethiopian dining in the convenience of your own home.
    </p>
    <button><a href="#">ORDER NOW</a></button>
    </div>
    `  
})
document.querySelector('#list-4').addEventListener('click',()=>{
    image.innerHTML =`
    <img src="./images/Find-Food-Near-Me---Food-Delivery-from-DoorDash.jpg" height="100%" width="100%" style="border-radius: 10px;">
    </div>
    `
})

document.querySelector('#list-5').addEventListener('click',()=>{
    services.innerHTML= `
    <h2>Special Menus</h2>
    <p>A curated selection of innovative dishes crafted with premium ingredients and culinary expertise.From appetizers 
    to desserts,savor unique flavors and elevate your dining experience with us.
    <p>
    </p>
    <button><a href="#">ORDER NOW</a></button>
    </div>
    `  
})
document.querySelector('#list-5').addEventListener('click',()=>{
    image.innerHTML =`
    <img src="./images/food2.jpg" height="100%" width="100%" style="border-radius: 10px;">
    </div>
    `
})



// form handling using javascript

const firstname = document.querySelector("#fname").value;
const lastname = document.querySelector("#lname").value;
const message = document.querySelector("#message").value;
document.getElementById("#submitbtn").addEventListener('click', ()=>{
    if(firstname === " ")
    {
        alert("Fill the empty field first");
    }
    else
    {
        alert("Your message is clearly submitted");
    }
})
