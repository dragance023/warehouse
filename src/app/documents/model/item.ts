export class Item {
    _id: number;
    price: number;
    documents: number;
    article: string;
    quantity: number;


	constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.price = obj && obj.price || null;
        this.documents = obj && obj.documents || null;
        this.article = obj && obj.article || null;
        this.quantity = obj && obj.quantity || null;
	}

}








