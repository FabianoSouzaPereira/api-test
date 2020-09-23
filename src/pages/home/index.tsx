import React, { IframeHTMLAttributes, InsHTMLAttributes, ImgHTMLAttributes } from 'react';
import NavbarComp from '../../components/navbar';
import Footbar from '../../components/footbar';
import './home.css';
import hand from '../../assets/img/hand-1280x446.jpg';
import smart from '../../assets/img/smart-1280x446.jpg';
import smart1 from '../../assets/img/images1.jpeg';

const Home: React.FC = () => {
  return (
    <>
      <NavbarComp />
      <div style={{ height: '100vh' }}>
        <div className='mainDiv'>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={hand} className="d-block w-100" style={{ height: '446px' }} alt="hand" />
              </div>
              <div className="carousel-item" >
                <img src={smart1} className="d-block w-100" style={{ height: '446px' }} alt="smart1" />
              </div>
              <div className="carousel-item">
                <img src={smart} className="d-block w-100" style={{ height: '446px' }} alt="smart" />
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="div1-home">
          <h2 className="h2-home">Mysecurity</h2>
          <p className="par-home">Com o MySecurity, o seu cliente monitora pelo notebook ou celular, em tempo real, tudo o que acontece com o seu patrimônio. E o melhor: a sua empresa ainda reduz custos, fideliza e conquista mais clientes.</p>
          <p>Com a popularização constante de novas tecnologias na área de segurança e monitoramento, fica cada vez mais importante que gestores de empresas de segurança busquem maneiras de oferecerem um serviço cada vez mais especializado para seus clientes.</p>

          <p>Nesse sentido, é importante investir em produtos e serviços de monitoramento eletrônico de qualidade, e um software de monitoramento de alarmes aparece como uma dessas possíveis soluções. Afinal de contas, os alarmes estão entre os equipamentos mais usados em casas e organizações, o que os torna um ótimo produto de fácil comercialização.</p>

          <p>Entretanto, escolher e implementar um bom modelo de central de alarme é essencial para o negócio, pois é ele que vai receber os eventos de modo automático por meio de sensores e controles instalados em um sistema completo de segurança.</p>
        </div>
        <Footbar />
      </div>
    </>
  );
}

export default Home;