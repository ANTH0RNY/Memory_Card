export default class IdGenerator
{
    private static _count:number=0;
    static get id():number
    {
          this._count++
          return this._count
    }
}