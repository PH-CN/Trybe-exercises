"use strict";
class Student {
    constructor(r, n, t, a) {
        this.registration = r;
        this.name = n;
        this.testGrades = t;
        this.assingmentGrades = a;
    }
    sumAll() {
        const testNotesSum = this.testGrades.reduce((acc, cur) => {
            return acc += cur;
        }, 0);
        const assingmentNotesSum = this.assingmentGrades.reduce((acc, cur) => {
            return acc += cur;
        }, 0);
        console.log(testNotesSum + assingmentNotesSum);
        return testNotesSum + assingmentNotesSum;
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
