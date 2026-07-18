import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { formatKES } from "@/lib/validators";


interface ProductDetailsProps {
  params: {
    id: string;
  };
}


export default function ProductDetailsPage({
  params,
}: ProductDetailsProps) {

  const product = products.find(
    (item) => item.id.toString() === params.id
  );


  if (!product) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-serif text-3xl">
          Product Not Found
        </h1>

        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-white"
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

      {/* Back Navigation */}
      <div className="container-x pt-8">

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back To Shopping
        </Link>

      </div>



      {/* Product Details */}
      <section className="container-x grid gap-12 py-12 lg:grid-cols-2">


        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100">

          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            loading="eager"
            className="object-cover"
          />

        </div>




        {/* Information */}
        <div className="flex flex-col justify-center">


          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-900">
            {product.category}
          </p>



          <h1 className="font-serif text-4xl font-semibold text-black md:text-5xl">
            {product.name}
          </h1>



          <div className="mt-5 flex items-center gap-2">

            <div className="flex">

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

            <span className="text-sm text-slate-500">
              {product.rating} rating
            </span>

          </div>




          <p className="mt-6 text-3xl font-bold text-black">
            {formatKES(product.price)}
          </p>



          <p className="mt-6 leading-8 text-slate-600">
            {product.description ||
              "Premium beauty product carefully selected to elevate your daily routine with high-quality ingredients and professional results."
            }
          </p>




          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">


            <button
              className="
              flex items-center gap-3 rounded-full
              bg-blue-950 px-8 py-4
              font-semibold text-white
              transition hover:bg-blue-900
              "
            >
              <ShoppingCart size={20}/>
              Add To Cart
            </button>



            <Link
              href="/cart"
              className="
              rounded-full border border-black
              px-8 py-4 font-semibold
              text-black transition
              hover:bg-black hover:text-white
              "
            >
              View Cart
            </Link>


          </div>



          {/* Extra Info */}
          <div className="mt-10 grid grid-cols-2 gap-5 text-sm">

            <div>
              <p className="font-semibold">
                Delivery
              </p>
              <p className="text-slate-500">
                Fast delivery across Kenya
              </p>
            </div>


            <div>
              <p className="font-semibold">
                Quality
              </p>
              <p className="text-slate-500">
                Authentic beauty products
              </p>
            </div>

          </div>


        </div>


      </section>





      {/* Similar Products */}
      {similarProducts.length > 0 && (

        <section className="container-x pb-20">


          <h2 className="mb-8 font-serif text-3xl font-semibold">
            You May Also Like
          </h2>



          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

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