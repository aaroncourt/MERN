const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const createUser = (props) => {
    const newFake = {
        _id: faker.datatype.number(10),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber('###-###-####'),
        email: faker.internet.email(faker.random.word()),
        password: faker.internet.password(8, true),        
    };
    return newFake;
};

const createCompany = (props) => {
    const newFake = {
        _id: faker.datatype.number(10),
        company: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(false),
            city: faker.address.cityName(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCodeByState(),
            country: 'USA',
        },
    };
    return newFake;
};

const newFakeUser = createUser();
const newFakeCompany = createCompany();

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api", (req, res) => {
    res.json({ message: faker.datatype.number(10) });
});

app.get("/api/users/new", (req, res) => {
    res.json({newFakeUser});
});

app.get("/api/companies/new", (req, res) => {
    res.json({newFakeCompany});
});

app.get("/api/user/company", (req, res) => {
    result = [newFakeUser, newFakeCompany]
    res.json({result});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );