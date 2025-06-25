// using of unknown type is prefered to using any type.

function render (document : unknown){
    // Narrowing
    if (typeof document === "string"){
        document.toUpperCase();
    }
}