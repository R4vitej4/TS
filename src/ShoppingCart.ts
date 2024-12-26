type NewProduct ={
    id: number,
    name:string,
    price:number,
    category?:string
}

interface CartItem{
    product: NewProduct,
    quantity: number
}

class Shop{
    private CartItems:CartItem[] =[];

    addProduct(product: NewProduct, quantity: number):void {
        const existingItem = this.CartItems.find(item=>item.product.id === product.id);
        if(existingItem){
            existingItem.quantity+=quantity;
        }
        else{
            this.CartItems.push({product,quantity});
        }
        console.log(`Added product: ${product.name} , quantity: ${quantity}`)
    }

    removeProduct(productId: number):void {
        const initiallen = this.CartItems.length;
        this.CartItems = this.CartItems.filter(item=>item.product.id !== productId);
        if(this.CartItems.length < initiallen){
            console.log(`Removed product with ID : ${productId}`);
        }
        else{
            console.log(`Product with ID: ${productId} not found in the cart`);
        }
    }

    getTotalPrice():number{
        return this.CartItems.reduce((total,item)=>total+item.product.price * item.quantity , 0);
    }

}


const shop = new Shop();

const product1: NewProduct = { id: 1, name: "Laptop", price: 10000};
const product2: NewProduct = { id: 2, name: "Mobile", price: 5000};
const product3: NewProduct = { id: 3, name: "Bag", price: 1000};


shop.addProduct(product1, 1);
shop.addProduct(product2, 2);
shop.addProduct(product3, 1);

shop.removeProduct(2);

console.log(`Total price : ${shop.getTotalPrice()}`);