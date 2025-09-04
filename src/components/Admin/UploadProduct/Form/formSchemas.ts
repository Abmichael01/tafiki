import * as z from "zod";

// Zod Schemas
export const productDetailsSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(10, "Product description must be at least 10 characters"),
});

export const productSpecsSchema = z.object({
  price: z.string().min(1, "Price is required"),
  stock_quantity: z.string().min(1, "Stock quantity is required"),
  roi_percentage: z.string().min(1, "ROI percentage is required"),
  quantity_per_unit: z.string().min(1, "Quantity per unit is required"),
  kg_per_unit: z.string().min(1, "KG per unit is required"),
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
    name: "company_name",
    label: "Company Name",
    placeholder: "Enter Company name",
    type: "input",
  },
  {
    name: "name",
    label: "Product Name",
    placeholder: "Enter Product name",
    type: "input",
  },
  {
    name: "description",
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
    name: "price",
    label: "Price",
    placeholder: "Enter product price",
    type: "input",
    suffix: "$",
  },
  {
    name: "stock_quantity",
    label: "Stock Quantity",
    placeholder: "Enter available stock",
    type: "input",
    suffix: "Units",
  },
  {
    name: "roi_percentage",
    label: "ROI Percentage",
    placeholder: "Enter ROI percentage",
    type: "input",
    suffix: "%",
  },
  {
    name: "quantity_per_unit",
    label: "Quantity per Unit",
    placeholder: "Enter quantity per unit",
    type: "input",
    suffix: "Units",
  },
  {
    name: "kg_per_unit",
    label: "KG per Unit",
    placeholder: "Enter KG per unit",
    type: "input",
    suffix: "KG",
  },
];
