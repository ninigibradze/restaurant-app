import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

const blogPosts = [
  {
    id: 1,
    imgUrl: images.blog1,
    title: "Tips For Prepping And Caring For Your Grill",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Tincidunt pharetra ut lobortis id.
    Commodo sit libero lacus a egestas penatibus pretium quis lorem.
      `,
  },
  {
    id: 2,
    imgUrl: images.blog2,
    title: "Summer Cocktails And Mocktails",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Tincidunt pharetra ut lobortis id.
    Commodo sit libero lacus a egestas penatibus pretium quis lorem.
      `,
  },
  {
    id: 3,
    imgUrl: images.blog3,
    title: "How To Make Your Food Photographs Look Aesthetic",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Tincidunt pharetra ut lobortis id.
    Commodo sit libero lacus a egestas penatibus pretium quis lorem.
      `,
  },
  {
    id: 4,
    imgUrl: images.blog4,
    title: "Co-Ordination & Teamwork Tips From A Sous Chef",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Tincidunt pharetra ut lobortis id.
    Commodo sit libero lacus a egestas penatibus pretium quis lorem.
      `,
  },
  {
    id: 5,
    imgUrl: images.blog5,
    title: "Will Food Restaurant Ever Rule The World?",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Tincidunt pharetra ut lobortis id.
    Commodo sit libero lacus a egestas penatibus pretium quis lorem.
      `,
  },
  {
    id: 6,
    imgUrl: images.blog6,
    title: "5 Secrets That Experts Of Food Restaurant You Don’t Know",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Tincidunt pharetra ut lobortis id.
    Commodo sit libero lacus a egestas penatibus pretium quis lorem.
      `,
  },
];

export default { wines, cocktails, awards, blogPosts };
