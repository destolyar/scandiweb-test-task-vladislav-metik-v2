import { Currency, PickedAttribute, ProductPageProduct } from "../../../../enities/interfaces/data";

export interface ProductInfoProps {
  product: ProductPageProduct,
  currency: Currency,
}

export interface ProductInfoState {
  price: number,
  symbol: string
  pickedAttributes: PickedAttribute[]
}