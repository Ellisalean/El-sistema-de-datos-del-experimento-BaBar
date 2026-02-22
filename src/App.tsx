/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Info, 
  Database, 
  Cpu, 
  Workflow, 
  Zap, 
  Layers, 
  Table, 
  Network, 
  FileText,
  Atom,
  Binary,
  Link as LinkIcon,
  MousePointer2,
  GitBranch,
  MoreHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    id: 1,
    title: "Sistema de Datos del Experimento BaBar y el Uso de Objectivity/DB",
    subtitle: "Bases de Datos Orientadas a Objetos en Física de Altas Energías",
    type: "title",
    content: [
      "Proyecto BaBar – Física de Partículas",
      "Gestión de datos complejos y estructuras anidadas",
      "Solución basada en Objectivity/DB"
    ],
    image: "https://picsum.photos/seed/babar/800/600?blur=2",
    explanation: "BaBar fue un experimento de física de altas energías diseñado para estudiar la violación de simetría CP en mesones B. Generaba volúmenes masivos de datos con estructuras altamente complejas."
  },
  {
    id: 2,
    title: "Índice",
    type: "index",
    items: [
      "Contexto del Proyecto BaBar",
      "Problema del Modelo Relacional",
      "¿Qué es Objectivity/DB?",
      "Ventajas en el Manejo de Objetos Complejos",
      "Relaciones, Asociaciones y Jerarquías",
      "Conclusiones"
    ]
  },
  {
    id: 3,
    header: "1. Contexto del Proyecto BaBar",
    title: "Contexto del Proyecto BaBar",
    type: "split-content",
    bullets: [
      "Experimento de física de altas energías (SLAC, EE.UU.)",
      "Analizaba colisiones electrón-positrón",
      "Generación masiva de datos científicos",
      "Estructuras de datos complejas y anidadas"
    ],
    image: "https://picsum.photos/seed/physics/1000/1200",
    icon: Atom
  },
  {
    id: 4,
    header: "2. Problema del Modelo Relacional",
    title: "El Conflicto Tecnológico",
    type: "content",
    bullets: [
      "Representación en tablas planas",
      "Necesidad de múltiples JOIN costosos",
      "Dificultad para modelar jerarquías profundas",
      "Bajo rendimiento ante estructuras anidadas"
    ],
    image: "https://picsum.photos/seed/database/600/400",
    icon: Table
  },
  {
    id: 5,
    header: "3. ¿Qué es Objectivity/DB?",
    title: "¿Qué es Objectivity/DB?",
    type: "section-title",
    number: "3",
    description: "Un sistema orientado a objetos almacena los datos tal como existen en el programa. No necesita transformarlos en tablas. Soporta herencia, encapsulamiento y asociaciones.",
    image: "https://picsum.photos/seed/object/1200/600",
  },
  {
    id: 6,
    header: "4. Ventajas: Objetos Complejos",
    title: "Manejo de Estructuras Complejas",
    type: "grid-cards",
    items: [
      {
        title: "Estructuras Anidadas",
        desc: "Manejo natural de jerarquías científicas complejas sin fragmentación.",
        icon: Layers
      },
      {
        title: "Persistencia Directa",
        desc: "Almacenamiento de objetos tal como existen en la lógica del programa.",
        icon: Database
      },
      {
        title: "Sin Mapeo (ORM)",
        desc: "Eliminación de la costosa capa de traducción entre objetos y tablas.",
        icon: Zap
      },
      {
        title: "Coherencia Total",
        desc: "Sincronía perfecta entre el modelo conceptual y el almacenamiento físico.",
        icon: Workflow
      }
    ]
  },
  {
    id: 7,
    header: "5. Ventajas: Relaciones y Jerarquías",
    title: "Relaciones, Asociaciones y Jerarquías",
    type: "article-grid",
    articles: [
      {
        title: "Relaciones Directas",
        desc: "Uso de punteros persistentes para conectar objetos sin necesidad de tablas intermedias.",
        icon: LinkIcon
      },
      {
        title: "Navegación Eficiente",
        desc: "Acceso ultra-rápido entre asociaciones complejas mediante referencias directas.",
        icon: MousePointer2
      },
      {
        title: "Soporte de Herencia",
        desc: "Modelado natural de jerarquías de clases tal como se definen en C++ o Java.",
        icon: GitBranch
      },
      {
        title: "Jerarquías Científicas",
        desc: "Representación fiel de la estructura física del detector y los eventos de colisión.",
        icon: Network
      }
    ]
  },
  {
    id: 8,
    header: "6. Conclusiones",
    title: "Conclusiones",
    type: "conclusion",
    text: "El experimento BaBar representó un desafío significativo en el manejo de datos científicos complejos. El modelo relacional tradicional mostró limitaciones para representar estructuras anidadas y relaciones jerárquicas de alta profundidad. La implementación de Objectivity/DB permitió almacenar objetos completos con sus asociaciones y jerarquías, garantizando mayor coherencia entre el modelo conceptual y la persistencia de datos. Este caso demuestra que la elección del modelo de base de datos debe responder a la naturaleza del problema y no a la tradición tecnológica.",
    sources: [
      "Objectivity, Inc. (1999). Objectivity/DB technical overview. Objectivity Inc.",
      "SLAC National Accelerator Laboratory. (s.f.). The BaBar experiment. Stanford Linear Accelerator Center. Recuperado de https://www.slac.stanford.edu."
    ]
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 🖼️ COLOCA AQUÍ LA URL DE TU IMAGEN DE FONDO:
  const BACKGROUND_IMAGE_URL = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/dbe975e7-daf2-4a19-9dcd-cf9a89e9e65f_rw_1920.png?h=28634e970f15e32da879837191f657cc"; 

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div 
      className="h-screen w-screen diag-gradient-bg flex flex-col relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: BACKGROUND_IMAGE_URL ? `url(${BACKGROUND_IMAGE_URL})` : undefined 
      }}
    >
      {/* Full-width Header */}
      <div className="slide-header">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Database className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl leading-tight">Objectivity/DB en BaBar</h2>
            <p className="text-sm text-sky-100 font-medium">{slide.header || "Presentación"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <span className="text-sm font-display font-bold bg-black/20 px-4 py-1.5 rounded-full">
            DIAPOSITIVA {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-3">
            <button onClick={() => goToSlide(1)} className="p-2.5 hover:bg-white/10 rounded-xl transition-colors" title="Índice">
              <Home className="w-6 h-6" />
            </button>
            <button className="p-2.5 hover:bg-white/10 rounded-xl transition-colors">
              <Info className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="slide-container">
          {/* Content Area */}
          <div className={`slide-content ${['split-content', 'section-title', 'article-grid'].includes(slide.type) ? 'p-0' : 'p-10'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full flex flex-col"
              >
                {/* ... (other types) */}

                {slide.type === "article-grid" && (
                  <div className="flex-1 flex flex-col justify-center p-16 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 -rotate-45 translate-x-32 -translate-y-32" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rotate-12 translate-x-32 translate-y-32" />
                    
                    <div className="relative z-10">
                      <div className="accent-bar mb-4" />
                      <h2 className="text-4xl font-display font-bold text-slate-900 mb-12">
                        {slide.title}
                      </h2>
                      
                      <div className="grid grid-cols-2 gap-8">
                        {slide.articles?.map((article, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 group"
                          >
                            <div className="flex-1">
                              <h3 className="text-xl font-display font-bold text-slate-800 mb-3">
                                {article.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {article.desc}
                              </p>
                              <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest">
                                <MoreHorizontal className="w-4 h-4" /> More
                              </div>
                            </div>
                            <div className="w-20 h-20 shrink-0 flex items-center justify-center">
                              <article.icon className="w-16 h-16 text-orange-500 stroke-[1.5]" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {slide.type === "title" && (
                  <div className="flex-1 flex gap-10 items-center">
                    <div className="flex-1">
                      <div className="accent-bar" />
                      <h1 className="text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <h3 className="text-xl text-sky-600 font-medium mb-8">
                        {slide.subtitle}
                      </h3>
                      <div className="space-y-4">
                        {slide.content?.map((text, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                            {text}
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={nextSlide}
                        className="mt-10 bg-orange-500 text-white px-8 py-3 rounded-xl font-display font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors flex items-center gap-2"
                      >
                        Empezar presentación <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex-1 h-full">
                      <img 
                        src={slide.image} 
                        alt="BaBar" 
                        className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

                {slide.type === "index" && (
                  <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
                    <div className="accent-bar mx-auto mb-8" />
                    <h2 className="text-4xl font-display font-bold text-center text-slate-900 mb-10">
                      {slide.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      {slide.items?.map((item, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ x: 5, scale: 1.02 }}
                          onClick={() => goToSlide(i + 2)}
                          className="flex items-center gap-5 p-4 bg-white border-2 border-sky-50 rounded-2xl shadow-sm hover:border-sky-300 hover:bg-sky-50 transition-all text-left group"
                        >
                          <span className="w-12 h-12 shrink-0 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-display font-bold text-xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            {i + 1}
                          </span>
                          <span className="text-lg font-bold text-slate-700 leading-tight">{item}</span>
                          <ChevronRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-sky-600 shrink-0" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {slide.type === "split-content" && (
                  <div className="flex-1 flex h-full">
                    <div className="w-[45%] p-16 flex flex-col justify-center bg-white">
                      <div className="accent-bar" />
                      <h2 className="text-5xl font-display font-bold text-slate-900 mb-10 leading-tight">
                        {slide.title}
                      </h2>
                      <div className="space-y-8">
                        {slide.bullets?.map((bullet, i) => (
                          <div key={i} className="bullet-item">
                            <div className="bullet-icon w-3 h-3 mt-2" />
                            <p className="text-xl font-medium leading-relaxed text-slate-700">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-1.5 bg-orange-500 h-full z-10" />
                    <div className="flex-1 h-full relative">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hotspot overlay simulation */}
                      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border-2 border-white flex items-center justify-center animate-pulse delay-700">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {slide.type === "grid-cards" && (
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-center mb-12">
                      <div className="accent-bar mx-auto mb-4" />
                      <h2 className="text-4xl font-display font-bold text-slate-900">
                        {slide.title}
                      </h2>
                      <p className="text-slate-500 font-medium mt-2">Haz clic en los elementos para explorar los detalles</p>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto w-full">
                      {slide.items?.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -10, scale: 1.02 }}
                          className="flex flex-col items-center group cursor-pointer"
                        >
                          <div className="w-full aspect-square bg-orange-500 rounded-3xl shadow-xl shadow-orange-200 flex flex-col items-center justify-center p-8 text-center transition-all group-hover:bg-orange-600 relative overflow-hidden">
                            {/* Decorative background icon */}
                            <item.icon className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12" />
                            
                            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30">
                              <item.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-2">
                              {item.title}
                            </h3>
                          </div>
                          <div className="mt-6 text-center px-4">
                            <p className="text-slate-600 font-medium leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {slide.type === "section-title" && (
                  <div className="flex-1 flex flex-col bg-white">
                    <div className="flex h-[45%] w-full">
                      <div className="w-[20%] bg-orange-500 flex items-center justify-center">
                        <span className="text-[10rem] font-display font-bold text-white leading-none">
                          {slide.number}
                        </span>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="flex-1 p-12 flex gap-12 items-center">
                      <div className="w-[40%]">
                        <h2 className="text-5xl font-display font-bold text-slate-900 leading-tight">
                          {slide.title}
                        </h2>
                        <div className="accent-bar mt-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {slide.type === "content" && (
                  <div className="flex-1 flex gap-12 items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center border border-sky-100">
                          {slide.icon && <slide.icon className="w-6 h-6 text-sky-600" />}
                        </div>
                        <h2 className="text-3xl font-display font-bold text-slate-900">
                          {slide.title}
                        </h2>
                      </div>
                      <div className="accent-bar" />
                      <div className="space-y-6">
                        {slide.bullets?.map((bullet, i) => (
                          <div key={i} className="bullet-item">
                            <div className="bullet-icon" />
                            <p className="text-lg font-medium leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full aspect-video object-cover rounded-3xl shadow-xl border-8 border-white"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -z-10" />
                      </div>
                    </div>
                  </div>
                )}

                {slide.type === "conclusion" && (
                  <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto">
                    <div className="accent-bar mx-auto" />
                    <h2 className="text-4xl font-display font-bold text-center text-slate-900 mb-10">
                      {slide.title}
                    </h2>
                    <div className="bg-white p-10 rounded-3xl border-2 border-sky-100 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-orange-500" />
                      <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                        "{slide.text}"
                      </p>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Referencias Bibliográficas
                      </h4>
                      <div className="space-y-2">
                        {slide.sources?.map((source, i) => (
                          <p key={i} className="text-sm text-slate-500 font-medium">{source}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Bar */}
          <div className="px-10 py-6 bg-white border-t border-slate-100 flex justify-between items-center">
            <div className="flex gap-6">
              <button 
                onClick={prevSlide} 
                disabled={currentSlide === 0}
                className="nav-button p-4"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={nextSlide} 
                disabled={currentSlide === slides.length - 1}
                className="nav-button p-4"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === i ? 'w-8 bg-sky-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Experimento BaBar 
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
