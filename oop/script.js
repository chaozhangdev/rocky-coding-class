
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    alert('hi !');
  }
}

var student1 = new Human('rocky', 90);
var student2 = new Human('chao', 223);

console.log(student1.age)


class Player {
  constructor(name, level, role) {
    this.name = name;
    this.age = level;
    this.role= role;
  }
}