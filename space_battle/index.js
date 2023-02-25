class usShip {
    constructor(hull, Firepower, accuracy) {
        this.hull = 20
        this.Firepower = 5
        this.accuracy = 0.7
    }
    attack(){
        console.log("Human attack")
    }

    retreat(){
     console.log("Human own game over")
}
}


class alienShip {
    constructor(hull, firepower, accuracy) {
        this.hull = Math.floor(Math.random() * 4) + 3;// means it will go like 3,4,5,6
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }

    attack() {
        console.log("alien are attacking")
    }
    retreat(){
        console.log("Alien own game over")
}
}


const captain=new usShip()
const alienShip1=new alienShip()
const alienShip2=new alienShip()
const alienShip3=new alienShip()
const alienShip4=new alienShip()
const alienShip5=new alienShip()
const alienShip6=new alienShip()


//alien attack()

if (Math.random()<this.accuracy){
    console.log('Alien hit the Assembly ship')

}
if (Math.random()<this.accuracy)
{
    console.log('Alien is dead')
}






//const btnEl = document.querySelector('button')

//btnEl.addEventListener('click', methodFromExample)