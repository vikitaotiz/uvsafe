import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const Testimonials = () => {
  return (
    <div className=" bg-white px-6 pt-6 pb-20 mb-10 font-medium text-xl text-[#64748b]">
      <div className="text-center py-6">
        <div className="flex flex-row justify-center lg:p-20">
          <h1 className="text-3xl text-center text-black font-bold leading-[55px] lg:text-[42px] pt-5">
            Read What{" "}
            <span className="text-orange-500 transform-origin-center  hover:-translate-y-1 hover:cursor-default hover:text-orange-300 duration-500 inline-block">
              Others
            </span>{" "}
            Have to Say.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Card className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 group border-orange-200 hover:border-orange-500 px-8 hover:shadow-2xl hover:bg-white transition-all duration-500 ease-in-out cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription className="mx-20">
                Senior QA Engineer, UnseriousDevs.
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-10 text-base md:text-lg">
              &ldquo;UVSafe brings hope and confidence to the Albinism
              community. Their products and support make us shine, fearlessly
              embracing the sun.&rdquo;
            </CardContent>
            <div className="top-0 absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-reverseShine group-hover:animate-shine" />
          </Card>

          <Card className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 group border-orange-200 hover:border-orange-500 px-8 hover:shadow-2xl hover:bg-white transition-all duration-500 ease-in-out cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription className="mx-20">
                Senior QA Engineer, UnseriousDevs.
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-10 text-base md:text-lg">
              &ldquo;UVSafe brings hope and confidence to the Albinism
              community. Their products and support make us shine, fearlessly
              embracing the sun.&rdquo;
            </CardContent>
            <div className="top-0 absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-reverseShine group-hover:animate-shine" />
          </Card>

          <Card className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 group border-orange-200 hover:border-orange-500 px-8 hover:shadow-2xl hover:bg-white transition-all duration-500 ease-in-out cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription className="mx-20">
                Senior QA Engineer, UnseriousDevs.
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-10 text-base md:text-lg">
              &ldquo;UVSafe brings hope and confidence to the Albinism
              community. Their products and support make us shine, fearlessly
              embracing the sun.&rdquo;
            </CardContent>
            <div className="top-0 absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-reverseShine group-hover:animate-shine" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
