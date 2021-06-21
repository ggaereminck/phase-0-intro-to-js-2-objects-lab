// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    
    newObject[key] = value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign (employee, {[key]: value});
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign ({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    delete [key]
    return employee
}