export type SliderItemProps = {
  heroImg: string;
};

export type CarouselItemType = {
  backdrop: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: "For Sale" | "For Rent";
  price: number;
};

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface PropertyType {
  id: number;
  backdrop: string;
  title: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  status: "For Sale" | "For Rent";
  price: number;
}

export interface FeaturedPropertyType extends PropertyType {
  description: string;
}

export interface ForRentPropertyType extends FeaturedPropertyType {
  featured: boolean;
  trendy: boolean;
}

export interface RecentPropertyType extends PropertyType {
  featured: boolean;
  hot: boolean;
  photos: number;
  videos: number;
  location: string;
  addedDate: string;
  agent: {
    name: string;
    type: string;
    photo: string;
  };
}

export interface ForSalePropertyType extends RecentPropertyType {
  type: string;
}

export interface AgentType {
  id: number;
  name: string;
  photo: string;
  email: string;
  phone: string;
  listedPropertiesCount: number;
}

export interface NewsAndUpdateType {
  id: number;
  photo: string;
  date: string;
  category: string;
  title: string;
  description: string;
  author: string;
}

export interface AmazingFeatureType {
  id: number;
  icon: string;
  title: string;
  description: string;
}
