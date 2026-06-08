// =====================================
// NIYATI EVENTS MASTER SCRIPT V2
// =====================================

document.addEventListener("DOMContentLoaded", () => {

console.log("NIYATI EVENTS Loaded");

// =====================================
// BACK TO TOP BUTTON
// =====================================

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

topBtn.style.display =
window.scrollY > 300
? "block"
: "none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

// =====================================
// REGISTER SYSTEM
// =====================================

const registerForm =
document.querySelector(".register-box form");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs =
registerForm.querySelectorAll("input");

const userData = {

name: inputs[0]?.value || "",
phone: inputs[1]?.value || "",
email: inputs[2]?.value || "",
password: inputs[3]?.value || ""

};

localStorage.setItem(
"niyatiUser",
JSON.stringify(userData)
);

alert(
"✅ Registration Successful"
);

window.location.href =
"login.html";

});

}

// =====================================
// LOGIN SYSTEM
// =====================================

const loginForm =
document.querySelector(".login-box form");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const savedUser =
JSON.parse(
localStorage.getItem("niyatiUser")
);

const email =
loginForm.querySelector(
'input[type="email"]'
)?.value;

const password =
loginForm.querySelector(
'input[type="password"]'
)?.value;

if(

savedUser &&
savedUser.email === email &&
savedUser.password === password

){

localStorage.setItem(
"loggedIn",
"true"
);

alert(
"✅ Login Successful"
);

window.location.href =
"dashboard.html";

}else{

alert(
"❌ Invalid Email Or Password"
);

}

});

}

// =====================================
// LOGOUT SYSTEM
// =====================================

const logoutBtns =
document.querySelectorAll(
'a[href="login.html"]'
);

logoutBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

localStorage.removeItem(
"loggedIn"
);

});

});

});
// =====================================
// CONTACT FORM SAVE
// =====================================

const contactForm =
document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const formData = {

name:
contactForm.querySelector(
'input[type="text"]'
)?.value || "",

email:
contactForm.querySelector(
'input[type="email"]'
)?.value || "",

message:
contactForm.querySelector(
'textarea'
)?.value || ""

};

let messages =
JSON.parse(
localStorage.getItem(
"contactMessages"
)
) || [];

messages.push(formData);

localStorage.setItem(
"contactMessages",
JSON.stringify(messages)
);

alert(
"📩 Message Sent Successfully"
);

contactForm.reset();

});

}

// =====================================
// BOOKING SYSTEM
// =====================================

const bookingForm =
document.querySelector(
".booking-section form"
);

if(bookingForm){

bookingForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const booking = {

bookingId:
"NE" +
Date.now(),

date:
new Date()
.toLocaleDateString(),

status:
"Pending"

};

let bookings =
JSON.parse(
localStorage.getItem(
"bookings"
)
) || [];

bookings.push(booking);

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

alert(
"🎉 Booking Created Successfully"
);

window.location.href =
"payment.html";

});

}

// =====================================
// WISHLIST SYSTEM
// =====================================

const wishlistBtns =
document.querySelectorAll(
".wishlist-btn"
);

wishlistBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

let wishlist =
JSON.parse(
localStorage.getItem(
"wishlist"
)
) || [];

wishlist.push({

id: Date.now()

});

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert(
"❤️ Added To Wishlist"
);

});

});

// =====================================
// PROFILE UPDATE
// =====================================

const profileForm =
document.getElementById(
"profileForm"
);

if(profileForm){

profileForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"✅ Profile Updated"
);

});

}

// =====================================
// PASSWORD UPDATE
// =====================================

const passwordForm =
document.getElementById(
"passwordForm"
);

if(passwordForm){

passwordForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"🔐 Password Changed"
);

});

}

// =====================================
// NOTIFICATION COUNT
// =====================================

let notificationCount =
localStorage.getItem(
"notificationCount"
);

if(!notificationCount){

localStorage.setItem(
"notificationCount",
"5"
);

}
// =====================================
// VENDOR REGISTRATION
// =====================================

const vendorForm =
document.querySelector(
'#vendorForm'
);

if(vendorForm){

vendorForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const vendorData = {

vendorId:
"V" + Date.now(),

createdAt:
new Date()
.toLocaleDateString()

};

let vendors =
JSON.parse(
localStorage.getItem(
"vendors"
)
) || [];

vendors.push(vendorData);

localStorage.setItem(
"vendors",
JSON.stringify(vendors)
);

alert(
"🏢 Vendor Registration Submitted"
);

});

}

// =====================================
// VENDOR SERVICES
// =====================================

const serviceForm =
document.getElementById(
"serviceForm"
);

if(serviceForm){

serviceForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const serviceData = {

serviceId:
"S" + Date.now(),

serviceName:
serviceForm.querySelector(
'input[type="text"]'
)?.value || "",

createdAt:
new Date()
.toLocaleDateString()

};

let services =
JSON.parse(
localStorage.getItem(
"vendorServices"
)
) || [];

services.push(serviceData);

localStorage.setItem(
"vendorServices",
JSON.stringify(services)
);

alert(
"✅ Service Added Successfully"
);

serviceForm.reset();

});

}

// =====================================
// SETTINGS SAVE
// =====================================

const settingsForm =
document.getElementById(
"settingsForm"
);

if(settingsForm){

settingsForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

localStorage.setItem(
"settingsSaved",
"true"
);

alert(
"⚙️ Settings Saved Successfully"
);

});

}

// =====================================
// DELETE ACCOUNT
// =====================================

const deleteBtn =
document.getElementById(
"deleteAccountBtn"
);

if(deleteBtn){

deleteBtn.addEventListener(
"click",
()=>{

const confirmDelete =
confirm(
"Are you sure you want to delete your account?"
);

if(confirmDelete){

localStorage.clear();

alert(
"🗑️ Account Deleted Successfully"
);

window.location.href =
"index.html";

}

});

}

// =====================================
// ANALYTICS DATA
// =====================================

const analyticsData = {

totalRevenue:
"₹8.5L",

bookings:
245,

rating:
4.9,

customers:
1200

};

localStorage.setItem(
"analyticsData",
JSON.stringify(analyticsData)
);

// =====================================
// PAGE VISITOR COUNTER
// =====================================

let visits =
parseInt(
localStorage.getItem(
"visitCount"
)
) || 0;

visits++;

localStorage.setItem(
"visitCount",
visits
);

console.log(
"Visitor Count:",
visits
);

// =====================================
// THEME SYSTEM
// =====================================

const themeToggle =
document.getElementById(
"themeToggle"
);

if(themeToggle){

themeToggle.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-theme"
);

localStorage.setItem(
"darkTheme",
document.body.classList.contains(
"dark-theme"
)
);

});

}

if(
localStorage.getItem(
"darkTheme"
) === "true"
){

document.body.classList.add(
"dark-theme"
);

}

// =====================================
// PROJECT STATUS
// =====================================

console.log(
"🚀 NIYATI EVENTS MASTER SCRIPT V2 LOADED"
);

// =====================================
// END OF SCRIPT
// =====================================

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxYCvHHtu6VQVFRMAPQ-bHvRofxqTAePhETlshAFh9GBYzEaGzYNor3EYc4WxsrYkPc0w/exec";

fetch(SCRIPT_URL, {

method: "POST",

body: JSON.stringify({

sheet: "Users",

name: "Aayush",

phone: "9999999999",

email: "test@gmail.com",

password: "123456"

})

})
.then(r => r.json())
.then(data => {

console.log(data);

alert("User Saved");

});