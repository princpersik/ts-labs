"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS = void 0;
var TS;
(function (TS) {
    class VehicleOwner {
        constructor(surname, firstName, middleName, dateOfBirth, docType, docSeries, docNumber) {
            this._surname = surname;
            this._firstName = firstName;
            this._middleName = middleName;
            this._dateOfBirth = dateOfBirth;
            this._docType = docType;
            this._docSeries = docSeries;
            this._docNumber = docNumber;
        }
        get surname() { return this._surname; }
        set surname(value) { this._surname = value; }
        get firstName() { return this._firstName; }
        set firstName(value) { this._firstName = value; }
        get middleName() { return this._middleName; }
        set middleName(value) { this._middleName = value; }
        get dateOfBirth() { return this._dateOfBirth; }
        set dateOfBirth(value) { this._dateOfBirth = value; }
        get docType() { return this._docType; }
        set docType(value) { this._docType = value; }
        get docSeries() { return this._docSeries; }
        set docSeries(value) { this._docSeries = value; }
        get docNumber() { return this._docNumber; }
        set docNumber(value) { this._docNumber = value; }
        displayOwner() {
            console.log('Сведения о владельце:');
            console.log('Фамилия:', this._surname);
            console.log('Имя:', this._firstName);
            console.log('Отчество:', this._middleName);
            console.log('Дата рождения:', this._dateOfBirth.toDateString());
            console.log('Тип документа:', DocType[this._docType]);
            console.log('Серия документа:', this._docSeries);
            console.log('Номер документа:', this._docNumber);
        }
    }
    TS.VehicleOwner = VehicleOwner;
    let DocType;
    (function (DocType) {
        DocType[DocType["LICENSE"] = 0] = "LICENSE";
        DocType[DocType["PASSPORT"] = 1] = "PASSPORT";
        DocType[DocType["INSURANCE"] = 2] = "INSURANCE";
    })(DocType = TS.DocType || (TS.DocType = {}));
    class Transport {
        constructor(brand, model, year, VIN, regNumber, ownerInfo) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._regNumber = regNumber;
            this._ownerInfo = ownerInfo;
        }
        get brand() { return this._brand; }
        set brand(value) { this._brand = value; }
        get model() { return this._model; }
        set model(value) { this._model = value; }
        get year() { return this._year; }
        set year(value) { this._year = value; }
        get VIN() { return this._VIN; }
        set VIN(value) { this._VIN = value; }
        get regNumber() { return this._regNumber; }
        set regNumber(value) { this._regNumber = value; }
        get ownerInfo() { return this._ownerInfo; }
        set ownerInfo(value) { this._ownerInfo = value; }
        displayVehicle() {
            console.log('Марка:', this._brand);
            console.log('Модель:', this._model);
            console.log('Год выпуска:', this._year);
            console.log('VIN-номер:', this._VIN);
            console.log('Регистрационный номер:', this._regNumber);
        }
    }
    TS.Transport = Transport;
    let BodyType;
    (function (BodyType) {
        BodyType[BodyType["HATCHBACK"] = 0] = "HATCHBACK";
        BodyType[BodyType["ROADSTER"] = 1] = "ROADSTER";
        BodyType[BodyType["MINIVAN"] = 2] = "MINIVAN";
        BodyType[BodyType["COUPE"] = 3] = "COUPE";
        BodyType[BodyType["SEDAN"] = 4] = "SEDAN";
    })(BodyType = TS.BodyType || (TS.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass[CarClass["LOWEND"] = 0] = "LOWEND";
        CarClass[CarClass["DEFAULT"] = 1] = "DEFAULT";
        CarClass[CarClass["HIGHEND"] = 2] = "HIGHEND";
    })(CarClass = TS.CarClass || (TS.CarClass = {}));
    class Car {
        constructor(brand, model, year, VIN, regNumber, ownerInfo, bodyType, carClass) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._regNumber = regNumber;
            this._ownerInfo = ownerInfo;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        get brand() { return this._brand; }
        set brand(value) { this._brand = value; }
        get model() { return this._model; }
        set model(value) { this._model = value; }
        get year() { return this._year; }
        set year(value) { this._year = value; }
        get VIN() { return this._VIN; }
        set VIN(value) { this._VIN = value; }
        get regNumber() { return this._regNumber; }
        set regNumber(value) { this._regNumber = value; }
        get ownerInfo() { return this._ownerInfo; }
        set ownerInfo(value) { this._ownerInfo = value; }
        get bodyType() { return this._bodyType; }
        set bodyType(value) { this._bodyType = value; }
        get carClass() { return this._carClass; }
        set carClass(value) { this._carClass = value; }
        displayVehicle() {
            console.log('Марка:', this._brand);
            console.log('Модель:', this._model);
            console.log('Год выпуска:', this._year);
            console.log('VIN-номер:', this._VIN);
            console.log('Регистрационный номер:', this._regNumber);
            console.log('Тип кузова:', BodyType[this._bodyType]);
            console.log('Класс автомобиля:', CarClass[this._carClass]);
        }
    }
    TS.Car = Car;
    class Motorcycle {
        constructor(brand, model, year, VIN, regNumber, ownerInfo, frameType, isSport) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._regNumber = regNumber;
            this._ownerInfo = ownerInfo;
            this._frameType = frameType;
            this._isSport = isSport;
        }
        get brand() { return this._brand; }
        set brand(value) { this._brand = value; }
        get model() { return this._model; }
        set model(value) { this._model = value; }
        get year() { return this._year; }
        set year(value) { this._year = value; }
        get VIN() { return this._VIN; }
        set VIN(value) { this._VIN = value; }
        get regNumber() { return this._regNumber; }
        set regNumber(value) { this._regNumber = value; }
        get ownerInfo() { return this._ownerInfo; }
        set ownerInfo(value) { this._ownerInfo = value; }
        get frameType() { return this._frameType; }
        set frameType(value) { this._frameType = value; }
        get isSport() { return this._isSport; }
        set isSport(value) { this._isSport = value; }
        displayVehicle() {
            console.log('Марка:', this._brand);
            console.log('Модель:', this._model);
            console.log('Год выпуска:', this._year);
            console.log('VIN-номер:', this._VIN);
            console.log('Регистрационный номер:', this._regNumber);
            console.log('Тип рамы:', this._frameType);
            console.log('Спортивный?:', this._isSport ? "Да" : "Нет");
        }
    }
    TS.Motorcycle = Motorcycle;
    class Garage {
        constructor(creationDate, vehicles) {
            this._creationDate = creationDate;
            this._vehicles = vehicles;
        }
        get creationDate() { return this._creationDate; }
        set creationDate(value) { this._creationDate = value; }
        get vehicles() { return this._vehicles; }
        set vehicles(value) { this._vehicles = value; }
        displayVehicles() { return this.vehicles; }
    }
    TS.Garage = Garage;
})(TS || (exports.TS = TS = {}));
