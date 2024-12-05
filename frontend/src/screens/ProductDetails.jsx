import React, { useState } from "react";
import productsData from "../data/products"
import { FaShoppingCart, FaHeart} from 'react-icons/fa';

import { Link } from "react-router-dom";


//  const productsData = [
//  {
//    id: 1,
//    name: "OVAL MINI CROSSBODY BAG",
//    pictures: ["product/bags/bag-01-front.jpg", "product/bags/bag-01-back.jpg"],
//    stock: 32,
//    price: 2290,
//    discount: 500,
//    salePrice: 1790,
//    description:
//      "Burgundy mini crossbody bag. Oval shape. Adjustable and removable wide shoulder strap. Lined interior. Magnetic clasp closure.",
//    rating: 3,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["purple"],
//  },
//  {
//    id: 2,
//    name: "TIE-DYE FABRIC BUCKET BAG",
//    pictures: ["product/bags/bag-02-front.jpg", "product/bags/bag-02-back.jpg"],
//    stock: 46,
//    price: 3780,
//    discount: 500,
//    salePrice: 1790,
//    description:
//      "Bucket bag in a combination of colours. Tie-dye print on the body. Front pocket. Shoulder straps. Two pockets in lining. Zip closure.",
//    rating: 4,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["Gray", "Red"],
//  },
//  {
//    id: 3,
//    name: "CANVAS TOTE BAG",
//    pictures: ["product/bags/bag-03-front.jpg", "product/bags/bag-03-back.jpg"],
//    stock: 20,
//    price: 4570,
//    discount: 500,
//    salePrice: 1790,
//    description:
//      "Beige tote bag. Made of natural materials. Canvas exterior. Contrast-coloured trims. Handles with slogan zip pulls. Lined interior with zip pocket.",
//    rating: 4,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["Gray"],
//  },
//  {
//    id: 4,
//    name: "BRAIDED CROSSBODY BAG",
//    pictures: ["product/bags/bag-04-front.jpg", "product/bags/bag-04-back.jpg"],
//    stock: 15,
//    price: 8750,
//    discount: 700,
//    salePrice: 2290,
//    description:
//      "BLACK crossbody bag. Braided exterior featuring decorative seashells,a chain trim and fringing around the front flap. Chain shoulder strap. Lined interior with pocket. Magnetic clasp closure.",
//    rating: 2,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["BLACK"],
//  },
//  {
//    id: 5,
//    name: "CROSSBODY BAG",
//    pictures: ["product/bags/bag-05-front.jpg", "product/bags/bag-05-back.jpg"],
//    stock: 5,
//    price: 4521,
//    discount: 500,
//    salePrice: 1790,
//    description:
//      "Crossbody bag in a combination of colours. Made of natural materials. Jute exterior in contrast materials with a polka dot print. Wooden kiss-lock frame",
//    rating: 3,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["beige"],
//  },
//  {
//    id: 6,
//    name: "MARBLE-EFFECT MINAUDIRE",
//    pictures: ["product/bags/bag-06-front.jpg", "product/bags/bag-06-back.jpg"],
//    stock: 12,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Minaudire in a combination of colours. Marble-effect exterior with circular patterns. Metal detail on the contour. Chain shoulder strap. Lined interior. Metal clasp closure.",
//    rating: 5,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["pink"],
//  },
//  {
//    id: 7,
//    name: "NATURAL GLOSSY BRAIDED CROSSBODY BAG",
//    pictures: ["product/bags/bag-07-front.jpg", "product/bags/bag-07-back.jpg"],
//    stock: 23,
//    price: 2890,
//    discount: 600,
//    salePrice: 2290,
//    description:
//      "Red crossbody bag made of natural materials. Braided body with a glossy finish. Gold metal detail on the front. Shoulder strap. Lined interior. Magnetic clasp with strap closure.",
//    rating: 2,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["Red"],
//  },
//  {
//    id: 8,
//    name: "NATURAL MULTICOLOURED WOVEN HANDBAG",
//    pictures: ["product/bags/bag-08-front.jpg", "product/bags/bag-08-back.jpg"],
//    stock: 34,
//    price: 2890,
//    discount: 600,
//    salePrice: 2290,
//    description:
//      "Multicoloured handbag. Woven body in contrast colours and materials. Metal trim along the edge. Chain shoulder strap. Lined interior. Clasp closure lined with beads.",
//    rating: 5,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["Red"],
//  },
//  {
//    id: 9,
//    name: "BLUE COLLECTION GLITTER MINI CROSSBODY BAG",
//    pictures: ["product/bags/bag-10-front.jpg", "product/bags/bag-10-back.jpg"],
//    stock: 3,
//    price: 2890,
//    discount: 600,
//    salePrice: 2290,
//    description:
//      "Mini crossbody bag available in silver,fuchsia and BLUE. Glittery exterior. Satin-finish handles. Chain shoulder strap. Lined interior. Magnetic clasp closure.",
//    rating: 4,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["BLUE"],
//  },
//  {
//    id: 10,
//    name: "FRINGED TOTE BAG",
//    pictures: ["product/bags/bag-09-front.jpg", "product/bags/bag-09-back.jpg"],
//    stock: 42,
//    price: 4990,
//    discount: 2000,
//    salePrice: 2990,
//    description:
//      "Tan tote bag. Split suede fringing on the exterior. Shoulder straps. Lined interior with pocket. Zip closure.",
//    rating: 3,
//    tags: ["Women", "Bags"],
//    size: ["M", "XL"],
//    category: "Women",
//    colors: ["brown"],
//  },

