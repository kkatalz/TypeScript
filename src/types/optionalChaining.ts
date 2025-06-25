type Customer = {
    birthday?: Date
};

function getCustomer (id: number) : Customer | null {
    return id === 0 ? null : { birthday : new Date()}
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());


// Optional call
let log: any = null;
log?.('a'); //if log is refencing an actual function, the 'a' parameter is valid. otherwise, we will get undefined.