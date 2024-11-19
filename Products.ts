// Task 4
// declare interface for restrict product object 
interface Product {
    name: string,
    price: number;
}
// declare CalcTotal function for handel total prices
const CalcTotal = (products: Product[]): number => {
    // using reduce method for access all items inside products array
    return products.reduce((total, product) => total + product.price, 0);
}

// declare product list a consideration Product interface
const ProductList: Product[] = [  
    { name: "pro1", price: 1000 },
    { name: "pro2", price: 500 },
    { name: "pro3", price: 150 }];

    // print result 
console.log(CalcTotal(ProductList));

// ===================================================================================================

// Task 5
// declare CheckVaildEmail function for chack email validation 
const CheckVaildEmail = (email: string): boolean => {
    // create pattarn for text email
    const pattarn = /^[a-zA-Z0-9_.-]+@[a-zA-Z-0-9_.-]+.com$/;
    // Test the email
    return pattarn.test(email)
}
// proint result 
console.log(CheckVaildEmail('majdjihad@gmail.com'));