//  {
//    id: 11,
//    name: "SPORTY HOODIE WITH NEON",
//    pictures: [
//      "product/kidsdress/dress-01-front.jpg",
//      "product/kidsdress/dress-01-back.jpg",
//    ],
//    stock: 15,
//    price: 1590,
//    discount: 318,
//    saleprice: 1272,
//    description:
//      "High neck sweatshirt with long sleeves. Featuring injected zip on the yoke,front pouch pocket with a slogan print and appliqu detail,and print on the back.",
//    rating: 1,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["ORANGE"],
//  },
//  {
//    id: 12,
//    name: "CHAMBRAY KNIT BLAZER",
//    pictures: [
//      "product/kidsdress/dress-02-front.jpg",
//      "product/kidsdress/dress-02-back.jpg",
//    ],
//    stock: 12,
//    price: 2790,
//    discount: 558,
//    saleprice: 2232,
//    description:
//      "Knit blazer with a lapel collar,V-neckline,long sleeves,button fastening and front pockets in contrasting velvet.",
//    rating: 2,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["Gray"],
//  },
//  {
//    id: 13,
//    name: "SLIM FIT STRIPED SHIRT",
//    pictures: [
//      "product/kidsdress/dress-03-front.jpg",
//      "product/kidsdress/dress-03-back.jpg",
//    ],
//    stock: 6,
//    price: 1590,
//    discount: 318,
//    saleprice: 1272,
//    description:
//      "Slim fit smart shirt featuring a regular collar long sleeves with buttoned cuffs,a button-up front and a label appliqu on the inside of the hem.",
//    rating: 4,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["BLUE"],
//  },
//  {
//    id: 14,
//    name: "SLIM FIT TEXTURED SHIRT",
//    pictures: [
//      "product/kidsdress/dress-04-front.jpg",
//      "product/kidsdress/dress-04-back.jpg",
//    ],
//    stock: 11,
//    price: 1590,
//    discount: 318,
//    saleprice: 1272,
//    description:
//      "Slim fit textured smart shirt featuring a regular collar,long sleeves with buttoned cuffs,a button-up front hidden by a placket and a label appliqu on the inside of the hem.",
//    rating: 1,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["Red"],
//  },
//  {
//    id: 15,
//    name: " STAR WARS T-SHIRT",
//    pictures: [
//      "product/kidsdress/dress-05-front.jpg",
//      "product/kidsdress/dress-05-back.jpg",
//    ],
//    stock: 5,
//    price: 990,
//    discount: 198,
//    salePrice: 792,
//    description:
//      "T-shirt with a round neckline and long sleeves. Featuring an all-over  STAR WARS print and label at the hem.",
//    rating: 5,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["BLACK"],
//  },
//  {
//    id: 16,
//    name: "STRIPED T-SHIRT",
//    pictures: [
//      "product/kidsdress/dress-06-front.jpg",
//      "product/kidsdress/dress-06-back.jpg",
//    ],
//    stock: 15,
//    price: 690,
//    discount: 138,
//    salePrice: 552,
//    description:
//      "Round neck T-shirt featuring long sleeves,a striped print and a chest pocket.",
//    rating: 3,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["green"],
//  },
//  {
//    id: 17,
//    name: "SEQUINNED  STAR WARS T-SHIRT",
//    pictures: [
//      "product/kidsdress/dress-07-front.jpg",
//      "product/kidsdress/dress-07-back.jpg",
//    ],
//    stock: 8,
//    price: 1090,
//    discount: 218,
//    salePrice: 872,
//    description:
//      "T-shirt with a round neckline and long sleeves. Featuring a  STAR WARS print on the front with reversible sequins and label at the hem.",
//    rating: 4,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["green"],
//  },
//  {
//    id: 18,
//    name: "LENTICULAR  STAR WARS T-SHIRT",
//    pictures: [
//      "product/kidsdress/dress-08-front.jpg",
//      "product/kidsdress/dress-08-back.jpg",
//    ],
//    stock: 12,
//    price: 1090,
//    discount: 218,
//    salePrice: 872,
//    description:
//      "T-shirt with a round neckline and long sleeves. Featuring a  STAR WARS print on the front with lenticular detail to create the illusion of movement",
//    rating: 2,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["BLUE"],
//  },
//  {
//    id: 19,
//    name: "SPORTY T-SHIRT WITH NEON STRIPES",
//    pictures: [
//      "product/kidsdress/dress-09-front.jpg",
//      "product/kidsdress/dress-09-back.jpg",
//    ],
//    stock: 8,
//    price: 990,
//    discount: 198,
//    salePrice: 792,
//    description:
//      "Long sleeve T-shirt with a round neckline. Featuring a chest pocket and a printed stripe on the front with neon detailing.",
//    rating: 2,
//    tags: ["Kids", "Coats", "Tops", "T-Shirts", "Jeans", "Trousers"],
//    size: ["M", "Y"],
//    category: "Kids",
//    colors: ["Red"],
//  },
//  {
//    id: 20,
//    name: "SNOW CAMOUFLAGE PRINT JACKET",
//    pictures: [
//      "product/mandress/dress-01-front.jpg",
//      "product/mandress/dress-01-back.jpg",
//    ],
//    stock: 8,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Jacket with an adjustable hood in the collar and long sleeves with elastic cuffs. Patch pockets with flaps and contrast taping at waist. Adjustable drawstring hem.",
//    rating: 2,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["Red"],
//  },
//  {
//    id: 21,
//    name: "Jacket WITH POCKETS",
//    pictures: [
//      "product/mandress/dress-02-front.jpg",
//      "product/mandress/dress-02-back.jpg",
//    ],
//    stock: 8,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Shirt-style jacket with long sleeves and buttoned cuffs. Features a faded effect on the seams,patch pockets with flap on the chest and hips and a frayed hem.",
//    rating: 1,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["KHAKI"],
//  },
//  {
//    id: 22,
//    name: "PINSTRIPED DENIM OVERSHIRT",
//    pictures: [
//      "product/mandress/dress-03-front.jpg",
//      "product/mandress/dress-03-back.jpg",
//    ],
//    stock: 7,
//    price: 3990,
//    discount: 2000,
//    salePrice: 1990,
//    description:
//      "Collared overshirt with long sleeves and buttoned cuffs. Featuring a chest patch pocket and a zip-up front.",
//    rating: 1,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["KHAKI"],
//  },
//  {
//    id: 23,
//    name: "BASIC DENIM JACKET",
//    pictures: [
//      "product/mandress/dress-04-front.jpg",
//      "product/mandress/dress-04-back.jpg",
//    ],
//    stock: 6,
//    price: 2790,
//    discount: 900,
//    salePrice: 1890,
//    description:
//      "Straight,long sleeve denim jacket with a shirt collar and buttoned cuffs. Featuring a light fade effect,chest flap pockets,welt pockets at the hip and metal button fastening in the front.",
//    rating: 3,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["Red"],
//  },
//  {
//    id: 24,
//    name: "PATCH OVERSHIRT",
//    pictures: [
//      "product/mandress/dress-05-front.jpg",
//      "product/mandress/dress-05-back.jpg",
//    ],
//    stock: 3,
//    price: 2790,
//    discount: 900,
//    salePrice: 1990,
//    description:
//      "Loose-fitting collared overshirt with long sleeves and buttoned cuffs. Featuring chest patch pockets,faded effect,patch appliqus on the sleeve and button-up fastening on the front.",
//    rating: 3,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["KHAKI"],
//  },
//  {
//    id: 25,
//    name: "Jacket WITH POCKETS",
//    pictures: [
//      "product/mandress/dress-06-front.jpg",
//      "product/mandress/dress-06-back.jpg",
//    ],
//    stock: 5,
//    price: 4990,
//    discount: 1500,
//    salePrice: 3490,
//    description:
//      "Jacket with a high collar,zip detail and a smooth-effect wash. Featuring long sleeves with buttoned cuffs,front patch pockets with flaps on the chest and hips and front button fastening.",
//    rating: 4,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["KHAKI"],
//  },
//  {
//    id: 26,
//    name: "COACH JACKET",
//    pictures: [
//      "product/mandress/dress-07-front.jpg",
//      "product/mandress/dress-07-back.jpg",
//    ],
//    stock: 4,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Padded jacket with a shirt collar,long sleeves and buttoned cuffs. Featuring combined mesh lining with pocket detail,front welt pockets and front snap-button fastening.",
//    rating: 5,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["BLACK"],
//  },
//  {
//    id: 27,
//    name: "TEXTURED WORKER JACKET",
//    pictures: [
//      "product/mandress/dress-08-front.jpg",
//      "product/mandress/dress-08-back.jpg",
//    ],
//    stock: 3,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Long sleeve lightweight jacket with collar. Featuring front patch pockets on chest and hips,contrasting topstitching and metal button fastening in the front.",
//    rating: 4,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["KHAKI"],
//  },
//  {
//    id: 28,
//    name: "FAUX SUEDE OVERSHIRT",
//    pictures: [
//      "product/mandress/dress-09-front.jpg",
//      "product/mandress/dress-09-back.jpg",
//    ],
//    stock: 6,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Long sleeve overshirt with a regular collar and buttoned cuffs. Featuring a chest patch pocket,welt pockets at the hip and snap-button fastening at the front hidden by a placket.",
//    rating: 5,
//    tags: ["Men", "Jacket", "Coats", "Blazers", "Shirts", "T-Shirts", "Jeans"],
//    size: ["S", "M", "L", "XL"],
//    category: "men",
//    colors: ["KHAKI"],
//  },

