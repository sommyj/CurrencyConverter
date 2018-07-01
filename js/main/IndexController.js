export default class IndexController {
  constructor(flavor, calories, toppings = []) {
    // this.flavor = flavor;
    // this.toppings = toppings;
    this.registerServiceWorker();
  }
  // addTopping(topping) {
  //   this.toppings.push(topping);
  // }
  registerServiceWorker(){
    if (!navigator.serviceWorker) return;

    navigator.serviceWorker.register('/sw.js').then(function(reg) {
    // if (!navigator.serviceWorker.controller) {
    //   return;
    // }
  }

}
