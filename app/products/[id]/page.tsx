import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import ProductDetailsClient from "@/components/ProductDetailsClient";

import { products } from "@/lib/products";
import { formatKES } from "@/lib/validators";


interface ProductDetailsProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {

  const { id } = await params;


  const product = products.find(
    (item) => item.id.toString() === id
  );


  if (!product) {
    return (
      <div className="container-x py-24 text-center">

        <h1 className="font-serif text-3xl text-black">
          Product Not Found
        </h1>


        <Link
          href="/products"
          className="
            mt-6 inline-flex items-center gap-2
            rounded-full bg-blue-950
            px-6 py-3 text-white
          "
        >
          <ArrowLeft size={18} />
          Back To Shopping
        </Link>

      </div>
    );
  }


  const similarProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);


  return (
    <main className="bg-white">

      <div className="container-x pt-8">

        <Link
          href="/products"
          className="
            inline-flex items-center gap-2
            text-sm text-blue-900
            hover:text-black
          "
        >
          <ArrowLeft size={18} />
          Back To Shopping
        </Link>

      </div>


      <section className="
        container-x grid gap-12 py-12
        lg:grid-cols-2
      ">


        <div className="
          relative aspect-square
          overflow-hidden rounded-3xl
          bg-slate-100
        ">

          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />

        </div>



        <div className="flex flex-col justify-center">

          <p className="
            mb-3 text-sm uppercase
            tracking-[0.3em]
            text-blue-900
          ">
            {product.category}
          </p>


          <h1 className="
            font-serif text-4xl
            font-semibold text-black
          ">
            {product.name}
          </h1>


          <div className="mt-5 flex items-center gap-2">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={18}
                className={
                  star <= Math.round(product.rating)
                  ? "fill-blue-900 text-blue-900"
                  : "text-slate-300"
                }
              />
            ))}

          </div>


          <p className="mt-6 text-3xl font-bold">
            {formatKES(product.price)}
          </p>


          <p className="mt-6 leading-8 text-slate-600">
            {product.description}
          </p>


          <ProductDetailsClient product={product}/>


        </div>


      </section>


      {similarProducts.length > 0 && (

        <section className="container-x pb-20">

          <h2 className="
            mb-8 font-serif text-3xl
            font-semibold
          ">
            You May Also Like
          </h2>


          <div className="
            grid grid-cols-2 gap-5
            md:grid-cols-4
          ">

            {similarProducts.map((item)=>(
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>

        </section>

      )}


    </main>
  );
}