//  {
//    id: 29,
//    name: "HIGH NECK COAT WITH BELT",
//    pictures: [
//      "product/womandress/dress-01-front.jpg",
//      "product/womandress/dress-01-back.jpg",
//    ],
//    stock: 84,
//    price: 7990,
//    discount: 3000,
//    salePrice: 4990,
//    description:
//      "High neck coat in a wool blend. Featuring long sleeves,front pockets,a belt in matching fabric and button fastening at the front.",
//    rating: 3,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["BLACK"],
//  },
//  {
//    id: 30,
//    name: "CROPPED JACKET WITH SHOULDER PADS",
//    pictures: [
//      "product/womandress/dress-02-front.jpg",
//      "product/womandress/dress-02-back.jpg",
//    ],
//    stock: 128,
//    price: 2790,
//    discount: 800,
//    salePrice: 1990,
//    description:
//      "Cropped denim collared jacket with long sleeves,shoulder pads and metal button fastening in the front.",
//    rating: 4,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["BLUE"],
//  },
//  {
//    id: 31,
//    name: "MASCULINE COAT WITH COMBINED FABRIC",
//    pictures: [
//      "product/womandress/dress-03-front.jpg",
//      "product/womandress/dress-03-back.jpg",
//    ],
//    stock: 234,
//    price: 6990,
//    discount: 4000,
//    salePrice: 3990,
//    description:
//      "Coat with a lapel collar and long sleeves. Featuring front patch pockets with flaps,inside buttoned welt pocket,combined fabric detail,a back vent at the hem and front button fastening.",
//    rating: 5,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["BLACK"],
//  },
//  {
//    id: 32,
//    name: "2-IN-1 DOWN PUFFER JACKET AND REGULAR JACKET",
//    pictures: [
//      "product/womandress/dress-04-front.jpg",
//      "product/womandress/dress-04-back.jpg",
//    ],
//    stock: 94,
//    price: 8990,
//    discount: 4000,
//    salePrice: 4990,
//    description:
//      "Regular jacket featuring a high neck with an inner hood,long sleeves with adjustable hook-and-loop tabs on the cuffs,front patch pockets with snap-button flaps,reflective strips on the pockets and on the back.",
//    rating: 5,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["Red", "BLACK"],
//  },
//  {
//    id: 33,
//    name: "BUTTONED MASCULINE COAT",
//    pictures: [
//      "product/womandress/dress-05-front.jpg",
//      "product/womandress/dress-05-back.jpg",
//    ],
//    stock: 62,
//    price: 8990,
//    discount: 3000,
//    salePrice: 5990,
//    description:
//      "Long sleeve coat with a lapel collar. Featuring front flap pockets and button fastening.",
//    rating: 2,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["grey"],
//  },
//  {
//    id: 34,
//    name: "CONTRAST PUFFER JACKET",
//    pictures: [
//      "product/womandress/dress-06-front.jpg",
//      "product/womandress/dress-06-back.jpg",
//    ],
//    stock: 13,
//    price: 4990,
//    discount: 2000,
//    salePrice: 2990,
//    description:
//      "Jacket featuring a high neck,an adjustable hood,matching long sleeves with elastic cuffs,front welt pockets,an adjustable matching hem and a zip-up front hidden by a snap-button placket.",
//    rating: 3,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["green"],
//  },
//  {
//    id: 35,
//    name: "DENIM VEST",
//    pictures: [
//      "product/womandress/dress-07-front.jpg",
//      "product/womandress/dress-07-back.jpg",
//    ],
//    stock: 8,
//    price: 2590,
//    discount: 600,
//    salePrice: 1990,
//    description:
//      "Short sleeveless waistcoat with a collar. Featuring front patch pockets with flaps and metal button fastening at the front.",
//    rating: 4,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["BLUE"],
//  },
//  {
//    id: 36,
//    name: "MASCULINE HERRINGBONE COAT",
//    pictures: [
//      "product/womandress/dress-08-front.jpg",
//      "product/womandress/dress-08-back.jpg",
//    ],
//    stock: 53,
//    price: 8990,
//    discount: 3000,
//    salePrice: 5990,
//    description:
//      "Coat made in a wool blend. Featuring a lapel collar,long sleeves,pronounced shoulders,jetted front pockets and double-breasted front button fastening.",
//    rating: 5,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["grey"],
//  },
//  {
//    id: 37,
//    name: "BUTTONED WAISTCOAT DRESS",
//    pictures: [
//      "product/womandress/dress-09-front.jpg",
//      "product/womandress/dress-09-back.jpg",
//    ],
//    stock: 47,
//    price: 3990,
//    discount: 1000,
//    salePrice: 2990,
//    description:
//      "Sleeveless waistcoat with a lapel collar and V-neckline. Featuring front flap pockets and a double-breasted button fastening.",
//    rating: 3,
//    tags: [
//      "Coats",
//      "Jackets",
//      "Dresses",
//      "Jumpsuits",
//      "Tops",
//      "Shirts",
//      "Jeans",
//      "Shorts",
//      "Trousers",
//      "T-Shirts",
//    ],
//    size: ["XS", "S", "M", "L", "XL"],
//    category: "Women",
//    colors: ["BLUE"],
//  },
// ];

  

