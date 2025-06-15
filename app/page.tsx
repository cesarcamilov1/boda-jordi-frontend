"use client";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

// Asumimos que tienes un componente Countdown en esta ruta
import Countdown from "./components/Countdown";

// Importaciones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGift,
  faCheckCircle,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-cream-lighter font-serif text-gray-800">
      <Head>
        <title>Brenda y Jordi | Nuestra Boda</title>
        <meta
          name="description"
          content="Invitación a la boda de Brenda y Jordi el 13 de Diciembre de 2025."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {/* --- Sección Hero --- */}
        <header className="bg-cream-light py-24 text-center">
          <h1 className="font-script text-7xl md:text-8xl text-brown-dark mb-4">
            Brenda y Jordi
          </h1>
          <p className="max-w-xl mx-auto px-4 text-lg leading-relaxed mb-10">
            Tenemos el gusto de invitarlos a nuestro enlace matrimonial, con la bendicion de DIOS, nuestros padres,
            hermanos y seres queridos.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-2xl mx-auto">
            <div className="text-brown-medium text-center font-display">
              <p className="tracking-wider">PEDRO MORENO SALDAÑA</p>
              <p className="tracking-wider">BLANCA ESTELA HERNANDEZ SANCHEZ</p>
            </div>
            <div className="border-t md:border-l border-gray-400 w-20 md:h-20"></div>
            <div className="text-brown-medium text-center font-display">
              <p className="tracking-wider">ERASMO BRITO INIESTA</p>
              <p className="tracking-wider">ROCISELA PLASCENCIA HERNANDEZ</p>
            </div>
          </div>
          <p className="font-display text-4xl text-brown-dark mt-12">
            13 de Diciembre de 2025
          </p>
        </header>

        {/* --- Cita y Fotografias --- */}
        <section className="py-20 text-center">
          <p className="max-w-2xl mx-auto px-4 text-2xl italic mb-12">
            &quot;Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre.
            &quot;
          </p>
          <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/img/PedidaBN.jpeg"
              alt="Brenda y Jordi abrazados"
              width={800}
              height={1000}
              layout="responsive"
            />
          </div>
        </section>

        {/* --- Detalles del Evento --- */}
        <section className="py-20 text-center bg-cream-light">
          <h2 className="font-script text-6xl text-brown-dark mb-10">
            Detalles del Evento
          </h2>
          <div className="space-y-4 text-xl">
            <p>
              <strong>Lugar:</strong> Jardín Magnolia, Jiutepec Morelos
            </p>
            <p>
              <strong>Recepción:</strong> 4:00 PM
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/219x1PZCheMR7wWe6?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center bg-brown-medium text-gray-800 py-3 px-8 rounded-full font-sans font-semibold text-lg hover:bg-brown-dark transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-gray-800" />
            Ver Ubicación
          </a>
        </section>

        {/* --- Vestimenta y Paleta --- */}
        <section className="py-20 text-center">
          <h2 className="font-script text-6xl text-brown-dark mb-10">
            Vestimenta
          </h2>
          <div className="flex items-center justify-center gap-12 mb-12">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faGift}
                size="3x"
                className="text-gray-600 mb-2"
              />
              <p className="font-display text-xl">Formal</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon
                icon={faPersonDress}
                size="3x"
                className="text-gray-600 mb-2"
              />
              <p className="font-display text-xl">Etiqueta</p>
            </div>
          </div>

          <h3 className="text-2xl font-display text-brown-dark mb-6">
            Paleta de colores sugerida
          </h3>
          <div className="flex justify-center">
            <Image
              src="/img/paleta3.png"
              alt="Paleta de colores para la boda"
              width={400}
              height={100}
            />
          </div>
        </section>

        {/* --- Asistencia y Regalos --- */}
        <section className="py-20 text-center bg-cream-light">
          <h2 className="font-script text-6xl text-brown-dark mb-10">
            Asistencia y Regalos
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link
              href="/confirmacion"
              className="inline-flex items-center bg-brown-medium text-gray-900 py-3 px-8 rounded-full font-sans font-semibold text-lg hover:bg-brown-dark transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
              Confirmar Asistencia
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brown-medium text-gray-900 py-3 px-8 rounded-full font-sans font-semibold text-lg hover:bg-brown-dark transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGift} className="mr-3" />
              Mesa de Regalos
            </a>
          </div>
        </section>

        {/* --- Countdown --- */}
        <section className="py-24 text-center">
          <h2 className="font-script text-7xl text-brown-dark mb-8">Faltan</h2>
          <Countdown />
        </section>

        <div className="max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/img/VistaBN.jpeg"
            alt="Te esperamos"
            width={1200}
            height={800}
            layout="responsive"
          />
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-cream-light mt-20 py-10 text-center">
        <p className="text-xl">
          Gracias por compartir este momento con nosotros.
        </p>
      </footer>
    </div>
  );
};

export default Home;