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

      {children}
   
     
    </section>
  );
}
