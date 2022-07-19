import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Hakkımızda",
  },

  {
    path: "#",
    display: "Gizlilik Politikası",
  },

  {
    path: "/cars",
    display: "Araba Listesi",
  },
  {
    path: "/blogs",
    display: "Blog Sayfası",
  },

  {
    path: "/contact",
    display: "İletişim",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    CygNoos Araç <br /> Merkezi
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Hızlı Erişim</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Merkez Ofis</h5>
              <p className="office__info">Rıhtım Sokak, Kadıköy, İstanbul</p>
              <p className="office__info">Telefon: +994 70 897 94 77</p>

              <p className="office__info">Email: safarlinihat@gmail.com</p>

              <p className="office__info">Çalışma Saatleri: 10:00 - 19:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Bültenimiz</h5>
              <p className="section__description">Bültenimizi Takip Edin..</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Bu Site 
                <a href="https://www.linkedin.com/in/nihat-safarli-235449153/?locale=en_US" target={"_blank"}>Nihat Safarli</a> tarafından geliştirilmiştir. Tüm Hakları Saklıdır.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
