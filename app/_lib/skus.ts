export type Sku = {
  code: string;
  name: string;
  description: string;
  image_url: string;
  amount_cents: number;
  formatted_amount: string;
  compare_at_amount_cents?: number;
  formatted_compare_at_amount?: string;
};

export const skus: Sku[] = [
  {
    code: "5PANECAP000000FFFFFFXXXX",
    name: "Black Five-Panel Cap with White Logo",
    description:
      "Soft-structured, five-panel, low-profile cap. 100% cotton, metal eyelets, nylon strap clip closure.",
    image_url:
      "https://data.commercelayer.app/seeder/images/skus/5PANECAP000000FFFFFFXXXX_FLAT.png",
    amount_cents: 2600,
    formatted_amount: "€26,00",
    compare_at_amount_cents: 3770,
    formatted_compare_at_amount: "€37,70",
  },
  {
    code: "5PANECAP9D9CA1FFFFFFXXXX",
    name: "Gray Five-Panel Cap with White Logo",
    description:
      "Soft-structured, five-panel, low-profile cap. 100% cotton, metal eyelets, nylon strap clip closure.",
    image_url:
      "https://data.commercelayer.app/seeder/images/skus/5PANECAP9D9CA1FFFFFFXXXX_FLAT.png",
    amount_cents: 2600,
    formatted_amount: "€26,00",
  },
  {
    code: "APRONXXX000000FFFFFFXXXX",
    name: "Black Apron with White Logo",
    description:
      "This apron has a neck loop and long ties that are easy to adjust for any size. The two front pockets provide additional space for some much-needed cooking utensils, and together with our embroidered logo give the apron a sleek premium look.",
    image_url:
      "https://data.commercelayer.app/seeder/images/skus/APRONXXX000000FFFFFFXXXX_FLAT.png",
    amount_cents: 1700,
    formatted_amount: "€17,00",
    compare_at_amount_cents: 2330,
    formatted_compare_at_amount: "€23,30",
  },
  {
    code: "APRONXXXFFFFFF000000XXXX",
    name: "White Apron with Black Logo",
    description:
      "This apron has a neck loop and long ties that are easy to adjust for any size. The two front pockets provide additional space for some much-needed cooking utensils, and together with our embroidered logo give the apron a sleek premium look.",
    image_url:
      "https://data.commercelayer.app/seeder/images/skus/APRONXXXFFFFFF000000XXXX_FLAT.png",
    amount_cents: 1700,
    formatted_amount: "€17,00",
    compare_at_amount_cents: 2330,
    formatted_compare_at_amount: "€23,30",
  },
  {
    code: "BABYBIBXA19D9D000000XXXX",
    name: "Baby's Gray Bib with Black Logo",
    description:
      "Avoid getting food stains on child's clothes with this baby bib. The reinforced hook & loop closure makes it easy to put on, but hard for baby to take off. 4x4\" embroidered logo.",
    image_url:
      "https://data.commercelayer.app/seeder/images/skus/BABYBIBXA19D9D000000XXXX_FLAT.png",
    amount_cents: 750,
    formatted_amount: "€7,50",
    compare_at_amount_cents: 1200,
    formatted_compare_at_amount: "€12,00",
  },
  {
    code: "BACKPACK000000FFFFFFXXXX",
    name: "Black Backpack with White Logo",
    description:
      "Medium size backpack with plenty of room plus a big inner pocket, a separate section for a 15'' laptop, a front pocket, and a hidden pocket at the back. Made of a water-resistant material. The soft, padded mesh material on the back and the black handles make it perfect for daily use or sports activities.",
    image_url:
      "https://data.commercelayer.app/seeder/images/skus/BACKPACK000000FFFFFFXXXX_FLAT.png",
    amount_cents: 8000,
    formatted_amount: "€80,00",
    compare_at_amount_cents: 9900,
    formatted_compare_at_amount: "€99,00",
  },
];
