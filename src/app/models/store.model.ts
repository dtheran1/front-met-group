export interface Store {
  id: string;
  name: string;
  items: Item[];
}

export type Item = {
  id: string;
  name: string;
  price: number;
  store_id: string;
}

export type RequestItem = Omit<Item, 'id' | 'name'>;

export interface ResponseStore {
  stores: Store[];
}
