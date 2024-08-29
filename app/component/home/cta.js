import Link from "next/link";
import { Button } from "@chakra-ui/react";


const Cta = ({ url, textButton, title }) => {
    return (
      <div
        style={{
          backgroundImage: 'url("/img/cta.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className=" text-center md:px-12 px-6 py-8 w-full h-full flex justify-center bg-black bg-opacity-50 md:gap-5 md:py-16 flex-col items-center">
          <div className="md:w-[90%] w-[99%]">
          <h2 className="sm:text-lg text-base text-white font-bold mb-3 md:pb-4 md:text-3xl md:leading-snug">{title}</h2>
          <Link href={`${url}`}>
            <Button
              className="bg-buttoncore text-white rounded-lg font-bold md:text-base text-sm px-4 py-3"
              variant="solid"
            >
              {textButton}
            </Button>
          </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cta;