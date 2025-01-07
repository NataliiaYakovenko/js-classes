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
  //--------------

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
  //---------------

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
  //-----------------

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
  //-------------------

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
  //-------------------

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
  //-------------------

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
      console.log(`The book ${this.title} located on the ${this.shelfNumber} shelf`);
    }
  }
}

const book1 = new Book("Joanne Rowling", "Harry Potter", 2020, 350, 33, null);
book1.isVacant();
book1.getRent();
