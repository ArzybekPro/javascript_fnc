



let user = {
    name:"abay",
    age:20,
    hello(){
        console.log(this.name , this.age);
    },
    fnc(place){
        console.log(this.name,"goes to" , place);
    }

}
user.hello();
user.fnc("shop");

