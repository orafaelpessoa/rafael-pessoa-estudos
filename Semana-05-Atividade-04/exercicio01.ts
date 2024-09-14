interface Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
  }

  class Human implements Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    fullName: string;
    favoriteFoods: string[];

    constructor (name: string, lastName: string, age: number, favoriteFoods: string[]) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = age >=18;
        this.fullName = '';
        this.favoriteFoods = favoriteFoods
    }

    setFullName(): void {
        this.fullName = `${this.name} ${this.lastName}`;
    }

    showUserData(): void {
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Favorite Foods: ${this.favoriteFoods.join(', ')}`)
    }
  }

    const human = new Human('Rafael', 'Pessoa', 25, ['Lasanha', 'Fricassé', 'Leite em pó']);

    human.setFullName();
    human.showUserData();