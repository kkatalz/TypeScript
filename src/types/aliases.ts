type EmployeeAlias = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
    
}

let employeeAlias: EmployeeAlias = {
    id:1,
    name: "Zlata",
    retire: (date : Date) => {
        console.log(date);
    }
}