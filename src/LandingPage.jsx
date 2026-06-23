import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl group bg-gray-900">
      {/* Imágenes con transición */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
className="w-full h-full object-cover"        />
      </AnimatePresence>
      
      {/* Overlay gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Botones de navegación mejorados */}
      <motion.button
        onClick={goToPrevious}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-500 text-gray-800 hover:text-white rounded-full p-2 md:p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        onClick={goToNext}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-500 text-gray-800 hover:text-white rounded-full p-2 md:p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
      
      {/* Indicadores de posición mejorados */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20 bg-black/30 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 rounded-full">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-green-500 shadow-lg shadow-green-500/50 w-6 md:w-10 h-2 md:h-3' 
                : 'bg-white/60 hover:bg-white w-2 md:w-3 h-2 md:h-3'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Contador de imágenes */}
      <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold z-20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const weekDays = ['Inicio', 'Lunes 10', 'Martes 11', 'Miércoles 12', 'Jueves 13', 'Viernes 14', 'Viernes 21'];

const sections = {
  Inicio: [],
  'Lunes 10': [
    {
      id: 1,
      title: "9:30 AM - Acto Oficial de la Semana de la Facultad de Ingeniería",
      description: "Ceremonia oficial con izamiento de pabellones por la Banda del Ejército, entonación de himnos y entrega de ofrenda floral. Participaron el Vicerrector Académico Dr. Héctor Hugo Sánchez Carlessi, Vicerrectora de Investigación Dra. Sandra Negro y Decano de Ingeniería Dr. Ing. Santiago Fidel Rojas Tuya. Fotografía oficial en la Explanada URP.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      carouselImages: ["/BANDA.jpg", "/HIMNO.jpg", "/FLORES.jpg", "/FOTOGRUPAL.jpg"],
      videoLink: "https://www.facebook.com/share/v/1A7WmP2e3q/",
      youtubeLink: "https://www.youtube.com/watch?v=k6l8k4Q4tlI&list=PL8jHySzs9Ce-UEq2c_wwpv6KZRiMIaVYh"
    },
    {
      id: 2,
      title: "10:00 AM - Acto Académico de Inauguración",
      description: "Palabras de bienvenida de la Dra. Ing. Esther Joni Vargas Chang y discurso inaugural del Decano de Ingeniería Dr. Ing. Santiago Fidel Rojas Tuya. Saludo del Embajador de Indonesia Sr. Ricky Suhendar y ponencia del Sr. Wahyu Agung Nugroho sobre cooperación Perú-Indonesia (CEPA). Premiación al Mérito Académico para estudiantes destacados 2024-II y 2025-I. Palabras del Rector, presentación del Grupo 'Canta Palma URP' y brindis de honor. Lugar: Auditorio Ollantaytambo.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/AUDITORIO7.jpg", "/AUDITORIO8.jpg", "/AUDITORIO9.jpg", "/PREMIO4.jpg", "/PREMIO5.jpg"]
    },
    {
      id: 3,
      title: "6:30 PM - Evolución y normativas de las redes de cableado de cobre hacia la fibra óptica",
      description: "Ing. Álvaro Cayo Urrutia (Alcared SAC) expuso sobre tendencias en infraestructura de telecomunicaciones, migración de cobre a fibra óptica y normativas internacionales. Ventajas técnicas, económicas y de rendimiento de la fibra óptica. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Electrónica.",
      imageUrl: "/CONFERENCIA1LUNESS.jpg"
    },
    {
      id: 4,
      title: "7:30 PM - Proyectos de ingeniería y oportunidades de desarrollo en la Agencia Espacial del Perú",
      description: "Mg. Ing. Christian Pereyra Alpas presentó proyectos estratégicos de CONIDA, oportunidades profesionales en el sector aeroespacial peruano, programas de satélites, colaboraciones internacionales y desafíos tecnológicos. Motivación sobre el futuro del sector espacial nacional. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Electrónica.",
      imageUrl: "/CONFERENCIA2LUNES.jpg"
    },
    {
      id: 5,
      title: "8:30 PM - Investigación en Pequeños Satélites",
      description: "Ing. Roxana Morán Morales expuso sobre CubeSats y nanosatélites, tecnología que revoluciona el acceso al espacio. Casos de éxito en investigación científica, monitoreo ambiental y telecomunicaciones. Aspectos técnicos de diseño, lanzamiento y aplicaciones para Perú. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Electrónica.",
      imageUrl: "/CONFERENCIA3LUNESS.jpg"
    }
  ],
  'Martes 11': [
    {
      id: 8,
      title: "11:30 AM - II Feria ConstruCivil 2025",
      description: "Dra. Enriqueta Pereyra, Directora de la Escuela Profesional de Ingeniería Civil, inauguró la II FERIA CONSTRUCIVIL, contó con la participación de los docentes de la Escuela y diferentes empresas invitadas del área de la construcción, evento realizado en el Aulario de Inca Roca.",
      imageUrl: "/feria12.jpg"
    },
    {
      id: 9,
      title: "3:00 PM - Conociendo Education Link SAC (vía Zoom)",
      description: "Mg. Víctor Velasco e Ing. Humberto Ravest presentaron herramientas de Education Link SAC: editoriales internacionales, gestión académica y detección de plagio. Facilitan la investigación y promueven integridad científica. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/CONFERENCIA1MARTES.jpg"
    },
    {
      id: 10,
      title: "4:00 PM - Ingeniería Civil como Eje de la Remediación Ambiental",
      description: "Ing. Edwin Moisés Pósito Huapaya expuso sobre el rol de la ingeniería civil en remediación ambiental y cierre sostenible de pozos exploratorios. Técnicas de sellado, protección de acuíferos, monitoreo y metodologías ágiles. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "/CONFERENCIA2MARTESS.jpg"
    },
    {
      id: 11,
      title: "5:00 PM - Fenómeno de la Corrosión en Estructuras de Concreto Armado",
      description: "Ing. William Baca Escobar abordó la corrosión del acero en concreto armado. Mecanismos de corrosión, factores ambientales, técnicas de prevención, protección catódica y métodos de reparación estructural. Estrategias para estructuras durables. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "/INGBACA.jpg"
    },
    {
      id: 12,
      title: "6:00 PM - Diseños Sostenibles de Mezclas Asfálticas",
      description: "Ing. Fabián Cely presentó tendencias en mezclas asfálticas sostenibles: materiales reciclados, aditivos modificadores y asfaltos templados. Criterios de desempeño, durabilidad y economía circular en pavimentos modernos. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "/CONFERENCIA4MATES.jpg"
    },
    {
      id: 13,
      title: "7:00 PM - Tratamientos Superficiales en Pavimentos",
      description: "Ing. Reison Huari expuso sobre tratamientos superficiales en pavimentos: sellos asfálticos, micropavimentos y lechadas. Criterios de selección según tipo de vía, tráfico y clima. Beneficios económicos de tratamientos preventivos. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "/CONFERENCIA5MARETSS.jpg"
    }
  ],
  'Miércoles 12': [
    {
      id: 14,
      title: "Inauguración del Ciclo de Conferencias Internacionales Tecnológicas",
      description: "Dra. Alicia Chiok Guerra, Jefa de la Biblioteca Virtual de Ingeniería, inauguró el Ciclo de Conferencias Internacionales Tecnológicas, evento organizado por la BVI.",
      imageUrl: "/innauguracion.jpg"
    },
    {
      id: 15,
      title: "10:00 AM - El Algoritmo Verde y la IA en Infraestructura Sostenible",
      description: "Dr. Carlos Chavarry Vallejos expuso sobre IA aplicada en infraestructura sostenible. El 'Algoritmo Verde' combina análisis predictivo, optimización de recursos y reducción de impacto ambiental. Casos de éxito y posibilidades en Perú. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/1raconferencia_miercoles.jpg"
    },
    {
      id: 16,
      title: "11:00 AM - Ian, el Asistente Académico con IA en la Biblioteca Ebook 7/24",
      description: "Mg. Ángel Revolledo Morán presentó a Ian, asistente académico con IA disponible 24/7. Ayuda a encontrar recursos, generar referencias y resumir artículos instantáneamente. Acelera investigación y mejora productividad académica. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/cambiaesto.jpg"
    },
    {
      id: 17,
      title: "11:30 AM - Futsal Masculino – Etapa Final y Premiación",
      description: "Final del torneo de Futsal Masculino con partidos emocionantes. Los equipos demostraron técnica, estrategia y espíritu deportivo. Premiación a campeones, subcampeones y jugadores destacados. Lugar: Campo deportivo de la Facultad de Biología. Organiza: Unidad de Extensión Cultural y Proyección Social.",
      imageUrl: "/FUTSAL.jpg"
    },
    {
      id: 18,
      title: "12:00 PM - Estrategias de Aprendizaje en la Era Digital con McGraw Hill",
      description: "Mg. Gustavo Orozco Aragón compartió estrategias de aprendizaje con McGraw Hill: recursos interactivos, evaluación adaptativa y seguimiento académico. Técnicas de estudio basadas en evidencia para mejorar comprensión y retención. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/editado8.png"
    },
    {
      id: 20,
      title: "4:00 PM - IA y Educación Superior: Oportunidades y Desafíos",
      description: "Mg. Luis Piedra Rubio expuso sobre IA en educación superior. Oportunidades para personalizar aprendizaje, automatizar evaluaciones y mejorar experiencia estudiantil. Desafíos éticos, técnicos y pedagógicos: privacidad, equidad y formación docente. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/ingpiedra.png"
    },
    {
      id: 21,
      title: "5:00 PM - Diseñando Estrategias para Pruebas de Sistemas con IA",
      description: "Mg. Karen Zully Aylas Torres presentó metodologías para pruebas de software con IA. Testing automatizado, generación de casos de prueba, detección de bugs con machine learning y optimización de QA. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/CONFERENCIA6MIERCOLSA.jpg"
    },
    {
      id: 22,
      title: "6:00 PM - Infraestructura de Alto Rendimiento y Aceleradores en la Era de la IA",
      description: "Dr. Emilio Bustamante Avanzini expuso sobre infraestructura de hardware para IA a gran escala. Arquitecturas de GPUs, TPUs, sistemas distribuidos y aceleradores. Requerimientos para deep learning y consideraciones de costo-beneficio. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "/CONFERENCIA7MIERCOLEAS.jpg"
    },
    {
      id: 24,
      title: "8:00 PM - Arquitectura de los Vehículos Híbridos y Eléctricos",
      description: "Ing. Gonzalo Sáenz García expuso sobre arquitectura de vehículos híbridos y eléctricos. Sistemas de propulsión, baterías, motores y regeneración de energía. Tendencias en movilidad sostenible y oportunidades en el sector automotriz. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Mecatrónica.",
      imageUrl: "/CONFERNCIA9MIERCOLES.jpg"
    }
  ],
  'Jueves 13': [
    {
      id: 26,
      title: "11:00 AM - Conferencia 'Becas de Postgrado en Indonesia' + Baile tradicional y Muestra de Cultura y Arte",
      description: "El Decano de Ingeniería, Dr. Ing. Santiago Fidel Rojas Tuya, presenta a Handayani Lintang Purwaning Ayu, Jefa de la Sección Cultural, Social y de Información de la Embajada de Indonesia, quien expuso sobre becas de postgrado para estudiantes peruanos. El evento incluyó baile tradicional indonesio y muestra de cultura y arte, promoviendo el intercambio académico Perú-Indonesia. Lugar: Auditorio Ollantaytambo.",
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop",
      carouselImages: ["/cambio2.jpg", "/cambio1.jpg", "/cambio3.jpg", "/cambio4.jpg", "/BAILE1.jpg"],
      videoLink: "https://www.facebook.com/share/v/14KGPERGB6a/"
    },
    {
      id: 27,
      title: "3:00 PM - La importancia de la preservación de los recursos hídricos para la ciudad de Lima y Callao",
      description: "SEDAPAL presentó la gestión y preservación de recursos hídricos en Lima y Callao. Escasez hídrica, fuentes de agua (Rímac, Chillón, Lurín), proyectos de infraestructura, tratamiento de aguas y participación ciudadana. Rol de la ingeniería en soluciones sostenibles. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Industrial y Unidad de Extensión Cultural y Proyección Social.",
      imageUrl: "/CONFERENCIA2.jpg"
    }
  ],
  'Viernes 14': [
    {
      id: 28,
      title: "7:30 PM - Gran Cena de Confraternidad - Semana de la Facultad de Ingeniería",
      description: "La comunidad de Ingeniería se reunió en la Gran Cena de Confraternidad, una noche especial de celebración y camaradería. El evento contó con un buffet internacional, orquesta en vivo y show artístico. Los docentes, estudiantes y autoridades compartieron en el restaurante Mandarin (Av. Javier Prado Este 1860), cerrando con broche de oro la Semana de la Facultad de Ingeniería 2025.",
      imageUrl: "/viernes14.jpg"
    }
  ],
  'Viernes 21': [
    {
      id: 32,
      title: "8:30 AM - 2:00 PM - Gymkhana",
      description: "Jornada deportiva y recreativa con pruebas físicas, juegos de habilidad y desafíos mentales por equipos. Los participantes acumularon puntos en diferentes estaciones. Promoción de camaradería, espíritu deportivo e integración estudiantil. Lugar: Campo deportivo de la Facultad de Biología. Organiza: Unidad de Extensión Cultural y Proyección Social.",
      imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
      carouselImages: ["/GYNKANAVIERNES.jpg", "/GYNKANAVIERNES2.jpg", "/GYNKANAVIERNES3.jpg", "/GYNKANAVIERNES4.jpg"]
    },
    {
      id: 34,
      title: "5:30 PM - 6:00 PM - Ceremonia de Clausura de la Semana de la Facultad de Ingeniería",
      description: "Cierre oficial de la Semana de Ingeniería. Palabras de bienvenida de la Dra. Ing. Esther Joni Vargas Chang y clausura del Decano de Ingeniería Dr. Ing. Santiago Fidel Rojas Tuya. Reconocimiento a docentes con 25 y 50 años de servicio. Premiación del IV Concurso de Fotografía URP. Mensaje inspirador sobre el futuro de la ingeniería peruana y compromiso con la excelencia académica. La ceremonia cerró con un brindis de honor.",
      imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      carouselImages: ["/CLAUSURA.jpg", "/CLAUSURA2.jpg", "/CLAUSURA3.jpg", "/CLAUSURA4.jpg"],
      videoLink: "https://www.facebook.com/share/v/17GhxMY7CH/",
      youtubeLink: "https://www.youtube.com/watch?v=Le78gbI1qsU"
    }
  ]
};

