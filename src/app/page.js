import Image from "next/image";
import styles from "./page.module.css";
import Dell from "../../public/dell.png";
import HP from "../../public/hp.png";
import { aboutCardContent, partnerCardContent } from "@/data";
import AboutCard from "@/components/AboutCard";
import PartnerCard from "@/components/PartnerCard";

export default function Home() {
  return (
    <>
      <div className="main-wrapper">
        <section className="slider">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-10">
                <div className="block">
                  <span className="d-block mb-3 text-white text-capitalize">
                    Solusi untuk perusahaanmu!
                  </span>
                  <h1 className="animated fadeInUp mb-5">
                    Jangan Ragu Menceritakan Mimipi Anda Ke Kami
                  </h1>
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-main animated fadeInUp btn-round-full"
                  >
                    Get started
                    <i className="btn-icon fa fa-angle-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-2 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="about-item pr-3 mb-5 mb-lg-0">
                  <span className="h6 text-color">Tentang kami</span>
                  <h2 className="mt-3 mb-4 position-relative content-title">
                  Mewujudkan Mimpi Anda !
                  </h2>
                  <p className="mb-5">
                    Kami adalah perusahaan yang bergerak dalam bidang pengadaan
                    barang-barang kantor dan barang-barang pendukung sistem IT.
                    Di perkembangan digital yang sangat pesat soat ini PT.
                    Inspirasi Maju Jaya (IMJ) terus maju dan berkembang dalam
                    perkembangan teknologi dan informasi untuk mengikuti jaman.
                  </p>

                  {/* <a href="#" className="btn btn-main btn-round-full">
                    Get started
                  </a> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-item-img">
                  <img
                    src="https://dummyimage.com/540x350/a19ea1/fff"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-info section pt-0">
          <div className="container">
            <div className="row justify-content-center">
              {
                aboutCardContent.map((data, index) => {
                  return (
                    <AboutCard no={data.no} title={data.title} description={data.description} />
                  )
                })
              }
            </div>
          </div>
        </section>

        <section className="section service border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 text-color">Partner Kami</span>
                  <h2 className="mt-3 content-title">
                    Melayani kebutuhanmu dengan partner professional
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {
                partnerCardContent.map((data, index) => {
                  return (
                    <PartnerCard name={data.name} description={data.description} image={data.image}/>
                  )
                })
              }
            </div>
          </div>
        </section>

        <section class="section cta">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="cta-item  bg-white p-5 rounded text-center">
                  <span class="h6 text-color">Kami bekerja untukmu!</span>
                  <h2 class="mt-2 mb-4">
                    Percayakan kebutuhan perusahaanmu pada kami.
                  </h2>
                  <p class="lead mb-4">
                    Tertarik atau informasi lebih lanjut ?
                  </p>
                  <h3>
                    <i class="ti-mobile mr-3 text-color"></i>support@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
