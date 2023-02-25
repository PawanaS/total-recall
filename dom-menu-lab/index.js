
console.log ("hello")

//task 1
const mainEl=document.querySelector("main")
console.log(mainEl)

//task1.1
mainEl.style.backgroundColor = 'var(--main-bg)'
console.dir(mainEl)

//task1.2
mainEl.innerHTML = " <h1>SEI Rocks!</h1>";
console.dir(mainEl)

//task 1.3
 mainEl.classList.add('flex-ctr')
 mainEl.className='flex-ctr'

 //2.0
const topMenuEl=document.getElementById('top-menu');
console.log(topMenuEl)

//task 2.1
//topMenuEl.setAttribute('height', 100%)
topMenuEl.style.height = '100%'

//task 2.2
topMenuEl.style.backgroundColor="var(--top-menu-bg)"

//task2.3
topMenuEl.classList.add('flex-around')


// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//task3.0
menuLinks.forEach(obj=>{
const a = document.createElement('a')

a.setAttribute('href',obj.href)

a.textContent=obj.text

topMenuEl.appendChild(a)
})

//task 4.0
const subMenuEl =document.getElementById('sub-menu');
console.log(subMenuEl)

//4.1
subMenuEl.style.height = '100%'

//task 4.2
subMenuEl.style.backgroundColor="var(--sub-menu-bg)"

//task 4.3
subMenuEl.classList.add('flex-around')

//4.4

subMenuEl.setAttribute("position","absolute")


//4.5
subMenuEl.style.top="0"


//task 5.1 Select and cache the all of the <a>elements inside of topMenuEl a variable named topMenuLinks.
const topMenuLinks=topMenuEl.querySelectorAll('a')
console.log(topMenuLinks)

//Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu=false
console.log(showingSubMenu) 

//task5.2-Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(e){
  e.preventDefault()
  // console.log(e.target.tagName.toLowerCase())
  if(e.target.tagName.toLowerCase() !== 'a'){
      console.log(e.target.tagName.toLowerCase());
      return
  }
  
  
  //5.3//prevents the link from opening the url


  
});