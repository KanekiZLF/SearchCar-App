import "./car.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { carInfo } from "../../data/car";
import { useParams } from "react-router";

const Car = () => {
  const { id } = useParams();
  const carro = carInfo.find((car) => car.id === parseInt(id));

  if (!carro) {
    return <p>Carro não encontrado</p>;
  }

  return (
    <>
      <Navbar />
      <div className="car-container">
      {/* Parte Esquerda */}
      <div className="car-content">
        <div className="car-info">
          <h1>{carro.marca}</h1>
          <h2>{carro.modelo}</h2>
        </div>

        <div className="car-info-detail">
          <div className="car-info-item">
            <h3>Cidade</h3>
            <span>{carro.cidade}</span>
          </div>
          <div className="car-info-item">
            <h3>Ano</h3>
            <span>{carro.ano}</span>
          </div>
          <div className="car-info-item">
            <h3>Km</h3>
            <span>{carro.km}</span>
          </div>
          <div className="car-info-item">
            <h3>Câmbio</h3>
            <span>{carro.cambio}</span>
          </div>
          <div className="car-info-item">
            <h3>Combustível</h3>
            <span>{carro.combustivel}</span>
          </div>
          <div className="car-info-item">
            <h3>Cor</h3>
            <span>{carro.cor}</span>
          </div>
          <div className="car-info-item">
            <h3>Aceita Troca</h3>
            <span>{carro.aceitaTroca}</span>
          </div>
          <div className="car-info-item">
            <h3>Único Dono</h3>
            <span>{carro.unicoDono}</span>
          </div>
          <div className="car-info-item">
            <h3>Final da Placa</h3>
            <span>{carro.finalPlaca}</span>
          </div>
        </div>

        {/* Itens do Veículo */}
        <div className="car-items">
          <h4>Itens do Veículo</h4>
          <div className="car-items-grid">
          {carro.items && Object.values(carro.items).map((item, index) => (
          <span key={index}>{item}</span>))}
          </div>
        </div>
      </div>

      {/* Parte Direita */}
      <div className="car-contact">
        <h2>R$ {(carro.valorAnunciado ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </h2>
        <input type="text" placeholder="Digite seu Nome" />
        <input type="email" placeholder="Digite seu E-mail" />
        <input type="text" placeholder="Digite seu Telefone" />
        <textarea rows="5" placeholder="Digite sua Mensagem"></textarea>
        <button>Enviar Mensagem</button>
      </div>

      {/* Bloco de valores abaixo */}
      <div className="car-values">
        <div>
          <h3>Valor Anúncio</h3>
          <h2>R$ {(carro.valorAnunciado ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </h2>
        </div>
        <div>
          <h3>Avaliação SearchCar</h3>
          <h2>R$ {(carro.avaliacao ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </h2>
        </div>
        <div>
          <h3>Tabela Fipe</h3>
          <h2>R$ {(carro.fipe ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </h2>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Car;
