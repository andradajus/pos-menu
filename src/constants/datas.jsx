export const CompanyDetails = {
  name: "Simple CRUD Table",
  description1:
    "Step into the culinary realm of Brain Bistro, where gastronomy meets genius. Our menu is a symphony of flavors designed to stimulate your taste buds and challenge your culinary perceptions. Immerse yourself in a dining experience that celebrates innovation and creativity. From inventive appetizers to thoughtfully crafted main courses, every dish is a masterpiece. At Brain Bistro, we believe that great food is a feast for both the mind and the senses. Come dine with us and embark on a culinary journey that promises to tantalize your taste buds and spark your imagination.",
  tagline1: "Savor the Intellect, Delight the Palate",
  description2:
    "Discover a fusion of culinary delights at Brain Bistro, where each dish is a symphony of flavors meticulously crafted to create a memorable dining experience. Our commitment to innovation and quality ensures that every visit is a journey through creativity and gastronomic excellence.",
  tagline2: "Where Taste Meets Innovation",
  description3:
    "Embark on a gastronomic adventure at Brain Bistro, where our menu is a testament to creativity and craftsmanship. From delectable appetizers to exquisite main courses, our culinary offerings are designed to tantalize your taste buds. Join us in celebrating the art of food and experience flavors that transcend the ordinary.",
  tagline3: "Culinary Excellence Redefined",
  description4:
    "Indulge your senses at Brain Bistro, a haven for food enthusiasts seeking an extraordinary dining experience. Our menu reflects a passion for innovation, and each dish is a masterpiece that tells a story of creativity and culinary expertise. Join us and savor the essence of culinary brilliance.",
  tagline4: "Elevate Your Palate, Ignite Your Senses",
  description5:
    "At Brain Bistro, we invite you to immerse yourself in a world of culinary innovation. Our menu is a fusion of creativity and tradition, offering a unique dining experience for those who appreciate the artistry of food. Join us on a journey where every bite is an exploration of flavor and imagination.",
  tagline5: "Artistry in Every Bite",
};

export const NavbarItems = {
  menu: { label: "Menu", route: "/Menu" },
};

export const MenuTableItems = [
  {
    label: "Add Product",
    onClick: "addProduct",
  },
  {
    label: "Add Sizes",
    onClick: "addSizes",
  },
  {
    label: "Add Category",
    onClick: "addCategory",
  },
];

export const MenuHeaderItems = [
  {
    label: "ID",
    field: "id",
  },
  {
    label: "Name",
    field: "name",
    onClickAsc: true,
    onClickDesc: true,
  },
  {
    label: "Description",
    field: "description",
    onClickAsc: true,
    onClickDesc: true,
  },
  {
    label: "Category",
    field: "category",
    onClickAsc: true,
    onClickDesc: true,
  },
  {
    label: "Price",
    field: "price",
  },
  {
    label: "Stock",
    field: "stock",
  },
  {
    label: "Sizes",
  },
  {
    label: "Actions",
  },
];