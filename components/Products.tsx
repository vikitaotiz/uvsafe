import Image from "next/image";
import { products } from "@/data/dummyData";

const Products = () => {
  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center my-5">
      {products.map((product) => {
        const { id, name, content, visit, visitLink, imageUrl } = product;
        return (
          <div key={id} className="mb-8 w-11/12 xs:w-11/12 space-y-2">
            <div className="shadow-md rounded-md">
              <div className="relative h-52">
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            <div className="w-10/12">
              <h4 className="whitespace-nowrap w-full truncate font-semibold text-xs">
                {name}
              </h4>
              <button className="bg-orange-400 text-white py-1 px-3 text-xs font-semibold">
                <a target="_blank" href={visitLink}>
                  Purchase
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
