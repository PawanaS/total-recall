//console.log( "this is 4th day")

class Hamster{
    constructor(name,owner,price){
        this.owner=" "
        this.name=name
        this.price=15

    }
wheelRun(){
    console.log('squeak squeak')

}
eatFood(){
    console.log('nibble nibble')
  }
  getPrice(){
    return this.price
  }

}

//Person

class Person{
    constructor(name,age,height,weight,mood,hamster,bankAccount){
        this.name=name
        this.age=0
        this.height=0
        this.weight=0
        this.mood=0
        this.hamster=[]
        this.bankAccount=0
}
getName(){
    return this.name
}
getAge(){
    return this.age
  }
  getweight(){
    return this.weight
  }
  greet(){
    console.log(`My name is ${this.name} hello everybody`)
  }
  eat(){
    this.weight++
    this.mood++
}
  exercise(){
    this.weight--
  }
  ageUp(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount+=10
  }
  buyHamster(hamster){
    this.hamsters.push("hamster")
    this.mood+=10
    this.bankAccount-=hamster.getPrice()
  }
}
