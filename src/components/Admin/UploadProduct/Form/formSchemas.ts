import * as z from "zod";

// Zod Schemas
export const productDetailsSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  aboutProduct: z.string().min(10, "Product description must be at least 10 characters"),
});

export const productSpecsSchema = z.object({
  productWeight: z.string().min(1, "Product weight is required"),
  bagsPerUnit: z.number().min(1, "Bags per unit must be at least 1"),
  pricePerUnit: z.string().min(1, "Price per unit is required"),
  quantity: z.string().min(1, "Quantity is required"),
});

// Infer types from schemas
type ProductDetailsFields = keyof z.infer<typeof productDetailsSchema>;
type ProductSpecsFields = keyof z.infer<typeof productSpecsSchema>;

// Form field configurations
export const productDetailsFields: {
  name: ProductDetailsFields;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
  rows?: number;
}[] = [
  {
    name: "productName",
    label: "Product Name",
    placeholder: "Enter Product name",
    type: "input",
  },
  {
    name: "aboutProduct",
    label: "About Product",
    placeholder: "Enter Product Bio",
    type: "textarea",
    rows: 4,
  },
];

export const productSpecsFields: {
  name: ProductSpecsFields;
  label: string;
  placeholder: string;
  type: "input" | "number";
  prefix?: string;
  suffix?: string;
  helperText?: string;
  defaultValue?: number;
}[] = [
  {
    name: "productWeight",
    label: "Product Weight",
    placeholder: "Enter weight of product",
    type: "input",
    suffix: "KG",
  },
  {
    name: "bagsPerUnit",
    label: "Bags per Unit",
    placeholder: "Number of Bags",
    type: "number",
    suffix: "Unit",
    defaultValue: 1,
  },
  {
    name: "pricePerUnit",
    label: "Price per Unit",
    placeholder: "Enter weight of product",
    type: "input",
    suffix: "£",
  },
  {
    name: "quantity",
    label: "Quantity",
    placeholder: "1 - 20",
    type: "input",
    suffix: "Unit(s)",
    helperText: "(Number of units to be uploaded)",
  },
];
