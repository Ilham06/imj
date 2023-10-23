import Image from "next/image";
import styles from "./page.module.css";
import Dell from "../../public/dell.png";
import HP from "../../public/hp.png";

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
                    Solution for your company
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
                  <span className="h6 text-color">What we are</span>
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
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-info-item mb-4 mb-lg-0">
                  <h3 className="mb-3">
                    <span className="text-color mr-2 text-md">01.</span>Our
                    Vission
                  </h3>
                  <p>
                    Menjadi perusahaan IT yang berkualitas dan terpercaya di
                    bidang Teknologi Informasi yang menjaga kepuasan client.
                    kesejahteraan dan manfaat untuk karyawan dan pemegang saham
                    serta lingkungan sekitar
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-info-item mb-4 mb-lg-0">
                  <h3 className="mb-3">
                    <span className="text-color mr-2 text-md">02.</span>Mission
                  </h3>
                  <p>
                    Memastikan kepuasan pengguna jasa, Tidak berhenti untuk
                    meningkatkan mutu pelayanan, berkomitmen untuk selalu tepat waktu dalam setiap aspek layanan kami, berusaha untuk memberikan informasi yang informatif kepada pelanggan.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-info-item mb-4 mb-lg-0">
                  <h3 className="mb-3">
                    <span className="text-color mr-2 text-md">03.</span>Services
                  </h3>
                  <p>
                    Kami telah menyelesaikan project-project penyediaan jasa
                    barang pada perusahaan-perusahaan swasta besar dan
                    instansi-instansi pemerintahan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section service border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 text-color">Our Partners</span>
                  <h2 className="mt-3 content-title">
                    We provide your need with professional partners
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <Image src={HP} width={85} height={85}></Image>
                  <div>
                    <h4 className="mb-1">HP</h4>
                    <p>
                      A digital agency isn't here to replace your internal team,
                      we're here to partner
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <Image src={Dell} width={85} height={85}></Image>
                  <div>
                    <h4 className="mb-1">DELL</h4>
                    <p>
                      A digital agency isn't here to replace your internal team,
                      we're here to partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="mt-100 position-relative">
          <div className="container">
            <div className="cta-block-2 bg-gray p-5 rounded border-1">
              <div className="row justify-content-center align-items-center ">
                <div className="col-lg-7">
                  <span className="text-color">For Every type business</span>
                  <h2 className="mt-2 mb-4 mb-lg-0">
                    Entrust Your Project to Our Best Team of Professionals
                  </h2>
                </div>
                <div className="col-lg-4">
                  <a
                    href="contact.html"
                    className="btn btn-main btn-round-full float-lg-right "
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section class="section cta">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="cta-item  bg-white p-5 rounded text-center">
                  <span class="h6 text-color">We create for you</span>
                  <h2 class="mt-2 mb-4">
                    Entrust Your Project to Our Best Team of Professionals
                  </h2>
                  <p class="lead mb-4">
                    Have any project on mind? For immidiate support :
                  </p>
                  <h3>
                    <i class="ti-mobile mr-3 text-color"></i>+23 876 65 455
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
