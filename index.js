/*1. Задача: проектуємо бібліотеку. 
Написати клас для об’єкта Книга (Book) з такими властивостями:
автор
назва
рік написання
кількість сторінок
номер полиці
id юзера який взяв книгу
Книга може розташовуватись на полиці або бути виданою на руки користувача. Відповідно, потрібно додати дві властивості - номер полиці та id юзера. Якщо книгу хтось читає - у властивості “номер полиці” має бути null, а id юзера має відповідати тому юзеру, який її читає. Якщо ж книга вакантна і її можна арендувати (взяти почитати), то вона має ціле число у властивості “номер полиці” і null в графі id юзера.

Передбачити два методи екземпляра книги: 
метод isVacant(), який повертає true, якщо книга стоїть на полиці і її можна взяти
метод getRent(id), який приймає id юзера і “видає” книгу на руки - встановлює номер полиці в null і id юзера рівним тому, що переданий в аргументи методу

Додатково написати клас для створення об’єктів юзера. Юзер має наступні властивості:
id
ім’я
прізвище
адреса проживання
*/
class Book {
  constructor(author, title, year, quantityPages, shelfNumber, idUser) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.quantityPages = quantityPages;
    this.shelfNumber = shelfNumber;
    this.idUser = idUser;
  }

  set author(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Author must be a string.");
    }
    if (newValue === " ") {
      throw new RangeError("Author cannot be empty.");
    }
    this._author = newValue;
  }

  get author() {
    return this._author;
  }

  set title(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Title must be a string.");
    }
    if (newValue === " ") {
      throw new RangeError("Title cannot be empty.");
    }
    this._title = newValue;
  }

  get title() {
    return this._title;
  }

  set year(newValue) {
    if (newValue === " ") {
      throw new RangeError("Year cannot be empty.");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Year must be a number.");
    }
    this._year = newValue;
  }

  get year() {
    return this._year;
  }

  set quantityPages(newValue) {
    if (newValue === " ") {
      throw new RangeError("Quantity pages cannot be empty.");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Quantity pages must be a number.");
    }
    if (newValue < 0) {
      throw new RangeError("Quantity pages must be more 0.");
    }
    this._quantityPages = newValue;
  }

  get quantityPages() {
    return this._quantityPages;
  }

  set shelfNumber(newValue) {
    if (newValue === " ") {
      throw new RangeError("Shelf number cannot be empty.");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Shelf number must be a number.");
    }
    if (newValue < 0) {
      throw new RangeError("Shelf number must be more 0.");
    }
    this._shelfNumber = newValue;
  }

  get shelfNumber() {
    return this._shelfNumber;
  }

  set idUser(newValue) {
    if (newValue === " ") {
      throw new RangeError("Id user cannot be empty.");
    }
    if (typeof newValue !== "number" && newValue !== null) {
      throw new TypeError("Id user must be a number or null.");
    }
    if (newValue < 0) {
      throw new RangeError("Id user must be more 0.");
    }
    this._idUser = newValue;
  }

  get idUser() {
    return this._idUser;
  }

  isVacant() {
    if (this.shelfNumber > 0 && this.idUser === null) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  getRent(idUser) {
    if (this.shelfNumber === 0 && this.idUser > 0) {
      console.log(`User ${this.idUser} took the book ${this.title}`);
    } else {
      console.log(
        `The book ${this.title} located on the ${this.shelfNumber} shelf`
      );
    }
  }
}

const book1 = new Book("Joanne Rowling", "Harry Potter", 2020, 350, 33, null);
book1.isVacant();
book1.getRent();

class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  set id(newValue) {
    if (newValue === " ") {
      throw new RangeError("Id number cannot be empty.");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Id must be a number.");
    }
    if (newValue <= 0) {
      throw new RangeError("Id must be more 0.");
    }
    this._id = newValue;
  }

  get id() {
    return this._id;
  }

  set firstName(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("First name must be a string.");
    }
    if (newValue === " ") {
      throw new RangeError("First name cannot be empty.");
    }
    this._firstName = newValue;
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Last name must be a string.");
    }
    if (newValue === " ") {
      throw new RangeError("Last name cannot be empty.");
    }
    this._lastName = newValue;
  }

  get lastName() {
    return this._lastName;
  }

  set address(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Address must be a string.");
    }
    if (newValue === " ") {
      throw new RangeError("Address cannot be empty.");
    }
    this._address = newValue;
  }

  get address() {
    return this._address;
  }
}
const user1 = new User(
  44,
  "Victor",
  "Rudenko",
  "Zaporizhzhia city, Stalevariv st., building 44, apt. 67"
);
console.log(user1);

//------------------------------------------------------------------------------------------------
/*2. Створити клас для опису абстрактної тварини 
і два класи для тварин Тигр та Вовк, які його розширюють. 
Батьківський клас має реалізувати методи hunting та growl 
(робота методів - вивести в консоль рядок типу “зараз дожену здобич” та “грррррр”),
 а тигр та вовк мають реалізувати однойменні методи по-своєму 
 (наприклад, виводити “тигр з’їсть тебе”). 
 Створити декілька екземплярів класу Тигр і Вовк і перевірити, 
 чий метод викликається - класу-дитини або абстрактного батьківського класу.
 */

class Animal {
  constructor(nickname) {
    this.nickname = nickname;
  }

  hunting() {}

  growl() {}
}

class Tiger extends Animal {
  constructor(nickname) {
    super(nickname);
  }
  hunting() {
    console.log(`${this.nickname} will eat you`);
  }

  growl() {
    console.log(`${this.nickname} grrrrrrr`);
  }
}

class Wolf extends Animal {
  constructor(nickname) {
    super(nickname);
  }
  hunting() {
    console.log(`${this.nickname} will drive its prey`);
  }

  growl() {
    console.log(`${this.nickname} woooooooo`);
  }
}

const tigr1 = new Tiger("Rodger");
console.log(tigr1);
tigr1.hunting();
tigr1.growl();

const tigr2 = new Tiger("Ariana");
console.log(tigr2);
tigr2.hunting();
tigr2.growl();

const wolf1 = new Wolf("Alfa");
console.log(wolf1);
wolf1.hunting();
wolf1.growl();

const wolf2 = new Wolf("Mona");
console.log(wolf2);
wolf2.hunting();
wolf2.growl();
