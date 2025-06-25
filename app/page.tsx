"use client";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import flores from "../public/img/flores.svg"
import floresJ from "../public/img/flores2.svg"
import Countdown from "./components/Countdown"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGift,
  faCheck,
  faPersonDress,
  faChurch,
  faChampagneGlasses,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Home: NextPage = () => {
  const weddingDate = "2025-12-13T16:00:00";
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
        <header className="relative flex min-h-screen items-center justify-center bg-gray-100 overflow-hidden">
          {/* letra J */}
          <div className="absolute -top-10 -left-12 w-1/2 h-full flex items-start justify-end pr-16 pt-20">
            <div className="relative">
              <span className="font-playfair-display text-[15rem] leading-none text-gray-800 opacity-90">J</span>
              <Image
                src={floresJ}
                alt="img"
                width={300}
                height={400}
                className="absolute -bottom-40 right-2 transform translate-x-1/4"
              />
            </div>
          </div>

          {/* separador */}
          <div className="absolute h-full w-px bg-gray-400 left-3/7 transform -translate-x-1/2"></div>

          {/* letra b */}
          <div className="absolute -top-30 right-40 w-1/2 h-full flex flex-col items-start justify-center pl-16 pt-20">
            <div className="relative mb-4">
              <span className="font-playfair-display text-[15rem] leading-none text-gray-800 opacity-90">B</span>
              <Image
                src={flores}
                alt="img"
                width={300}
                height={400}
                className="absolute -top-40 left-0 transform -translate-x-1/4"
              />
            </div>
          </div>

          <div className="absolute top-35 -right-20 w-1/2 h-full flex flex-col items-start justify-center pl-16 pt-20">
            <p className="font-script text-6xl text-gray-800 mb-4">Nuestra Boda</p>
            <h1 className="font-cormorant-garamond text-7xl font-bold text-gray-800 mb-4">
              Jordi <span className="font-script">&</span> Brenda
            </h1>
            <p className="font-cormorant-garamond text-center text-3xl text-gray-700 mb-8">
              13 DE DICIEMBRE 2025
            </p>
            <p className="font-cormorant-garamond text-xl text-center text-gray-700 mb-2">FALTAN</p>
            <Countdown targetDate={weddingDate} />
          </div>
        </header>

        {/* --- Invitacion --- */}
        <section className="bg-cream-lighter py-20 text-center font-cormorant-garamond">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-2xl md:text-3xl mb-16 leading-relaxed text-gray-700">
              TENEMOS EL GUSTO DE INVITARLOS A
              <br />
              NUESTRO ENLACE MATRIMONIAL, CON LA BENDICION
              <br />
              DE DIOS, NUESTROS PADRES,
              <br />
              HERMANOS Y SERES QUERIDOS.
            </p>

            <div className="flex justify-center items-center my-16">
              <div className="text-right pr-8 md:pr-12 space-y-4">
                <p className="text-xl md:text-2xl tracking-wider font-semibold text-gray-800">PEDRO MORENO SALDAÑA</p>
                <p className="text-xl md:text-2xl tracking-wider font-semibold text-gray-800">BLANCA HERNANDEZ SANCHEZ</p>
              </div>

              <div className="h-28 w-px bg-gray-400"></div>

              <div className="text-left pl-8 md:pl-12 space-y-4">
                <p className="text-xl md:text-2xl tracking-wider font-semibold text-gray-800">ERASMO BRITO INIESTA</p>
                <p className="text-xl md:text-2xl tracking-wider font-semibold text-gray-800">ROSICELA HERNANDEZ PLASCENCIA</p>
              </div>
            </div>

            <p className="text-2xl italic max-w-3xl mx-auto leading-relaxed text-gray-700">
              ASÍ QUE YA NO SON DOS, SINO UNO SOLO. POR TANTO, LO QUE
              <br />
              DIOS HA UNIDO, QUE NO LO SEPARE EL HOMBRE.
            </p>
          </div>
        </section>

        {/* --- Fotografias --- */}
        <section className="py-20 text-center">
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
        <section className="bg-cream-light py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

              {/* Card 1: Ceremonia */}
              <div className="bg-white/70 border border-gray-300 rounded-lg shadow-lg p-8 flex flex-col text-center h-full">
                <div className="flex-grow">
                  <div className="flex justify-center">
                    <FontAwesomeIcon icon={faChurch} className="text-4xl text-brown-dark mb-4" />
                  </div>
                  <h3 className="font-cormorant-garamond text-3xl font-bold tracking-wider text-gray-800">
                    CEREMONIA
                  </h3>
                  <p className="font-cormorant-garamond text-2xl text-gray-700 mt-2">
                    4:00 PM
                  </p>
                  <div className="w-20 h-px bg-gray-300 my-6 mx-auto"></div>
                  <p className="font-cormorant-garamond text-xl font-semibold text-gray-800">
                    PARROQUIA DE SAN JUAN BAUTISTA
                  </p>
                  <p className="font-cormorant-garamond text-base text-gray-600 mt-2">
                    C. 20 de Noviembre 1, Centro, 62760 Tlaltizapán de Zapata, Mor.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/place/Parroquia+de+San+Juan+Bautista/@18.6834379,-99.1678284,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brown-medium text-gray-800 py-2 px-6 rounded-full font-sans font-semibold text-sm hover:bg-brown-dark transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    VER UBICACIÓN
                  </a>
                </div>
              </div>

              {/* Card 2: Recepcion */}
              <div className="bg-white/70 border border-gray-300 rounded-lg shadow-lg p-8 flex flex-col text-center h-full">
                <div className="flex-grow">
                  <div className="flex justify-center">
                    <FontAwesomeIcon icon={faChampagneGlasses} className="text-4xl text-brown-dark mb-4" />
                  </div>
                  <h3 className="font-cormorant-garamond text-3xl font-bold tracking-wider text-gray-800">
                    RECEPCIÓN
                  </h3>
                  <p className="font-cormorant-garamond text-2xl text-gray-700 mt-2">
                    5:30 PM
                  </p>
                  <div className="w-20 h-px bg-gray-300 my-6 mx-auto"></div>
                  <p className="font-cormorant-garamond text-xl font-semibold text-gray-800">
                    JARDÍN MAGNOLIA
                  </p>
                  <p className="font-cormorant-garamond text-base text-gray-600 mt-2">
                    C. de la Luz 13, Chulavista, 62550 Jiutepec, Mor.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/place/Jardín+Magnolia/@18.8953942,-99.1764669,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brown-medium text-gray-800 py-2 px-6 rounded-full font-sans font-semibold text-sm hover:bg-brown-dark transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    VER UBICACIÓN
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Fotografias --- */}
        <section className="py-20 text-center">
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

        {/* --- Sección de Detalles y Vestimenta --- */}
        <section className="bg-cream-lighter font-serif text-gray-800 py-20">
          <div className="container mx-auto px-4 space-y-24">

            {/* --- Detalles del Evento --- */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-cormorant-garamond text-4xl tracking-wider mb-12">
                DETALLES DEL EVENTO
              </h2>
              <div className="space-y-10 font-cormorant-garamond text-xl md:text-2xl">

                {/* Misa */}
                <div className="flex justify-between items-center gap-6">
                  <div className="text-left">
                    <p className="font-semibold">MISA: PARROQUIA SAN FELIPE DE JESUS</p>
                    <p className="text-gray-600 text-lg md:text-xl">HORA: 1:30 PM</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Parroquia+San+Felipe+de+Jesus+Cuernavaca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-brown-dark transition-colors"
                    aria-label="Ver ubicación de la Parroquia San Felipe de Jesus"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
                  </a>
                </div>

                {/* Fiesta */}
                <div className="flex justify-between items-center gap-6">
                  <div className="text-left">
                    <p className="font-semibold">FIESTA: JARDÍN MAGNOLIA, MORELOS</p>
                    <p className="text-gray-600 text-lg md:text-xl">RECEPCIÓN: 4:00 PM</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jardin+Magnolia+Jiutepec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-brown-dark transition-colors"
                    aria-label="Ver ubicación de Jardín Magnolia"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
                  </a>
                </div>

              </div>
            </div>

            {/* --- Vestimenta --- */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-cormorant-garamond text-4xl tracking-wider mb-12">
                VESTIMENTA
              </h2>
              <div className="flex justify-center items-center gap-8 md:gap-12 font-cormorant-garamond text-xl md:text-2xl tracking-widest">
                <FontAwesomeIcon icon={faUserTie} className="text-5xl md:text-6xl" />
                <span className="font-semibold">FORMAL/ETIQUETA</span>
                <FontAwesomeIcon icon={faPersonDress} className="text-5xl md:text-6xl" />
              </div>
              <div className="mt-12">
                <h3 className="font-cormorant-garamond text-xl md:text-2xl tracking-widest mb-6">
                  PALETA DE COLORES SUGERIDA
                </h3>
                <div className="flex justify-center items-center gap-3 md:gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F2E9D8] border border-gray-300" title="Beige Claro"></div>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E3C4B3] border border-gray-300" title="Rosa Nude"></div>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#BFA594] border border-gray-300" title="Taupe"></div>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8C7064] border border-gray-300" title="Marrón"></div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- Fotografias --- */}
        <section className="py-20 text-center">
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

        {/* --- Asistencia y Regalos --- */}
        <section className="bg-cream-light py-20 text-center">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mb-16 tracking-wider">
            ASISTENCIA / MESA DE REGALOS
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 max-w-4xl mx-auto mb-16">
            <div className="flex flex-col items-center flex-1">
              <p className="font-serif text-3xl text-gray-800 mb-6">CONFIRMAR ASISTENCIA</p>
              <Link
                href="/confirmacion"
                className="w-24 h-24 flex items-center justify-center border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Confirmar Asistencia"
              >
                <FontAwesomeIcon icon={faCheck} className="text-5xl" />
              </Link>
            </div>

            <div className="hidden md:block h-32 w-px bg-gray-400 mx-12"></div>
            <div className="md:hidden w-48 border-t border-gray-400 my-8"></div>

            <div className="flex flex-col items-center flex-1">
              <p className="font-serif text-3xl text-gray-800 mb-6">MESA DE REGALOS</p>
              <a
                href="https://www.amazon.com.mx/wedding/registry/3OL181EBLDCXB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 flex items-center justify-center border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Mesa de Regalos"
              >
                <FontAwesomeIcon icon={faGift} className="text-5xl" />
              </a>
            </div>
          </div>

          <p className="max-w-3xl mx-auto px-4 text-xl leading-relaxed text-gray-800">
            SABEMOS LO ESPECIALES QUE SON SUS HIJOS, PERO QUEREMOS QUE
            ESTA NOCHE SEA UNA ESCAPADA PARA ADULTOS. ¡ESPERAMOS
            DISFRUTEN CON NOSOTROS AL MAXIMO!
          </p>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-cream-light mt-20 py-10 text-center">
        <p className="text-xl">
          Gracias por compartir este momento con nosotros.
        </p>
        <p className="text-sm mt-2">Desarrollado por Jordi MH </p>
      </footer>
    </div>
  );
};

export default Home;