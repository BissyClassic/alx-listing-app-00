export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string
    };
    image: string;
    discount: string;
}
// interfaces/index.ts
export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

