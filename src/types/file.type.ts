export class FileModel {

    private _id: string;
    private _ownerId: string;
    private _folderId: string;
    private _name: string;
    private _contentType: string;
    private _contentSize: number;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(
        id: string,
        ownerId: string,
        folderId: string,
        name: string,
        contentType: string,
        contentSize: number,
        createdAt: string,
        updatedAt: string
    ) {
        this._id = id
        this._ownerId = ownerId
        this._folderId = folderId
        this._name = name
        this._contentType = contentType
        this._contentSize = contentSize
        this._createdAt = createdAt
        this._updatedAt = updatedAt
    }

    get id(): string {
        return this._id;
    }

    get ownerId(): string {
        return this._ownerId;
    }

    get folderId(): string {
        return this._folderId;
    }

    get name(): string {
        return this._name;
    }

    get contentType(): string {
        return this._contentType;
    }

    get contentSize(): number {
        return this._contentSize;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }

}