const LandingPage = () => {
  const [selectedDay, setSelectedDay] = useState('Inicio');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Principal - Banner Verde con Video */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white py-3 md:py-6 relative overflow-hidden"
      >
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/fondo_encabezado.mp4" type="video/mp4" />
        </video>
        
        {/* Capa verde transparente con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 opacity-80"></div>
        
        {/* Efectos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-teal-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-emerald-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 py-6 md:py-10">
          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between gap-4">
            <img src="/logo_urp.png" alt="URP Logo" className="h-20 w-auto object-contain flex-shrink-0" />
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold leading-tight">
                Semana de Ingeniería 2025
              </h1>
              <p className="text-sm mt-1 font-semibold">Del 10 al 14 de noviembre</p>
            </div>
            <img src="/logo-bvi-blanco.png" alt="BVI Logo" className="h-20 w-auto object-contain flex-shrink-0" />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-8">
            <img src="/logo_urp.png" alt="URP Logo" className="h-32 w-auto object-contain flex-shrink-0" />
            <div className="text-center flex-1">
              <h1 className="text-6xl font-bold">
                Semana de Ingeniería 2025
              </h1>
              <p className="text-2xl mt-2 font-semibold">Del 10 al 14 de noviembre</p>
            </div>
            <img src="/logo-bvi-blanco.png" alt="BVI Logo" className="h-32 w-auto object-contain flex-shrink-0" />
          </div>
        </div>
      </motion.header>

      {/* Navigation Menu */}
      <nav className="sticky top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-50 border-b-2 border-gray-200">
        <div className="w-full">
          <div className="flex items-center justify-start md:justify-center py-4 md:py-5 overflow-x-auto px-4 md:px-6">
            <div className="flex space-x-3 md:space-x-4 min-w-max">
              {weekDays.map((day, index) => (
                <motion.button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-lg font-bold transition-all whitespace-nowrap ${
                    selectedDay === day
                      ? 'bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white shadow-lg'
                      : 'text-gray-700 bg-gray-100 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {day}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="min-h-screen">
        {selectedDay === 'Inicio' ? (
          /* Página de Inicio Especial */
          <div>

            {/* Presentación y Saludo del Decano */}
            <div className="bg-white py-8 md:py-16 relative overflow-hidden">
              {/* Efectos de fondo */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 pb-3 md:pb-4 border-b-4 border-green-500 inline-block text-green-800"
                >
                  PRESENTACIÓN Y SALUDO
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mt-6 md:mt-8">
                  {/* Imagen del Decano */}
                  <motion.div 
                    data-aos="fade-right"
                    className="flex-shrink-0 w-full md:w-auto"
                  >
                    <div className="relative">
                      <div className="w-full max-w-sm mx-auto md:max-w-none md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src="/DECANO.jpg" 
                          alt="Decano de Ingeniería"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Texto de Presentación */}
                  <motion.div 
                    data-aos="fade-left"
                    className="flex-1 w-full"
                  >
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200 shadow-xl">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-700">
                        El Decano de la Facultad de Ingeniería presenta en esta oportunidad 
                        una edición especial de las principales actividades realizadas por el 56° 
                        Aniversario de la Facultad de Ingeniería, en donde la Facultad de Ingeniería 
                        ha sido una de las primeras facultades que se implementaron desde su creación.
                      </p>
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-gray-700">
                        A nombre del Consejo de Facultad de Ingeniería, brindamos un cordial 
                        saludo a toda la comunidad de la Facultad de Ingeniería, hacemos votos por el continuo 
                        crecimiento y desarrollo institucional de nuestra facultad.
                      </p>
                      <div className="pt-4 md:pt-6 mt-4 md:mt-6">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-1 md:mb-2">DR. ING. SANTIAGO FIDEL ROJAS TUYA</p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-green-600 pb-3 md:pb-4 border-b-4 border-green-500 inline-block">DECANO DE LA FACULTAD DE INGENIERÍA</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Jefa de Biblioteca Virtual */}
            {/* <div className="bg-white py-8 md:py-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 pb-3 md:pb-4 border-b-4 border-green-500 inline-block text-green-800"
                >
                  BIBLIOTECA VIRTUAL DE INGENIERÍA
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mt-6 md:mt-8">
                  <motion.div 
                    data-aos="fade-right"
                    className="flex-shrink-0 w-full md:w-auto"
                  >
                    <div className="relative">
                      <div className="w-full max-w-sm mx-auto md:max-w-none md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src="/CHIOK.jpg" 
                          alt="Jefa de Biblioteca Virtual"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    data-aos="fade-left"
                    className="flex-1 w-full"
                  >
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200 shadow-xl">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-700">
                        La Biblioteca Virtual de Ingeniería se enorgullece en ser parte fundamental del desarrollo 
                        académico y de investigación de nuestra comunidad universitaria. A través de nuestras 
                        plataformas digitales, brindamos acceso a recursos bibliográficos de última generación, 
                        bases de datos especializadas y herramientas tecnológicas que impulsan la excelencia 
                        académica de nuestros estudiantes y docentes.
                      </p>
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-gray-700">
                        Durante la Semana de Ingeniería 2025, presentamos conferencias innovadoras sobre 
                        inteligencia artificial, recursos digitales y nuevas tecnologías aplicadas a la educación 
                        superior, reafirmando nuestro compromiso con la vanguardia educativa y el apoyo constante 
                        a la investigación científica.
                      </p>
                      <div className="border-t-2 border-green-500 pt-4 md:pt-6 mt-4 md:mt-6">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-1 md:mb-2">DRA. ALICIA CHIOK GUERRA DE TAIPE</p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-green-600">JEFA DE BIBLIOTECA VIRTUAL DE INGENIERÍA</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div> */}

            {/* Descripción de la Semana de Ingeniería */}
            <div className="bg-white py-8 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 items-center">
                  {/* Imagen del Afiche */}
                  <motion.div 
                    data-aos="fade-left"
                    className="flex-shrink-0 w-full md:w-auto"
                  >
                    <div className="relative">
                      <div className="w-full max-w-sm mx-auto md:max-w-none md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src="/afiche.jpg" 
                          alt="Afiche Semana de Ingeniería 2025"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Texto de Descripción */}
                  <motion.div 
                    data-aos="fade-right"
                    className="flex-1"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-2xl md:rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-green-200">
                        <motion.h2 
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: false }}
                          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 md:mb-6"
                        >
                          Semana de Ingeniería 2025
                        </motion.h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        La Semana de la Facultad de Ingeniería de la Universidad Ricardo Palma es el evento académico 
                        y cultural más importante del año, donde convergen estudiantes, docentes, profesionales y empresas 
                        del sector tecnológico e industrial. Durante cinco días completos, nuestra comunidad universitaria 
                        participa en conferencias magistrales, talleres especializados, competencias técnicas, ferias de 
                        proyectos y actividades de networking que fortalecen la formación integral de nuestros futuros 
                        ingenieros. Este espacio permite el intercambio de conocimientos, la exposición de investigaciones 
                        innovadoras y la creación de vínculos entre el mundo académico y el sector empresarial, consolidando 
                        el compromiso de la URP con la excelencia educativa y el desarrollo tecnológico del país.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header for Selected Day */}
            <motion.div 
              key={selectedDay}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-12 relative overflow-hidden"
            >
              {/* Efectos decorativos */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold mb-2"
                >
                  {selectedDay}
                </motion.h2>
                <motion.p 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-green-100"
                >
                  Eventos de la Semana de Ingeniería
                </motion.p>
              </div>
            </motion.div>

            {/* Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
              <AnimatePresence mode="wait">
                {sections[selectedDay].map((section, index) => (
                  <motion.section
                    key={section.id}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-6 md:gap-12 mb-12 md:mb-24`}
                  >
                    {/* Image - Left on even, Right on odd */}
                    <div className="flex-1 w-full">
                      {section.carouselImages ? (
                        <Carousel images={section.carouselImages} />
                      ) : (
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="relative group"
                        >
                          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
                            <img
                              src={section.imageUrl}
                              alt={section.title}
                              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Text Content - Right on even, Left on odd */}
                    <div className="flex-1 w-full">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 md:mb-6 shadow-lg">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></span>
                          {selectedDay} • Evento {index + 1}
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
                          {section.title}
                        </h3>
                        <div className="bg-gradient-to-br from-white to-green-50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-green-100 shadow-lg">
                          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                            {section.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            {section.videoLink && (
                              <a
                                href={section.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 md:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all shadow-md hover:shadow-lg hover:scale-105"
                                style={{ color: 'white' }}
                              >
                                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="hidden sm:inline">Ver en Facebook</span>
                                <span className="sm:hidden">Facebook</span>
                              </a>
                            )}
                            {section.youtubeLink && (
                              <a
                                href={section.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 md:gap-2 bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all shadow-md hover:shadow-lg hover:scale-105"
                                style={{ color: 'white' }}
                              >
                                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span className="hidden sm:inline">Ver en YouTube</span>
                                <span className="sm:hidden">YouTube</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </main>

    </div>
  );
};

export default LandingPage;
