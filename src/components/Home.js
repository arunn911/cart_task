import React, { useState } from "react";

import { SingleProduct } from "./SingleProduct";

const shoes = [
  {
    "name": "RED TAPE RUNNING SHOE",
    "image": "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    "price": "2199",
    "id": "1"
  },
  {
    "name": "ADIDAS FLUID STREET SHOE",
    "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg",
    "price": "2599",
    "id": "2"
  },
  {
    "name": "NIKE CASUAL BLACK",
    "image": "https://5.imimg.com/data5/XQ/WI/MY-8996647/nike-casual-shoes-500x500.jpg",
    "price": "3500",
    "id": "3"
  },
  {
    "name": "PUMA IDP SNEAKERS",
    "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/375443/02/sv01/fnd/IND/fmt/png/Escaper-star-IDP-Men's-Running-Shoe",
    "price": "3000",
    "id": "4"
  },
  {
    "name": "ADIDAS RUNNING SHOE",
    "image": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/47bf09105a6e47fd9434ad8501517ad4_9366/adivat-shoes.jpg",
    "price": 3500,
    "id": "5"
  },
  {
    "name": "ADIDAS 3.0 CASUAL SHOE",
    "image": "https://cdn.luxe.digital/media/2020/02/17134401/adidas-originals-gazelle-men-casual-jeans-sneakers-luxe-digital.jpg",
    "price": "2500",
    "id": "6"
  },
  {
    "name": "U.S POLO MENS SNEAKER",
    "image": "https://cdn.luxe.digital/media/2021/06/18093645/best-casual-men-sneakers-adidas-campus-review-luxe-digital%402x.jpg",
    "price": 3000,
    "id": "7"
  },
  {
    "name": "PUMA MENS CASUAL WHITE",
    "image": "https://www.dmarge.com/wp-content/uploads/2021/09/oliver-cabell-casual-shoes-920x920.jpg",
    "price": "3800",
    "id": "8"
  },
  {
    "name": "MENS GRAY CASUALS",
    "image": "https://i.pinimg.com/736x/6f/ed/ef/6fedef2921836883a4216a777f47f5b5.jpg",
    "price": "3000",
    "id": "9"
  },
  {
    "name": "ADIDAS SLEEK CASUALS WHITE",
    "image": "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/11747524_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1",
    "price": "4600",
    "id": "10"
  },
  {
    "name": "SPARX MENS SNEAKER",
    "image": "https://www.askmea2z.com/inventory_images/10450.jpg",
    "price": "999",
    "id": "11"
  },
  {
    "name": "AFROJACK UNISEX SNEAKERS",
    "image": "https://assets.ajio.com/medias/sys_master/root/he5/h89/14914536144926/go21_blue_colourblock_lace-up_casual_shoes.jpg",
    "price": 2800,
    "id": "12"
  },
  {
    "name": "CONVERSE MENS SNEAKER",
    "image": "https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg",
    "price": "2499",
    "id": "13"
  },
  {
    "name": "PUMA IDP UNISEX SNEAKERS",
    "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/371149/69/sv01/fnd/IND/fmt/png",
    "price": "5500",
    "id": "14"
  },
  {
    "name": "WOODLAND CAMEL LEATHER",
    "image": "https://assets.ajio.com/medias/sys_master/root/hcf/h34/16523711250462/-473Wx593H-450077094-drkcml-MODEL.jpg",
    "price": "6500",
    "id": "15"
  }
];

export function Home() {
 
  const [products] = useState(shoes);
  return(
<div className="product-container">
    {products.map((prod) => {
      return(
      <SingleProduct key={prod.id} prod={prod}/>
      )
    })}

</div>

  )
}
