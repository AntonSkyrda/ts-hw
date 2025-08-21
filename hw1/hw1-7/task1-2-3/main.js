"use strict";
class CreateUser {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let createdUsers = [];
createdUsers.push(new CreateUser(1, "John", "Doe", "jd@gmail.com", 123));
createdUsers.push(new CreateUser(2, "Alice", "Smith", "alice.smith@example.com", 101234567));
createdUsers.push(new CreateUser(3, "Bob", "Johnson", "b.johnson@example.com", 102345678));
createdUsers.push(new CreateUser(4, "Charlie", "Brown", "charlie.brown@example.com", 103456789));
createdUsers.push(new CreateUser(5, "Diana", "Miller", "diana.miller@example.com", 104567890));
createdUsers.push(new CreateUser(6, "Ethan", "Davis", "ethan.davis@example.com", 105678901));
createdUsers.push(new CreateUser(7, "Fiona", "Garcia", "fiona.garcia@example.com", 106789012));
createdUsers.push(new CreateUser(8, "George", "Martinez", "george.martinez@example.com", 107890123));
createdUsers.push(new CreateUser(9, "Hannah", "Lopez", "hannah.lopez@example.com", 108901234));
createdUsers.push(new CreateUser(10, "Ivan", "Petrov", "ivan.petrov@example.com", 109012345));
let sortedUsers = createdUsers.sort((a, b) => a.id - b.id);
let filteredUsers = createdUsers.filter((user) => user.id % 2 === 0);
console.log(createdUsers);
console.log(sortedUsers);
console.log(filteredUsers);
