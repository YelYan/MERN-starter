import { DataTable } from "@/components/ui/data-table";
import { columns } from "../components/dashboard-products/columns";
import type { Product } from "../components/dashboard-products/columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const data: Product[] = [
  {
    id: "prod_001",
    name: "Quantum Laptop Pro X",
    sku: "QLPX-345",
    price: 1899.99,
    stock: 12,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: "prod_002",
    name: "Organic Cotton T-Shirt (M)",
    sku: "COT-TSH-M",
    price: 35.0,
    stock: 450,
    category: "Apparel",
    status: "In Stock",
  },
  {
    id: "prod_003",
    name: "Stainless Steel Coffee Maker",
    sku: "SSCM-200",
    price: 129.5,
    stock: 4,
    category: "Home Goods",
    status: "Low Stock",
  },
  {
    id: "prod_004",
    name: "Advanced Data Analysis Ebook",
    sku: "EBOOK-ADV",
    price: 79.0,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
  {
    id: "prod_005",
    name: "Ergonomic Gaming Mouse",
    sku: "EGM-007",
    price: 89.99,
    stock: 0,
    category: "Electronics",
    status: "Out of Stock",
  },
  // --- 25 New Entries ---
  {
    id: "prod_006",
    name: "4K 65-inch Smart TV",
    sku: "TV65-4K-SMT",
    price: 799.99,
    stock: 35,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: "prod_007",
    name: "Noise Cancelling Headphones V2",
    sku: "NCHPV2-BLK",
    price: 249.0,
    stock: 98,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: "prod_008",
    name: "Premium Chef Knife Set",
    sku: "KNFS-PCH",
    price: 199.99,
    stock: 7,
    category: "Home Goods",
    status: "Low Stock",
  },
  {
    id: "prod_009",
    name: "Sustainable Bamboo Cutting Board",
    sku: "BB-CUT-01",
    price: 24.5,
    stock: 150,
    category: "Home Goods",
    status: "In Stock",
  },
  {
    id: "prod_010",
    name: "Winter Wool Coat (L, Navy)",
    sku: "WWC-NVY-L",
    price: 150.0,
    stock: 0,
    category: "Apparel",
    status: "Out of Stock",
  },
  {
    id: "prod_011",
    name: "AI-Powered CRM Subscription (1 Yr)",
    sku: "CRM-AIP-YR",
    price: 499.0,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
  {
    id: "prod_012",
    name: "Portable Bluetooth Speaker (Red)",
    sku: "PBS-RED-MINI",
    price: 45.99,
    stock: 200,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: "prod_013",
    name: "Slim Fit Jeans (32/32)",
    sku: "SFJ-DEN-3232",
    price: 75.0,
    stock: 15,
    category: "Apparel",
    status: "In Stock",
  },
  {
    id: "prod_014",
    name: "Smart Home Security Camera",
    sku: "SHSC-IR-CAM",
    price: 85.0,
    stock: 2,
    category: "Home Goods",
    status: "Low Stock",
  },
  {
    id: "prod_015",
    name: "Web Development Masterclass",
    sku: "WDM-MCL-23",
    price: 19.99,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
  {
    id: "prod_016",
    name: "Mechanical Gaming Keyboard",
    sku: "GMK-RGB-FAST",
    price: 135.0,
    stock: 50,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: "prod_017",
    name: "Graphic Design Software License",
    sku: "GDS-LIC-PERM",
    price: 299.0,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
  {
    id: "prod_018",
    name: "Summer Linen Dress (S, Yellow)",
    sku: "SLD-YLW-S",
    price: 65.0,
    stock: 1,
    category: "Apparel",
    status: "Low Stock",
  },
  {
    id: "prod_019",
    name: "Rechargeable LED Desk Lamp",
    sku: "RDL-LED-WHI",
    price: 39.99,
    stock: 120,
    category: "Home Goods",
    status: "In Stock",
  },
  {
    id: "prod_020",
    name: "Virtual Reality Headset V3",
    sku: "VRH-V3-ADV",
    price: 599.0,
    stock: 0,
    category: "Electronics",
    status: "Out of Stock",
  },
  {
    id: "prod_021",
    name: "Basic Python Programming Course",
    sku: "CPP-BPC-24",
    price: 29.99,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
  {
    id: "prod_022",
    name: "Weighted Blanket (15 lbs)",
    sku: "WBL-GREY-15",
    price: 75.0,
    stock: 10,
    category: "Home Goods",
    status: "In Stock",
  },
  {
    id: "prod_023",
    name: "Running Shoes (Size 10, Blue)",
    sku: "RSH-BLU-10",
    price: 110.0,
    stock: 8,
    category: "Apparel",
    status: "Low Stock",
  },
  {
    id: "prod_024",
    name: "External 2TB SSD",
    sku: "SSD-EXT-2TB",
    price: 149.99,
    stock: 20,
    category: "Electronics",
    status: "In Stock",
  },
  {
    id: "prod_025",
    name: "IoT Development Kit",
    sku: "IOT-DEVK-01",
    price: 175.0,
    stock: 3,
    category: "Electronics",
    status: "Low Stock",
  },
  {
    id: "prod_026",
    name: "Cashmere Scarf (Black)",
    sku: "CSF-BLK-LUX",
    price: 95.0,
    stock: 0,
    category: "Apparel",
    status: "Discontinued",
  },
  {
    id: "prod_027",
    name: "Digital Marketing Toolkit",
    sku: "DMT-TKIT-24",
    price: 49.99,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
  {
    id: "prod_028",
    name: "Ceramic Dinner Plate Set (4 pcs)",
    sku: "CPS-CRM-4",
    price: 55.0,
    stock: 60,
    category: "Home Goods",
    status: "In Stock",
  },
  {
    id: "prod_029",
    name: "Modular Desk Organizer",
    sku: "MDO-ORG-GRAY",
    price: 32.0,
    stock: 1,
    category: "Home Goods",
    status: "Low Stock",
  },
  {
    id: "prod_030",
    name: "Team Collaboration Software (Monthly)",
    sku: "TCS-SW-MTH",
    price: 12.0,
    stock: 999,
    category: "Software",
    status: "In Stock",
  },
];

const DashboardProducts = () => {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="text-xl font-medium container">Product Lists</h3>
      <div className="container py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DashboardProducts;
