export interface Store {
  id: number;
  name: string;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  store_id: number;
}
