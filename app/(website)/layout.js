import DrawerNav from "../component/navbar";
import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Footer from "../component/footer";
export const revalidate = 60;
export default function WebsiteLayout({ children }) {
  return (
    <section>
      <DrawerNav />
      {children}
      <Footer/>
      {/* <footer className="bg-core py-6 px-8 text-center">
       
        <div className="hidden md:grid md:grid-cols-4 md:gap-8 md:text-left md:items-start md:px-8 pb-8 pt-2 border-b-[1px] border-white">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <Image
              src="/logo.png"
              title="logo hasanahub"
              className="h-[80px] w-[90px] mx-auto md:mx-0"
              width={100}
              height={100}
              alt="logo hasanahub"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex flex-col md:space-y-2">
              <Link href="/" className="block mb-2 font-medium text-slate-50 hover:underline">
                Beranda
              </Link>
              <Link href="/umrah" className="block mb-2 font-medium text-slate-50 hover:underline">
                Umrah
              </Link>
              <Link href="/gallery" className="block mb-2 font-medium text-slate-50 hover:underline">
                Galeri
              </Link>
              <Link href="/artikel" className="block mb-2 font-medium text-slate-50 hover:underline">
                Artikel
              </Link>
              <Link href="/aboutus" className="block mb-2 font-medium text-slate-50 hover:underline">
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-between items-center px-8">
          <Image
            src="/logohub.png"
            title="logo hasanahub"
            className="h-[60px] w-[60px]"
            width={100}
            height={100}
            alt="logo hasanahub"
          />
          <div className="text-sm">© Copyright HasanahHub 2024</div>
          <div className="flex items-center text-3xl gap-2">
            <Link href="/">
              <RiInstagramFill />
            </Link>
            <Link href="/">
              <RiFacebookBoxFill />
            </Link>
            <Link href="/">
              <RiYoutubeFill />
            </Link>
            <Link href="/">
              <RiTwitterFill />
            </Link>
          </div>
        </div>

   
        <div className="hidden md:flex md:justify-between md:items-center md:mt-4 md:px-8">
          <div className="flex items-center text-3xl gap-2 text-slate-300">
            <Link href="/">
              <RiInstagramFill />
            </Link>
            <Link href="/">
              <RiFacebookBoxFill />
            </Link>
            <Link href="/">
              <RiYoutubeFill />
            </Link>
            <Link href="/">
              <RiTwitterFill />
            </Link>
          </div>

          <div className="text-sm text-[#bfc4c7]">
            © Copyright HasanahHub 2024
          </div>

          <div className="flex items-center">
            <Switch size="md" colorScheme="teal" />
            <span className="ml-2">EN / ID</span>
          </div>
        </div>


      
        <div className="md:hidden">
          <div className="text-center mx-auto mb-4">
            <Image
              src="/logohub.png"
              title="logo hasanahub"
              className="h-[60px] w-[60px] mx-auto"
              width={100}
              height={100}
              alt="logo hasanahub"
            />
          </div>
          <div className="flex items-center font-bold justify-center gap-x-4 gap-y-2 py-2 underline flex-wrap">
            <Link href="/">Beranda</Link>
            <Link href="/umrah">Umrah</Link>
            <Link href="/gallery">Galeri</Link>
            <Link href="/artikel">Artikel</Link>
            <Link href="/aboutus">Tentang Kami</Link>
          </div>
          <p className="my-4">
            Jl. Jendral Sudirman No 60 Sempur Kec Bogor Tengah Kota Bogor
          </p>
          <div className="font-bold">62-812-345-6789 | 0251-75923xx</div>
          <div className="font-bold">info@hanasahhub.com</div>
          <div className="flex items-center text-3xl gap-2 mt-4 text-semicore mb-4 justify-center">
            <Link href="/">
              <RiInstagramFill />
            </Link>
            <Link href="/">
              <RiFacebookBoxFill />
            </Link>
            <Link href="/">
              <RiYoutubeFill />
            </Link>
            <Link href="/">
              <RiTwitterFill />
            </Link>
          </div>
          <div className="text-sm">© Copyright HasanahHub 2024</div>
        </div>
      </footer> */}
    </section>
  );
}
