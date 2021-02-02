import './react/App';
import './scss/app.scss';

export interface Person {
  name?: string;
  age?: number;
  gender?: string;
}

export default class People {
  person: Person = {};

  constructor(name: string, age: number, gender: string) {
    this.person = { ...this.person, name, age, gender };
  }
  identity(): Person {
    return this.person;
  }
}
