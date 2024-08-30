import Image from "next/image";
import { FaCalendarWeek, FaUserLarge } from "react-icons/fa6";
import ArtikelUmrah from "@/app/component/home/artikel";
import DetailArtikelRandom from "@/app/component/artikelpage/random";
import { formatDate } from "../../../utils/date";

export async function generateMetadata({ params, searchParams }, parent) {
  // Dummy SEO data for metadata
  const dataArtikel = getDummyData();
  return {
    title: dataArtikel.artikelPlain.seo.title,
    description: dataArtikel.artikelPlain.seo.description,
    openGraph: {
      title: dataArtikel.artikelPlain.seo.title,
      description: dataArtikel.artikelPlain.seo.description,
    },
  };
}

// Dummy data function instead of fetching from an API or database
function getDummyData() {
  return {
    artikelPlain: {
      seo: {
        title: "Discovering Bali's Hidden Gems",
        description: "An in-depth guide to exploring Bali's less-known attractions.",
      },
      blog_kategori: {
        name: "Travel Guides",
      },
      title: "Discovering Bali's Hidden Gems",
      updatedAt: "2024-08-20T10:30:00Z",
      image: {
        url_file: "/img/imageartikel.png",
      },
      html: "<p>Explore the beautiful hidden spots in Bali that tourists often miss. From secluded beaches to cultural landmarks, there's much to discover Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula tellus malesuada semper bibendum. Sagittis sed purus feugiat consectetur varius orci, phasellus a euismod. Consectetur magna pretium turpis at in eget maecenas. Massa quisque est dui vestibulum ut mi curabitur lacus. Feugiat nulla erat cursus metus. Mattis ut risus odio quam nisl. Non enim ac ullamcorper varius habitant. Massa volutpat orci risus eu, amet interdum massa sagittis. Diam tortor amet, ipsum id id ipsum elit. Egestas vivamus vel nam diam sagittis accumsan volutpat. Sapien convallis parturient amet aliquam. Vivamus venenatis eget vulputate nunc risus nisi. Rhoncus egestas pretium dignissim gravida amet, augue egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo vitae accumsan adipiscing tellus sed nulla sed ullamcorper. Amet viverra morbi arcu massa proin in massa tempus..</p>",
    },
  };
}

const Page = async ({ params }) => {
  // Use dummy data instead of real data fetching
  const dataArtikel = getDummyData();
  const dataArtikelReal = dataArtikel.artikelPlain;

  return (
    <div className="md:flex md:items-start md:flex-wrap">
      <div className="shadow-sm border-b-1 md:w-[65%] md:flex md:flex-col md:px-8">
        {/* Image */}
        <div className="md:order-none">
          <Image
            src={dataArtikelReal?.image?.url_file}
            title={dataArtikelReal?.blog_kategori.name}
            className="w-full h-[250px] object-cover md:w-auto md:h-[400px]"
            width={616}
            height={400}
            alt={dataArtikelReal?.blog_kategori.name}
          />
        </div>
        {/* Meta */}
        <div className="px-5 pt-3 md:py-8 md:px-0 md:order-first">
          <span className="text-[11px] md:text-xl md:pl-0.5 text-slate-400">
            {dataArtikelReal?.blog_kategori.name}
          </span>
          <h1 className="text-base md:text-4xl text-slate-900 font-bold pt-1 pb-2 md:pt-3 md:pb-4">
            {dataArtikelReal?.title}
          </h1>
          <div className="flex items-start">
            <span className="flex items-start">
              <div className="w-[18px] mr-1 md:mr-3 md:pt-0.5">
                <FaCalendarWeek className="text-[10px] md:text-lg text-semicore" />
              </div>
              <div className="text-[10px] md:text-lg text-semicore">
                {formatDate(dataArtikelReal?.updatedAt)}
              </div>
            </span>
            <span className="flex items-start pl-5">
              <div className="w-[18px] mr-1 md:mr-3">
                <FaUserLarge className="text-[10px] md:text-lg text-semicore" />
              </div>
              <div className="text-[10px] md:text-lg text-semicore">
                3 Q Cloud
              </div>
            </span>
          </div>
        </div>
        <div className="px-5 py-3 md:px-0 md:py-8 md:order-last">
          <div
            className="text-sm md:text-xl"
            dangerouslySetInnerHTML={{ __html: dataArtikelReal.html }}
          ></div>
        </div>
      </div>
      <div className="md:pt-4 pt-0"></div>
      <div className="md:w-[35%]">
        <div className="mt-5 border-b border-slate-300 md:py-4 md:mx-5 mx-6 text-[22px] font-bold">Artikel Populer</div>
        <DetailArtikelRandom slugnya={params.slug} typenya="false" />
      </div>
    </div>
  );
};

export default Page;
