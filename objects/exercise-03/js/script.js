let people = {

    name: "André",
    age: 20,

    present: function()
    {
        return "My name is "+ this.name +" and I am "+ this.age +"years old";
    }
}

console.log(people.present()); //run with node.js