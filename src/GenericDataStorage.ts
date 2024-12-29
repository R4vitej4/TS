/*
Create a DataStorage<T> class that can:

Store items of any type using a generic.
Provide methods to:
Add an item: addItem(item: T): void.
Remove an item: removeItem(item: T): void.
Retrieve all items: getItems(): T[].
Additional Requirements:
If the same item is added multiple times, it should still appear multiple times in the storage.
The removeItem method should remove only the first occurrence of the item.
*/


class DataStorage<T>{
    private items:T[]=[];

    addItem(item:T):void{
        this.items.push(item);
        console.log(`item : ${item} added successfully`);
    }

    removeItem(item:T):void{
        const index = this.items.indexOf(item);
        if(index!==-1){
            this.items.splice(index,1);
            console.log(`Item : ${item} removed successfully`);
        }
        else{
            console.log(`Item: ${item} not found`);
        }
    }

    getItems():T[]{
        return this.items;
    }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("Apple");
stringStorage.addItem("Banana");
stringStorage.addItem("Apple");
stringStorage.removeItem("Apple"); // Removes the first occurrence of "Apple"
console.log(stringStorage.getItems()); // Output: ["Banana", "Apple"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems()); // Output: [2]

