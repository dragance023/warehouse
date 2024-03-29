export class Article {
    _id: number;
    name: string;
    code: string;

	constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null
        this.code = obj && obj.code || null
	}

}