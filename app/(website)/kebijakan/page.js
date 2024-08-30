
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Kebijakan",
  };
}

const Page = () => {
  return (
    <>
      <div className="md:Flex-col p-6 md:items-start md:justify-between md:p-16 md:gap-5">
        <div className="py-3 kolom-pertama">
          <h1 className="text-lg font-bold md:text-3xl">3Q Cloud Trip</h1>
          <h3 className="text-sm font-medium pt-2 md:text-lg">
            Informasi Pribadi yang Dikumpulkan
          </h3>
          <p className="pt-3.5 text-base">
            3Q Cloud Trip memahami dan menghargai pentingnya privasi Anda.
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, dan melindungi data pribadi Anda saat Anda menggunakan
            situs web kami. Kami juga akan menjelaskan bagaimana Anda dapat
            mengelola data yang telah Anda berikan kepada kami.
          </p>
        </div>

        <div className="py-3">
          <h3 className="text-lg font-medium ">Pengumpulan Data Pribadi</h3>
          <p className="text-sm pt-2 md:text-base">
            Situs web 3Q Cloud Trip mengumpulkan data pribadi Anda seperti nama,
            alamat, email, nomor telepon, dan nomor KTP. Informasi ini
            diperlukan untuk memproses dan menyelesaikan pemesanan Anda. <br />
            <br /> Kami juga dapat mengumpulkan data teknis dari perangkat Anda,
            seperti alamat IP, jenis browser, Unique Device Identifier (untuk
            pengguna ponsel), sistem operasi, versi aplikasi, serta informasi
            lokasi geografis seperti garis lintang dan bujur. Meskipun data ini
            biasanya bersifat anonim, data tersebut tetap dianggap sebagai data
            pribadi, terutama jika dikombinasikan dengan informasi lainnya.
          </p>
        </div>
        <div className="py-3 text-base">
          <h3 className="font-medium text-lg">Situasi Pengumpulan Data</h3>
          <ul className="text-sm pt-2 md:text-base">
            Kami mengumpulkan data pribadi Anda dalam beberapa situasi berikut:
            <br />
            <br />
            <li>
              Saat Anda melakukan pemesanan atau pembelian melalui situs web
              kami atau melalui tim layanan pelanggan kami, baik melalui email,
              surat, faks, atau telepon.
            </li>
            <li>
              Saat Anda mendaftar di situs web kami, berlangganan Newsletter,
              mengikuti kompetisi, atau mendaftar untuk promosi.
            </li>
            <li>
              Saat Anda berpartisipasi dalam survei untuk memberikan umpan balik
              kepada kami.
            </li>
          </ul>
        </div>
        <div className="py-3 text-base">
          <h3 className="font-medium text-lg">Penggunaan Data Pribadi</h3>
          <ul className="text-sm pt-2 md:text-base">
            3Q Cloud Trip menggunakan informasi pribadi Anda untuk
            mengoperasikan, mempertahankan, dan memaksimalkan fitur dan fungsi
            situs web serta layanan kami. Data pribadi Anda mungkin digunakan
            untuk tujuan berikut :
            <br />
            <br />
            <li>
              Untuk menyediakan layanan berkualitas tinggi dan membantu Anda
              mengoptimalkan penggunaan situs web kami.
            </li>
            <li>
              Untuk menyelesaikan pemesanan dan pembelian yang Anda lakukan
              melalui situs web kami, serta menanggapi permintaan lain yang kami
              terima dari Anda
            </li>
            <li>
              Untuk menghubungi Anda jika terjadi perubahan pada dokumen
              perjalanan Anda, seperti perubahan jadwal penerbangan, penundaan,
              atau informasi penting lainnya
            </li>
            <li>
              Untuk memberitahu Anda tentang produk dan layanan kami, penawaran
              khusus, promosi, dan penawaran lainnya yang mungkin menarik bagi
              Anda. Meski produk pihak ketiga dapat disertakan, pihak ketiga
              tersebut tidak akan menghubungi Anda secara langsung kecuali atas
              permintaan Anda.
            </li>
            <li>
              Jika Anda membuat pemesanan dan kemudian membatalkannya setelah
              memasukkan data pribadi, kami akan mengirimkan email kepada Anda
              untuk memberikan panduan atau menyarankan langkah selanjutnya.
              Anda dapat berhenti menerima email semacam ini dengan mengeklik
              tautan berhenti berlangganan yang ada di bagian bawah email
              tersebut
            </li>
            <li>Untuk keperluan administrasi dan analisis internal.</li>
            <li>
              Untuk mengundang Anda berpartisipasi dalam survei kami guna
              mendapatkan umpan balik.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
