"use strict";
class Student {
    constructor(r, n, t, a) {
        this._registration = r;
        this._name = n;
        this._testGrades = t;
        this._assingmentGrades = a;
    }
    get registration() {
        return this._registration;
    }
    get name() {
        return this._name;
    }
    get testGrades() {
        return this._testGrades;
    }
    get assignmentGrades() {
        return this._assingmentGrades;
    }
    sumAll() {
        const testGradesSum = this._testGrades.reduce((acc, cur) => {
            return acc += cur;
        }, 0);
        const assingmentGradesSum = this._assingmentGrades.reduce((acc, cur) => {
            return acc += cur;
        }, 0);
        console.log(testGradesSum + assingmentGradesSum);
        return testGradesSum + assingmentGradesSum;
    }
    calculateAverage() {
        const gradesSum = this.sumAll();
        const average = gradesSum / 6;
        console.log(Math.round(average));
        return Math.round(average);
    }
}
const s1 = new Student(123, 'joãozinho', [10, 9, 9, 9], [5, 5]);
s1.calculateAverage();
