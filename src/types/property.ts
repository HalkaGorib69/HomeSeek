export interface PropertyField {
  label: string;
  value: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  images: string[];
  fields: PropertyField[];
}
