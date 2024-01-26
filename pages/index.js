import { useState } from "react";
import { Banner, Browser, Content } from "components";
import { useStore } from "contexts";

function Page() {
  const { ES } = useStore();

  return (
    <Browser>
      <Banner
        lead="International Business Development"
        title="Asesorías ByD / TradeChile"
        center
      />
      <Content>
        <div className="india">
          <div>
            <h2>MISION INDIA</h2>
            <p className="text-xl mt-5">
              Importante delegación de 82 empresas de la industria farmacéutica
              de la India visita Chile
            </p>
        
              <a
                href="/files/catalogo-pharmexcil.pdf"
                download="catalogo-pharmexcil.pdf"
                className="download-btn mt-5"
              >
                Descargar programa
              </a>
            
          </div>
          <img className="w-1/2" src="/images/main/hands.jpg" />
        </div>
      </Content>
      <Content>
        <div className="w-100 cover">
          {ES ? (
            <h4>
              Acompañamos a tu empresa
              <br /> a instalarse en Chile
            </h4>
          ) : (
            <h4>
              We help your company
              <br /> to do business in Chile
            </h4>
          )}
        </div>
        <div className="flex mt-5 text-center">
          <div className="w-33">
            <img alt="ESTUDIOS DE MERCADO" src="/images/logos/a.png" />
            {ES ? (
              <h5>
                ESTUDIOS DE
                <br /> MERCADO
              </h5>
            ) : (
              <h5>MARKET RESEARCH</h5>
            )}
          </div>
          <div className="w-33">
            <img alt="RUEDAS DE NEGOCIOS" src="/images/logos/b.png" />
            {ES ? (
              <h5>
                RUEDAS DE
                <br /> NEGOCIOS
              </h5>
            ) : (
              <h5>BUSINESS ROUNDS</h5>
            )}
          </div>
          <div className="w-33">
            <img alt="REPRESENTACIONES" src="/images/logos/c.png" />
            <h5>{ES ? "REPRESENTACIONES" : "REPRESENTATIONS"}</h5>
          </div>
        </div>
      </Content>

      <Content sub="border-top" tab="servicios">
        {ES ? (
          <div className="flex">
            <div className="w-33 p-5 bg-light">
              <h4 className="text-color">NOSOTROS</h4>
              <p className="mb-4 text-color">....................</p>
              <p className="mb-3">
                Ofrecemos servicios “a la medida”, con el objeto de proveer a
                empresas extranjeras o chilenas, asesorías comerciales,
                gestionar contactos y facilitar los negocios internacionales.
              </p>
              <p className="mb-4">
                Asesorías ByD / TradeChile está aliado con el Estudio Jurídico
                Aninat y Cia con el cual se complementa en los temas legales y
                ofrece servicios de back office a las empresas que quieran estar
                presentes en Chile.
              </p>
              <p className="mb-1">
                <b>Otras alianzas: </b>
              </p>
              <p>
                SAFITEC, en Perú.
                <br />
                G-PASS, en Corea
              </p>
            </div>
            <div className="w-33 p-5 bg-gray">
              <h4 className="text-color">NUESTRA VISIÓN</h4>
              <p className="mb-4 text-color">....................</p>
              <p className="mb-3">
                Ser un referente en el mercado chileno en apoyo a las{" "}
                <b>empresas extranjeras</b> que quieran tener una{" "}
                <b>
                  participación de mercado o buscar un representante o
                  distribuidor o instalarse en Chile.
                </b>
              </p>
              <p className="mb-3">
                Tenemos una vasta experiencia y red de contactos en el mercado
                nacional. Conocemos en profundidad la realidad nacional y la
                problemática de los distintos sectores productivos del país. ​
              </p>
              <p>
                <b>Apoyamos las buenas prácticas</b> y la transparencia en todas
                las transacciones y negocios que se puedan materializar.
              </p>
            </div>
            <div className="w-33 p-5 bg-light">
              <h4 className="text-color">SERVICIOS</h4>
              <p className="mb-4 text-color">....................</p>
              <ul className="mb-3 services">
                <li>Estudios de mercado</li>
                <li>Representaciones</li>
                <li>Asistencia legal</li>
                <li>Socios comerciales</li>
                <li>Ruedas de Negocios</li>
                <li>Distribuidores</li>
                <li>Matchmaking</li>
                <li>Ferias comerciales</li>
                <li>TradeIntelligence</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="w-33 p-5 bg-light">
              <h4 className="text-color">ABOUT US</h4>
              <p className="mb-4 text-color">....................</p>
              <p className="mb-3">
                We offer “tailored” services, providing commercial advice to
                foreign and Chilean companies, manage contacts and facilitate
                international business.
              </p>
              <p className="mb-4">
                Asesoría ByD / TradeChile is allied with the Aninat y Cia Law
                Firm with which it complements itself on legal issues and offers
                back office services to companies that want to be present in
                Chile.
              </p>
              <p className="mb-1">
                <b>Other alliances: </b>
              </p>
              <p>
                SAFITEC, en Perú.
                <br />
                G-PASS, en Corea
              </p>
            </div>
            <div className="w-33 p-5 bg-gray">
              <h4 className="text-color">OUR VISION</h4>
              <p className="mb-4 text-color">....................</p>
              <p className="mb-3">
                Be a benchmark in the Chilean market in support of foreign
                companies that want to have a market share or seek a
                representative, a distributor or to settle in Chile.
              </p>
              <p className="mb-3">
                We have a vast experience and network of contacts in the
                national market. We know in depth the national reality and the
                advantages and problems of the different productive sectors of
                the country.
              </p>
              <p>
                We support good practices and transparency in all transactions
                and businesses that may materialize.
              </p>
            </div>
            <div className="w-33 p-5 bg-light">
              <h4 className="text-color">SERVICES</h4>
              <p className="mb-4 text-color">....................</p>
              <ul className="mb-3 services">
                <li>Market studies</li>
                <li>Representations</li>
                <li>Legal assistance</li>
                <li>Business partners</li>
                <li>Business Roundtables</li>
                <li>Dealers</li>
                <li>Matchmaking</li>
                <li>Trade fairs</li>
                <li>TradeIntelligence</li>
              </ul>
            </div>
          </div>
        )}
      </Content>
      <Content sub="bg-light about-us" tab="nosotros">
        <h4 className="text-color">{ES ? "NOSOTROS" : "ABOUT US"}</h4>
        {ES ? (
          <div className="flex flex-wrap">
            <div className="w-50 p-5">
              <div className="team mb-5" id="jaime" />
              <h5 className="mb-1">Jaime Bazán Ried</h5>
              <h6 className="text-color mb-4">
                <small>Director Ejecutivo de Asesorías ByD / TradeChile</small>
              </h6>
              <p>
                Ex funcionario del Servicio Exterior de Chile, fue Gerente
                General de la Cámara Chileno Norteamericana de Comercio, AmCham
                Chile y Director Ejecutivo de Chile Transparente, (el capítulo
                nacional de Transparencia Internacional). El Sr. Bazán tiene una
                amplia experiencia en comercio exterior y en asesorías
                comerciales a empresas extranjeras.
              </p>
            </div>
            <div className="w-50 p-5">
              <div className="team mb-5" id="paula" />
              <h5 className="mb-1">Paulina Dellafiori G.</h5>
              <h6 className="text-color mb-4">
                <small>Directora Asociada de Asesorías ByD / TradeChile</small>
              </h6>
              <p>
                Ejecutiva senior por más de 30 años en la Cámara Chileno
                Norteamericana de Comercio, AmCham Chile. Especialista en
                Comercio con énfasis en asesorar a empresas extranjeras para
                comercializar sus servicios o productos y atraer a socios de
                negocios calificados basados ​​en el conocimiento y buenas
                relaciones en el mercado chileno. Amplia experiencia en la
                organización de misiones comerciales, seminarios
                internacionales, Ruedas de negocios, ferias y agendas de
                negocios.
              </p>
            </div>
            {/*<div className="w-50 p-5">
                            <div className="team mb-5" id="nora"/>
                            <h5 className="mb-1">Nora Balzarotti</h5>
                            <h6 className="text-color mb-4"><small>Consultora Externa de Asesorías ByD / TradeChile</small></h6>
                            <p>Licenciada en Economía de la Universidad de Buenos Aires, con cursos de posgrado en el Centro de Estudios Macroeconómicos de la Argentina.  En Chile, ha sido economista senior de la Cámara de Comercio de Santiago, Gerente de Estudios de Amcham Chile y Gerente de Estudios de Nevasa Corredora de Bolsa.  En Buenos Aires, fue economista local para la Embajada de Estados Unidos por una década, asesora del Secretario de Competencia en el Ministerio de Economía de Argentina, economista investigadora del Instituto de Economía de la Universidad Argentina de la Empresa y economista de la Fundación FIEL. Ha hecho consultoría para el BID, Banco Mundial y otras organizaciones similares. En materia docente, ha sido profesora en cursos de grado y posgrado en microeconomía, política de competencia, derecho y economía, en la Universidad de los Andes en Chile, la Universidad de Buenos Aires, la UADE, la Universidad Di Tella, el World Bank Institute, entre otras.  También fue negociadora de política de competencia para el MERCOSUR en el ALCA.</p>
                        </div>*/}
          </div>
        ) : (
          <div className="flex flex-wrap">
            <div className="w-50 p-5">
              <div className="team mb-5" id="jaime" />
              <h5 className="mb-1">Jaime Bazán</h5>
              <h6 className="text-color mb-4">
                <small>Executive Director of Asesorias ByD / TradeChile</small>
              </h6>
              <p>
                Former official of the Chilean Foreign Service, he was General
                Manager of the Chilean American Chamber of Commerce (AmCham
                Chile) and Executive Director of Chile Transparente, (the
                national chapter of Transparency International). Mr. Bazan has
                extensive experience in foreign trade and in commercial advice
                to foreign companies.
              </p>
            </div>
            <div className="w-50 p-5">
              <div className="team mb-5" id="paula" />
              <h5 className="mb-1">Paulina Dellafiori</h5>
              <h6 className="text-color mb-4">
                <small>Associate Director of Asesorias ByD / TradeChile</small>
              </h6>
              <p>
                Senior executive for more than 30 years at the Chilean American
                Chamber of Commerce (AmCham Chile). Trade Specialist with
                emphasis on advising foreign companies to market their services
                or products and attract qualified business partners based on
                knowledge and good relationships in the Chilean market.
                Extensive experience in organizing trade missions, international
                seminars, business roundtables, fairs and business agendas.
              </p>
            </div>
            {/*<div className="w-50 p-5">
                            <div className="team mb-5" id="nora"/>
                            <h5 className="mb-1">Nora Balzarotti</h5>
                            <h6 className="text-color mb-4"><small>External Consultant of Asesorías ByD / TradeChile</small></h6>
                            <p>Nora Balzarotti holds a BA in Economics from Universidad de Buenos Aires, with postgraduate courses at Centro de Estudios Macroeconómicos de la Argentina.  In Chile, she was Senior Economist at Cámara de Comercio de Santiago, Research Manager at Amcham Chile y Research Manager at Nevasa, Stock Brokers.  In Buenos Aires, she was country specialist at the Econ Section of the US Embassy for almost a decade, senior adviser to the Secretary of Competition Policy at the Ministry of Economy of Argentina, economic researcher at the Universidad Argentina de la Empresa’s Research Institute, and economist at the FIEL Foundation. She has been consultant for the IDB, the World Bank and other organizations alike in several occasions.  She’s been a professor of microeconomics, law and economics and competition policy at Universidad de los Andes in Chile, Universidad de Buenos Aires, UADE, Universidad Di Tella, the World Bank Institute, and others.  She was also the negotiator for MERCOSUR at the Competition Policy Group during the FTAA negotiations in the early 2000s.</p>
                        </div>*/}
          </div>
        )}
      </Content>
      <Content tab="clientes">
        <h4 className="text-color">{ES ? "CLIENTES" : "CUSTOMERS"}</h4>
        <p>{ES ? "Han confiado en nosotros" : "They trusted us"}</p>
        <div className="flex customers mt-5">
          <img src="/images/main/1.png" />
          <img src="/images/main/2.png" />
          <img src="/images/main/3.jpg" />
          <img src="/images/main/4.png" />
          <img src="/images/main/5.png" />
          <img src="/images/main/6.png" />
          <img src="/images/main/7.jpg" />
          <img src="/images/main/8.jpg" />
          <img src="/images/main/9.jpg" />
          <img src="/images/main/10.png" />
          <img src="/images/main/11.jpg" />
          <img src="/images/main/12.png" />
          <img src="/images/main/13.png" />
          <img src="/images/main/14.png" />
          <img src="/images/main/15.png" />
          <img src="/images/main/16.png" />
          <img src="/images/main/17.png" />
        </div>
      </Content>
      <Content sub="border-top" tab="contacto">
        <h4 className="text-color">{ES ? "CONTACTO" : "CONTACT"}</h4>
        <div className="iframe">
          {ES ? (
            <div className="contact">
              <p className="mt-5">
                <b>Jaime Bazán:</b> jbazan@tradechile.cl,
                <br className="max-xs" /> cel: +569 9099 0871
              </p>
              <p className="mt-2">
                <b>Paulina Dellafiori:</b> pdellafiori@tradechile.cl,
                <br className="max-xs" /> cel: +569 9435 1340
              </p>
              <p className="mt-2">
                Los Laureles 1090, of. 403,
                <br className="max-xs" /> Vitacura, Santiago Chile
              </p>
              <img
                alt="B & D"
                className="contact p-2"
                src="/images/logos/bazan.png"
              />
              <img
                className="contact"
                alt="Trade Chile"
                src="/images/logos/trade-3.png"
              />
            </div>
          ) : (
            <div className="contact">
              <p className="mt-5">
                <b>Jaime Bazán:</b> jbazan@tradechile.cl,
                <br className="max-xs" /> cel: +569 9099 0871
              </p>
              <p className="mt-2">
                <b>Paulina Dellafiori:</b> pdellafiori@tradechile.cl,
                <br className="max-xs" /> cel: +569 9435 1340
              </p>
              <p className="mt-2">
                Los Laureles 1090, of. 403,
                <br className="max-xs" /> Vitacura, Santiago Chile
              </p>
              <img
                alt="B & D"
                className="contact p-2"
                src="/images/logos/bazan.png"
              />
              <img
                className="contact"
                alt="Trade Chile"
                src="/images/logos/trade-3.png"
              />
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.7239134750967!2d-70.59288408542433!3d-33.40436638078719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf3a723c1907%3A0xe947d7707649eae4!2sLos%20Laureles%201090%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1597776317731!5m2!1ses-419!2scl"
            frameBorder="0"
            allowFullScreen=""
            tabIndex="0"
          ></iframe>
        </div>
      </Content>
    </Browser>
  );
}

Page.defaultProps = {};

export default Page;
