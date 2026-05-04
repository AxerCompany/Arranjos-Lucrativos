/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Play, 
  Star, 
  Shield, 
  Clock, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Zap, 
  Lock, 
  CreditCard,
  User,
  ArrowUpRight,
  Info,
  ShoppingBag,
  Gift,
  Heart,
  Palette,
  DollarSign,
  Smartphone,
  Calculator,
  Bot,
  Sparkles,
  ListChecks,
  MessageSquare,
  CheckCircle,
  Handshake,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Artisanal Components ---

const handleRedirect = (url: string) => {
  const search = window.location.search;
  if (search) {
    const separator = url.includes('?') ? '&' : '?';
    window.location.href = url + separator + search.substring(1);
  } else {
    window.location.href = url;
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/80 backdrop-blur-sm border-b border-malva/20">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-black text-xl tracking-tight uppercase text-espresso">Arranjos<span className="text-terracota">Lucrativos</span></span>
      </div>
      <button 
        onClick={() => handleRedirect('#')}
        className="bg-espresso text-white text-[10px] font-bold py-2 px-5 rounded-full hover:bg-espresso/80 transition-colors uppercase tracking-wider"
      >
        Acessar
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-10 md:pt-14 pb-8 md:pb-10 bg-parchment">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-terracota/10 text-terracota px-6 py-2 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4"
        >
          OPORTUNIDADE ÚNICA DE<br />RENDA EXTRA
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold leading-tight md:leading-[1.15] tracking-tight mb-6 md:mb-8 text-espresso"
        >
          Ganhe até <span className="text-terracota">R$ 1.000 por semana</span> vendendo e alugando arranjos de flores artificiais — mesmo começando do zero.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-espresso/80 text-xs md:text-base font-bold max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed"
        >
          Assista ao vídeo abaixo e descubra como o aplicativo mostra quais arranjos montar, quais flores usar e quanto você pode lucrar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-[9/16] max-w-[320px] mx-auto bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-espresso/10 group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img 
                src="https://i.postimg.cc/TwDcJH1h/Screenshot-2026-05-02-17-34-55-074-com-android-chrome.webp" 
                alt="Visualização do Aplicativo" 
                className="w-full h-full object-cover transition-opacity duration-500 scale-[1.02]"
                style={{ objectPosition: 'top' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-espresso/5 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/95 backdrop-blur-md text-espresso rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="fill-current w-6 h-6 ml-1" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-terracota text-white px-4 py-2 rounded-full text-xs font-bold shadow-md uppercase tracking-wider"
                >
                  Clique para assistir
                </motion.div>
              </div>
            </>
          ) : (
            <iframe
              src="https://player.vimeo.com/video/1189193393?h=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Mini VSL"
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="pt-8 pb-24 bg-parchment">
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-espresso">Comece a vender arranjos em 3 passos simples</h2>
        <div className="w-12 h-1 bg-terracota mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { 
            step: "01", 
            title: "MODELOS DIRETOS NO CELULAR", 
            desc: "Você abre o aplicativo e ele mostra os arranjos que mais vendem, com os tipos de flores e vasos certos. Sem precisar de dom artístico.", 
            icon: Smartphone 
          },
          { 
            step: "02", 
            title: "CALCULE CUSTOS E LUCROS", 
            desc: "O aplicativo calcula o custo de cada flor e material, sugerindo o preço ideal de venda para você lucrar alto.", 
            icon: Calculator 
          },
          { 
            step: "03", 
            title: "DIVULGUE E VENDA", 
            desc: "O app cria textos prontos para WhatsApp e Instagram. Você publica a foto e começa a receber encomendas imediatamente.", 
            icon: ArrowUpRight 
          },
        ].map((item, i) => (
          <div key={i} className="group p-8 bg-white rounded-3xl border border-espresso/5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-terracota/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-espresso/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-terracota/10 transition-colors">
              <item.icon className="w-6 h-6 text-espresso group-hover:text-terracota transition-colors" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-espresso">{item.title}</h3>
            <p className="text-espresso/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AppTechnology = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 text-espresso leading-tight">
              SEU ATELIÊ DE ARRANJOS NA PALMA DA MÃO
            </h2>
            <span className="inline-block text-terracota text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              TECNOLOGIA EXCLUSIVA
            </span>
            <p className="text-espresso/60 text-sm md:text-base leading-relaxed">
              O aplicativo mostra modelos de arranjos, calcula o lucro e ajuda você a ser uma artesã profissional.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[350px] md:max-w-[420px] mx-auto relative group px-10 md:px-0">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-espresso hover:text-terracota transition-all duration-300 border border-espresso/5"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-espresso hover:bg-terracota hover:text-white transition-all duration-300 border border-espresso/5"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 md:pb-12 scrollbar-hide snap-x snap-mandatory"
        >
          {[
            "https://i.postimg.cc/yxCyQX3K/Screenshot-2026-05-02-18-41-39-916-com-android-chrome.webp",
            "https://i.postimg.cc/TwDcJH1h/Screenshot-2026-05-02-17-34-55-074-com-android-chrome.webp",
            "https://i.postimg.cc/DZXcPY08/Screenshot-2026-05-02-17-35-03-646-com-android-chrome.webp",
            "https://i.postimg.cc/DZXcPY08/Screenshot-2026-05-02-17-35-03-646-com-android-chrome.webp",
            "https://i.postimg.cc/DZXcPY0v/Screenshot-2026-05-02-17-35-11-455-com-android-chrome.webp",
            "https://i.postimg.cc/vBVvtSTH/Screenshot-2026-05-02-17-37-48-687-com-android-chrome.webp",
            "https://i.postimg.cc/fL9vfgyw/Screenshot-2026-05-02-17-38-01-209-com-android-chrome.webp",
            "https://i.postimg.cc/k4byvhG7/Screenshot-2026-05-02-17-38-11-620-com-android-chrome.webp",
            "https://i.postimg.cc/4yRQLbHs/Screenshot-2026-05-02-17-53-50-196-com-android-chrome.webp",
            "https://i.postimg.cc/FRLxVnz4/Screenshot-2026-05-02-17-38-22-957-com-android-chrome.webp",
            "https://i.postimg.cc/1tqKrYtk/Screenshot-2026-05-02-17-38-32-870-com-android-chrome.webp",
            "https://i.postimg.cc/DZXcPY0V/Screenshot-2026-05-02-17-38-45-463-com-android-chrome.webp",
            "https://i.postimg.cc/Xq6kHcBj/Screenshot-2026-05-02-17-38-54-672-com-android-chrome.webp",
            "https://i.postimg.cc/cCGB9Mt1/Screenshot-2026-05-02-17-39-06-173-com-android-chrome.webp"
          ].map((url, i) => (
            <div key={i} className="w-full flex-shrink-0 aspect-[9/19] bg-white rounded-xl overflow-hidden snap-center shadow-2xl border border-espresso/10">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                   src={url} 
                   alt={`App Screen ${i + 1}`} 
                   className={`absolute inset-0 w-full object-cover transition-all duration-700 brightness-[1.02] contrast-[1.05] saturate-[1.1] ${
                     i === 0 ? 'h-[115%] -top-[14%]' : 'h-[106%] -top-[5%]'
                   }`}
                  style={{ imageRendering: 'auto' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "MODELOS PRONTOS QUE JÁ VENDEM", 
              desc: "Você não precisa criar nada do zero. O app mostra o que fazer e como fazer.", 
              icon: Sparkles 
            },
            { 
              title: "LISTA EXATA DE FLORES E VASOS", 
              desc: "Sem desperdício, sem comprar errado, sem gastar mais do que precisa.", 
              icon: ListChecks 
            },
            { 
              title: "SEU LUCRO CALCULADO NA HORA", 
              desc: "Você sabe antes de montar quanto vai ganhar. Zero surpresa, zero prejuízo.", 
              icon: Calculator 
            },
            { 
              title: "TEXTOS DE VENDA PRONTOS PRA COPIAR", 
              desc: "Mensagens testadas para WhatsApp e Instagram que fazem o cliente pedir o produto.", 
              icon: MessageSquare 
            },
            { 
              title: "GANHE ALUGANDO PARA FESTAS E EVENTOS", 
              desc: "Um arranjo que você monta uma vez pode ser alugado dezenas de vezes. Dinheiro recorrente sem gastar mais.", 
              icon: Handshake 
            },
            { 
              title: "GUIA PRÁTICO DE MONTAGEM", 
              desc: "Aprenda como fixar as flores e dar acabamento profissional sem complicação.", 
              icon: CheckCircle 
            },
            { 
              title: "ONDE COMPRAR BARATO E COM QUALIDADE", 
              desc: "Lista de fornecedores testados para você não pagar caro nem comprar material ruim.", 
              icon: ShoppingBag 
            },
          ].map((f, i) => (
            <div 
              key={i} 
              className={`p-8 bg-white rounded-3xl border border-espresso/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i === 3 || i === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 bg-terracota/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-terracota" />
              </div>
              <h4 className="font-bold text-espresso text-lg mb-3 leading-tight">{f.title}</h4>
              <p className="text-espresso/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 bg-rose-claro">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-espresso tracking-tight mb-2">
          O QUE ELAS ESTÃO DIZENDO
        </h2>
        <span className="text-terracota text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
          RESULTADOS REAIS
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { 
            name: "CARLA SOUZA", 
            role: "Artesã de Arranjos",
            image: "https://i.postimg.cc/dVXGbZmW/image_13_229x300_(1).webp",
            text: "Eu sempre quis trabalhar com flores artificiais, mas tinha medo de ficar cafona. O app me ensinou a fazer arranjos modernos que as pessoas amam comprar." 
          },
          { 
            name: "RENATA OLIVEIRA", 
            role: "Ateliê Floral",
            image: "https://i.postimg.cc/fRFYGSj8/image_14_300x300_(1).webp",
            text: "O lucro é maravilhoso porque o material dura muito e não estraga. Fiz minha primeira venda para uma clínica médica na mesma semana." 
          },
          { 
            name: "ANA PAULA LIMA", 
            role: "Mãe e Empreendedora",
            image: "https://i.postimg.cc/CKqbSMmc/image_15_300x300_(1)_(1).webp",
            text: "Agora trabalho de casa perto dos meus filhos. O aplicativo me deu a segurança de saber cobrar o preço certo por cada peça que eu crio." 
          },
          { 
            name: "JULIANA FERREIRA", 
            role: "Artesã Profissional",
            image: "https://i.postimg.cc/YSWQM2bb/image_16_281x300_(1)_(1).webp",
            text: "Pra quem busca renda extra é o melhor caminho. O app já dá o script de venda pronto. Eu só monto e entrego as encomendas que recebo." 
          },
        ].map((t, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl border border-terracota/20 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-terracota text-terracota" />
              ))}
            </div>
            <p className="text-espresso/80 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-terracota/20 shrink-0">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-bold text-espresso text-xs tracking-wider mb-1 uppercase">{t.name}</p>
                <p className="text-terracota text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Results = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-parchment/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-espresso tracking-tight mb-2">
            O RESULTADO QUE VOCÊ VAI ENTREGAR
          </h2>
          <span className="text-terracota text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
            ARRANJOS QUE ENCANTAM E VENDEM
          </span>
          <p className="text-espresso/60 text-sm max-w-xl mx-auto mb-8">
            Modelos de arranjos que você terá acesso para criar e faturar alto.
          </p>
        </div>
        
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-espresso hover:bg-terracota hover:text-white transition-all duration-300 border border-espresso/5"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-espresso hover:bg-terracota hover:text-white transition-all duration-300 border border-espresso/5"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

            <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {[
              "https://i.postimg.cc/qRCPHHXx/1112484c134ab593cbb99e8fd2be028b.webp",
              "https://i.postimg.cc/4dhDRRb2/26cfc33b9a6e88d7c892cabbeea3ba20-(1).webp",
              "https://i.postimg.cc/hj7kRRbM/29661e1583fb39c14d12ae8ab6167893.webp",
              "https://i.postimg.cc/DZb933dB/37a1b2b3000b08e75f2f1154d21e7cb8.webp",
              "https://i.postimg.cc/qRCPHHX9/3a86ea4f9ce220b8e10d003620b644fa.webp",
              "https://i.postimg.cc/NMr3vv7n/4ead1ee107645de316288250f8871dac.webp",
              "https://i.postimg.cc/k4t0PPFy/8063ec2c6d546a4988e1cd6dfc2c8485.webp",
              "https://i.postimg.cc/cH8pGGMw/a1c81d8148b0503912fe0e9714a2d89d.webp",
              "https://i.postimg.cc/8CY2YzWw/a593adad1b82723d3c78121ebeb010e5.webp",
              "https://i.postimg.cc/SszBbb76/c9363df48c4196b6350905d0cecb6747.webp",
              "https://i.postimg.cc/tgcKc4PB/cb391a4d4666880594518e28b5ac0968.webp",
              "https://i.postimg.cc/xdZwZ1Hm/d5fdce6cd77b5e6be1e01cd4869551d7.webp",
              "https://i.postimg.cc/3wqsqxpy/db72ad1d894dcbae888a622b4e07bd9e.webp",
              "https://i.postimg.cc/g07C72RZ/e10ed01e3e7115cdaa066210d4faa794.webp",
              "https://i.postimg.cc/25tstSvv/fbcab5dcaae73aeca983330f74f6552b.webp"
            ].map((url, i) => (
              <div key={i} className="min-w-[260px] md:min-w-[300px] aspect-[9/16] bg-white rounded-2xl overflow-hidden snap-center shadow-sm border border-espresso/5">
                <img 
                  src={url} 
                  alt={`Arranjo Exemplo ${i + 1}`} 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatYouGet = () => (
  <section className="py-24 bg-malva overflow-hidden relative">
    {/* Background Glows (Subtle for light mode) */}
    <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-terracota/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 leading-tight text-white">
          MONTAR É FÁCIL.<br />
          <span className="text-terracota-medio">AGORA APRENDA A VENDER.</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">
            🎁 BÔNUS EXCLUSIVOS
          </span>
          <div className="h-[1px] w-8 bg-white/20" />
        </div>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Além do acesso vitalício ao aplicativo, você garante estes bônus especiais para acelerar seus resultados.
        </p>
      </div>

      <div className="space-y-16">
        {/* Bonus 1 - Super Bonus */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-terracota to-white rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="flex-1 w-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="bg-terracota text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    BÔNUS 01
                  </span>
                  <span className="text-malva text-[9px] font-black uppercase tracking-widest animate-pulse">
                    🔥 SUPER BÔNUS
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-espresso">
                  COMO CONSEGUIR CLIENTES<br />PRONTOS PARA COMPRAR
                </h3>
                
                <p className="text-espresso/70 text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto">
                  Não adianta ter arranjos lindos se ninguém compra. Aqui você aprende exatamente como atrair, conversar e fechar suas primeiras vendas.
                </p>

                <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
                  {[
                    "Onde encontrar clientes que já estão procurando",
                    "Como divulgar sem precisar de seguidores",
                    "O que postar para gerar interesse imediato",
                    "Como fechar vendas pelo WhatsApp",
                    "Como fazer o cliente voltar a comprar"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-terracota/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-terracota" />
                      </div>
                      <p className="text-espresso/70 text-xs md:text-sm text-left">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-parchment rounded-xl border border-espresso/5">
                  <span className="text-espresso/30 text-[10px] line-through uppercase tracking-widest">Valor: R$ 197,00</span>
                  <span className="text-terracota text-[10px] font-black uppercase tracking-widest">Hoje: Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus 2 */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-terracota to-white rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="flex-1 w-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="bg-terracota text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    BÔNUS 02
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-espresso">
                  GUIA: COMO FAZER SUA PRIMEIRA VENDA EM ATÉ 7 DIAS
                </h3>
                
                <p className="text-espresso/70 text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto">
                  Se você quer começar e ver dinheiro entrando rápido, esse guia mostra exatamente o que fazer do início até a primeira venda.
                </p>

                <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
                  {[
                    "Escolha dos arranjos mais fáceis de vender",
                    "Onde comprar gastando pouco",
                    "Montagem prática do primeiro arranjo",
                    "Fotos simples que geram interesse",
                    "Como divulgar e fechar os primeiros pedidos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-terracota/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-terracota" />
                      </div>
                      <p className="text-espresso/70 text-xs md:text-sm text-left">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-parchment rounded-xl border border-espresso/5">
                  <span className="text-espresso/30 text-[10px] line-through uppercase tracking-widest">Valor: R$ 97,00</span>
                  <span className="text-terracota text-[10px] font-black uppercase tracking-widest">Hoje: Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 + 20);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 bg-espresso text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-terracota rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-malva rounded-full blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-medium uppercase mb-2">Arranjos Lucrativos</h2>
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-malva bg-white/5 px-4 py-2 rounded-full border border-white/10 inline-block mb-8">
            OFERTA EXCLUSIVA • VAGAS LIMITADAS
          </span>
          <p className="text-malva text-xs font-bold tracking-widest uppercase">ACESSO VITALÍCIO + BÔNUS</p>
        </div>

        <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-terracota/5">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-terracota/20 to-malva/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative">
            <div className="mb-8">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-terracota mb-4 flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" /> OFERTA EXPIRA EM: {formatTime(timeLeft)}
            </p>
            <p className="text-[10px] text-white/60 uppercase tracking-wider mb-6">
              O preço subirá para <span className="text-white font-bold">R$ 197,00</span> após o cronômetro zerar
            </p>
            
            <div className="space-y-2 mb-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>Vagas Preenchidas:</span>
                <span className="text-terracota">71%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "71%" }}
                  className="h-full bg-terracota"
                />
              </div>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/40 italic">Últimas 9 licenças disponíveis com desconto</p>
          </div>

          <div className="mb-8">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2 italic">Aproveite a oferta de lançamento</p>
            <p className="text-white/40 line-through text-lg mb-1">DE R$ 197,00</p>
            <div className="flex items-start justify-center gap-1">
              <span className="text-2xl font-black italic mt-2">R$</span>
              <span className="text-7xl font-black italic tracking-tighter text-terracota">37</span>
              <span className="text-2xl font-black italic mt-2">,00</span>
            </div>
          </div>

          <div className="space-y-3 mb-10 text-left max-w-[280px] mx-auto">
            {[
              "Acesso Completo ao App",
              "Modelos de Arranjos de Luxo",
              "Cálculo de Lucro Automático",
              "Textos de Venda Prontos",
              "Garantia Incondicional",
              "Bônus: Primeiras Vendas",
              "Bônus: Atrai Clientes VIP",
              "Suporte para Alunas"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-terracota/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-terracota" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-tight text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => handleRedirect('https://pay.wiapy.com/qEj50axiGA')}
            className="w-full bg-terracota hover:bg-terracota/90 text-white font-black py-5 rounded-xl transition-all flex flex-col items-center justify-center gap-1 uppercase italic tracking-tight animate-pulse-subtle shadow-lg shadow-terracota/20"
          >
            <span className="text-lg flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> LIBERAR MEU ACESSO AGORA</span>
          </button>
          
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] mt-4 text-white/40">
            PIX • CARTÃO • BOLETO
          </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 opacity-30 grayscale invert mb-12">
          <Shield className="w-5 h-5" />
          <Lock className="w-5 h-5" />
          <CreditCard className="w-5 h-5" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            <div className="relative shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-terracota/20 rounded-full flex items-center justify-center border-2 border-terracota/30">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-terracota" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-terracota text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                7 DIAS
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-terracota uppercase italic tracking-tight">
                RISCO ZERO: GARANTIA INCONDICIONAL
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                Você não precisa decidir agora se vai funcionar para você. Pegue o app, use por 7 dias inteiros, teste todas as ferramentas. Se por qualquer motivo não gostar — manda um e-mail e devolvemos cada centavo. Sem perguntas, sem burocracia, sem letras miúdas. O risco é todo nosso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "Como recebo o acesso?", a: "O acesso ao seu ateliê digital é enviado automaticamente para o seu e-mail após a confirmação do pagamento." },
    { q: "Preciso de experiência?", a: "Não, o método foi feito para iniciantes que querem começar do zero com arranjos artificiais de luxo." },
    { q: "Como vejo os modelos?", a: "Tudo é feito pelo nosso aplicativo exclusivo, onde você vê o passo a passo e o cálculo de lucro." },
  ];

  return (
    <section className="py-24 bg-parchment">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium uppercase mb-12 text-center text-espresso">Dúvidas</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-b border-espresso/10 pb-4">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span className="font-bold text-sm uppercase italic text-espresso">{item.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform text-espresso/40 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-espresso/60 py-4 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 bg-parchment border-t border-espresso/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="flex justify-center gap-8 mb-8 text-[10px] font-bold uppercase tracking-widest text-espresso/40">
        <button onClick={() => handleRedirect('#')} className="hover:text-terracota transition-colors">Privacidade</button>
        <button onClick={() => handleRedirect('#')} className="hover:text-terracota transition-colors">Termos</button>
      </div>
      
      <div className="space-y-4 text-[10px] md:text-[11px] text-espresso/50 leading-relaxed max-w-2xl mx-auto">
        <p className="font-bold text-espresso/70 uppercase tracking-tighter">
          © 2026 AxerCompany • CNPJ: 65.887.998/0001-33 • Todos os direitos reservados.
        </p>
        
        <p>
          Todo o conteúdo presente nesta página, incluindo textos, imagens, design, estrutura, vídeos, materiais e quaisquer outros elementos, é protegido por leis de direitos autorais e propriedade intelectual.
        </p>
        
        <p>
          É proibida a reprodução, cópia, distribuição ou modificação, total ou parcial, sem autorização prévia por escrito do responsável. O uso indevido do conteúdo poderá resultar em medidas legais conforme a legislação vigente.
        </p>
      </div>
    </div>
  </footer>
);

const FloatingScarcity = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Mariana");

  useEffect(() => {
    const names = ["Mariana", "Ana Paula", "Carla", "Julia", "Renata", "Beatriz", "Fernanda", "Luciana", "Patrícia", "Camila", "Amanda", "Larissa"];
    const timer = setInterval(() => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 bg-white border border-terracota/20 p-4 rounded-lg shadow-xl flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-terracota rounded-full animate-pulse" />
          <p className="text-[10px] font-bold uppercase italic tracking-tight text-espresso">
            {name} acabou de garantir o acesso
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-parchment font-sans antialiased selection:bg-terracota/20 selection:text-espresso">
      <Hero />
      <HowItWorks />
      <AppTechnology />
      <Testimonials />
      <Results />
      <WhatYouGet />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingScarcity />
    </div>
  );
}
