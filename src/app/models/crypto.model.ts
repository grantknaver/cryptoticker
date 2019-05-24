/**
 * Schema for the product data retrieved by the product service
 *
 * @export
 * @class Product
 */
export class Crypto {

  constructor(public name: string,
    public price: number,
    public imageUrl: string,
    public marketCap: number,
    public change: number,
    public _id: string) { }

    public static cryptoTranslate(responseData: any) {
      return new Crypto(
          responseData.name,
          parseFloat(responseData.price),
          responseData.imageUrl,
          parseFloat(responseData.marketCap),
          parseFloat(responseData.change),
          responseData._id);
  }
}