const ProductFilter = () => {
  const [filters, setFilters] = useState({
    price: 10000, // Default price filter
    category: "",
    colors: "",
    size: "",
  });

  const handleFilterChange = (e) => {
    const { name, value, type } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : +value,
    }));
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      product.price <= filters.price &&
      (filters.category ? product.category === filters.category : true) &&
      (filters.colors ? product.colors[0] === filters.colors : true) &&
      (filters.size ? product.size[0] === filters.size : true)
    );
  });

  return (
<div style={{ display: "flex", gap: "25px", padding: "20px" }}>
      {/* Left Sidebar for Filters */}
                            <div style={{ flex: "1", maxWidth: "400px"}}>
                                <h3>Filters</h3>

                                {/* Filter by Price */}
                                <div  style={{
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        padding: "10px",
                                        margin:"15px"
                                    }}>
                                <h4 style={{ textAlign: "center",marginBottom: "15px"}}>Filter by Price</h4>
                                <input
                                    type="range"
                                    name="price"
                                    min="500"
                                    max="10000"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                    style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
                                />
                                <span>Up to {filters.price}</span>
                                </div>

                                {/* Filter by Category */}
                                <div  style={{
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        padding: "10px",
                                        margin:"15px"
                                        
                                    }}>
                                <h4 style={{ textAlign: "center",marginBottom: "15px"}}>Filter by Categories</h4>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="category"
                                    value="Women"
                                    onChange={handleFilterChange}
                                    />
                                    Women
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="category"
                                    value="Kids"
                                    onChange={handleFilterChange}
                                    />
                                    Kids
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="category"
                                    value="men"
                                    onChange={handleFilterChange}

                                    />
                                    men
                                </label>
                                </div>

                                {/* Filter by Color */}
                                <div  style={{
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        padding: "10px",
                                        margin:"15px"
                                    }}>
                                <div><h4 style={{ textAlign: "center",marginBottom: "15px"}}>Filter by Color</h4></div>
                                <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                            gap: "10px", // Space between items
                            }}>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="purple"
                                    onChange={handleFilterChange}
                                    />
                                    purple
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="Gray"
                                    onChange={handleFilterChange}
                                    />
                                    Gray
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="Red"
                                    onChange={handleFilterChange}
                                    />
                                    Red
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="BLACK"
                                    onChange={handleFilterChange}
                                    />
                                    BLACK
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="beige"
                                    onChange={handleFilterChange}
                                    />
                                    beige
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="Pink"
                                    onChange={handleFilterChange}
                                    />
                                    Pink
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="BLUE"
                                    onChange={handleFilterChange}
                                    />
                                    BLUE
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="brown"
                                    onChange={handleFilterChange}
                                    />
                                    brown
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="ORANGE"
                                    onChange={handleFilterChange}
                                    />
                                    ORANGE
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="green"
                                    onChange={handleFilterChange}
                                    />
                                    green
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="KHAKI"
                                    onChange={handleFilterChange}
                                    />
                                    KHAKI
                                </label>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                    <input
                                    type="radio"
                                    name="colors"
                                    value="Grey"
                                    onChange={handleFilterChange}
                                    />
                                    Grey
                                </label>
                                </div>
                                </div>

                                {/* Filter by Size */}
                                    <div  style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            padding: "10px",
                                            margin:"15px",
                                        }}>
                                <div><h4 style={{ textAlign: "center", marginBottom:"30px"}}>Filter by Size</h4></div>
                                <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                            gap: "10px", // Space between items
                            }}>
                                <label style={{ display: "block", marginBottom: "15px" }}>
                                        <input
                                        type="radio"
                                        name="size"
                                        value="M"
                                        onChange={handleFilterChange}
                                        />
                                        M
                                    </label>
                                    <label style={{ display: "block", marginBottom: "15px" }}>
                                        <input
                                        type="radio"
                                        name="size"
                                        value="Y"
                                        onChange={handleFilterChange}
                                        />
                                        Y
                                    </label>
                                    <label style={{ display: "block", marginBottom: "15px" }}>
                                        <input
                                        type="radio"
                                        name="size"
                                        value="L"
                                        onChange={handleFilterChange}
                                        />
                                        L
                                    </label>
                                    <label style={{ display: "block", marginBottom: "15px" }}>
                                        <input
                                        type="radio"
                                        name="size"
                                        value="XL"
                                        onChange={handleFilterChange}
                                        />
                                        XL
                                    </label>
                                    <label style={{ display: "block", marginBottom: "15px" }}>
                                        <input
                                        type="radio"
                                        name="size"
                                        value="S"
                                        onChange={handleFilterChange}
                                        />
                                        S
                                    </label>
                                    <label style={{ display: "block", marginBottom: "15px" }}>
                                        <input
                                        type="radio"
                                        name="size"
                                        value="XS"
                                        onChange={handleFilterChange}
                                        />
                                        XS
                                    </label>
                                </div>
                                    </div>
                            </div>

      {/* Product Display Section */}
                <div style={{ flex: "3" }}>
                  <h3>Products</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                         {filteredProducts.map((product) => (
                            <Link
                            key={product.id}
                            to={`/product/${product.id}`} // Dynamic route for the product
                            style={{
                            textDecoration: "none", // Remove link underline
                            color: "inherit", // Inherit text color for the card
                            }}
                           >
                            <div
                                //   key={product.id}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    textAlign: "center",
                                    height:"540px",
                                }}
                                >
                                <div>
                                <img 
                                        src={(`src/assets/${product.pictures[0]}`)}
                                        alt="NA" width="290" 
                                        height="300" 
                                />
                                
                               <div style={{ display: "flex", marginTop:"30px", marginBottom:"30px", height:"60px"}}>
                               <h4>{product.name}</h4>
                               </div>
                                </div>
                               
                                <div style={{ display: "flex", alignItems: "center", gap: "30px", marginTop:"30px", marginBottom:"30px", marginLeft:"60px"}}>
                                        <p style={{ textDecoration: "line-through", margin: 0, fontSize: "16px", fontWeight: "bold" }}>Price: ₹{product.price}</p>
                                        <p style={{ margin: 0 , fontSize: "16px", fontWeight: "bold"}}> ₹{product.discount}</p>
                                </div>
                                
                                
                <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                        <button
                            style={{
                            padding: "5px 10px",
                            fontSize: "15px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            transition: "background-color 0.3s ease",
                            }}
                        >
                            <FaShoppingCart /> 
                            Add to Cart
                        </button>
                        <button
                            style={{
                            padding: "5px 10px",
                            fontSize: "15px",
                            backgroundColor: "#ff6f61",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            transition: "background-color 0.3s ease",
                            }}
                        >
                            <FaHeart />
                            Add to Wishlist
                        </button>
                </div>
            </div>
        </Link>
                ))}
                {filteredProducts.length === 0 && <p>No products match the filters.</p>}
     </div>
  </div>
</div>
);
};

export default ProductFilter;
