// Write your code here
class Breakfast {
  constructor(food , drink){
  this.food= food;
  this.drink= drink
}}
let food = new Breakfast('pizza','cheese')
class Lunch {
  constructor(salad, soup, drink) {
    this.salad= salad;
    this.soup= soup;
    this.drink= drink;
  }
}
let food2 = new Lunch('hotDog','potato')
class Dinner {
  constructor( salad, soup, entree,dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert= dessert;
  }
}
let food3 = new Dinner('fish','potato','asd','choco')
