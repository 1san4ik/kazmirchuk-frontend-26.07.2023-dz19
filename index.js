class Human {
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }  
}

class Apartment {
    constructor() {
      this.residents = []
    }
  
    addResident(person) {
      this.residents.push(person)
    }
}

class House {
    constructor(maxApartments) {
      this.apartments = []
      this.maxApartments = maxApartments;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment)
      } else {
        console.log("Максимальна кількість квартир в будинку досягнута.")
      }
    }
}

const person1 = new Human("Олександр", "чоловік")
const person2 = new Human("Олена", "жінка")
const person3 = new Human("Іван", "чоловік")

const apartment1 = new Apartment()
const apartment2 = new Apartment()
const apartment3 = new Apartment()

apartment1.addResident(person1)
apartment2.addResident(person2)
apartment3.addResident(person3)

const house = new House(3)

house.addApartment(apartment1)
house.addApartment(apartment2)
house.addApartment(apartment3)

