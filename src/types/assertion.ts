// type assertions

// let phone = document.getElementById("phone") as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById("phone") ;  //another syntax instead of using AS
phone.value; 