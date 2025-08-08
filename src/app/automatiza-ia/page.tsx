'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import LeadEmailForm from '@/components/LeadEmailForm';

// Workshop configuration - easy to edit
const WORKSHOP_CONFIG = {
  title: "Automatiza tu negocio con IA (n8n + OpenAI) — Taller Intensivo",
  subtitle: "Ahorra 10+ horas por semana automatizando procesos clave sin programar",
  price: "300 €",
  nextDate: "15 de Marzo, 2024",
  location: "Málaga (Presencial) + Acceso a grabación",
  promise: "Ahorra 10+ horas por semana automatizando procesos clave sin programar",
  audience: "Dueños de negocio, freelancers, agencias, coaches",
  guarantee: "Si no te aporta valor, devolvemos el dinero en 7 días",
  paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "https://buy.stripe.com/your-payment-link",
  calendlyLink: "https://calendly.com/mackewinsson/exploring-call"
};

// Declaraciones de tipos para tracking
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export default function AutomatizaIAPage() {
  useEffect(() => {
    // Tracking de conversiones
    const trackConversion = (eventType: 'purchase' | 'lead') => {
      console.log('🎯 Conversion event triggered:', eventType);
      
      // Google Analytics
      if (typeof window.gtag !== "undefined") {
        if (eventType === 'purchase') {
          window.gtag("event", "begin_checkout", {
            currency: "EUR",
            value: 300
          });
        }
      }
      
      // Meta Pixel
      if (typeof window.fbq !== "undefined") {
        if (eventType === 'purchase') {
          window.fbq("track", "InitiateCheckout");
        } else {
          window.fbq("track", "Lead");
        }
      }
    };

    // Setup event listeners
    const setupEventListeners = () => {
      const purchaseButtons = document.querySelectorAll('[data-action="purchase"]');
      const leadButtons = document.querySelectorAll('[data-action="lead"]');

      purchaseButtons.forEach(btn => {
        btn.addEventListener("click", () => trackConversion('purchase'));
      });

      leadButtons.forEach(btn => {
        btn.addEventListener("click", () => trackConversion('lead'));
      });
    };

    // Wait for scripts to load
    const waitForScripts = () => {
      if (typeof window.gtag !== "undefined" && typeof window.fbq !== "undefined") {
        setupEventListeners();
      } else {
        setTimeout(waitForScripts, 100);
      }
    };

    setTimeout(waitForScripts, 500);
  }, []);

  const scrollToLeadForm = () => {
    const leadSection = document.getElementById('lead-section');
    if (leadSection) {
      leadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>{WORKSHOP_CONFIG.title} | ConAIsoft</title>
        <meta name="description" content={WORKSHOP_CONFIG.subtitle} />
        <meta name="keywords" content="automatización, IA, n8n, OpenAI, taller, Málaga, automatización de procesos" />
        <meta property="og:title" content={WORKSHOP_CONFIG.title} />
        <meta property="og:description" content={WORKSHOP_CONFIG.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/automatiza-ia`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/hero-shape.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={WORKSHOP_CONFIG.title} />
        <meta name="twitter:description" content={WORKSHOP_CONFIG.subtitle} />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/hero-shape.svg`} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              SOLO 8 PLAZAS RESTANTES: {WORKSHOP_CONFIG.nextDate}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Recupera 10+ horas semanales
              <br />
              <span className="text-blue-600">automatizando tu negocio</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Aprende n8n + OpenAI en 1 día. Sin programar, sin conocimientos técnicos. Implementa automatizaciones que funcionan HOY MISMO.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {WORKSHOP_CONFIG.location}
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Solo {WORKSHOP_CONFIG.price} (antes 500€)
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                data-action="purchase"
                onClick={() => window.open(WORKSHOP_CONFIG.paymentLink, '_blank')}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Reserva tu plaza ahora - {WORKSHOP_CONFIG.price}
              </button>
              
              <button
                data-action="lead"
                onClick={scrollToLeadForm}
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver programa completo
              </button>
            </div>
          </div>
        </section>

        {/* Problema → Agitación → Solución */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              ¿Por qué tu negocio necesita automatización YA?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">El Problema Real</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Pierdes 10+ horas semanales en tareas repetitivas que podrían estar automatizadas mientras tu competencia avanza
                </p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">La Urgencia</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Cada día que esperas, tu competencia implementa más automatizaciones y se adelanta en el mercado
                </p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">La Solución Definitiva</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Aprende a usar n8n + OpenAI para automatizar procesos sin programar y recupera tu tiempo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprenderás */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Lo que vas a dominar en 1 día
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Configurar n8n desde cero sin conocimientos técnicos previos",
                "Conectar APIs y servicios automáticamente en minutos",
                "Usar OpenAI para generar contenido y respuestas inteligentes",
                "Automatizar ventas y atención al cliente 24/7",
                "Crear flujos de trabajo complejos paso a paso",
                "Integrar herramientas que ya usas (Gmail, WhatsApp, etc.)",
                "Monitorear y optimizar tus automatizaciones en tiempo real",
                "Escalar procesos sin contratar más personal"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos reales */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Casos reales que implementarás HOY MISMO
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Automatización de Ventas
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Captura leads, envía emails automáticos y agenda reuniones sin intervención manual. Aumenta ventas 3x
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Atención al Cliente 24/7
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Responde preguntas frecuentes y deriva casos complejos a humanos. Reduce tiempo de respuesta 80%
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Gestión de Contenido IA
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Genera posts, emails y reportes automáticamente con IA. Crea contenido 10x más rápido
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Agenda del taller intensivo
            </h2>
            
            <div className="space-y-6">
              {[
                { time: "09:00 - 10:30", title: "Fundamentos de n8n", desc: "Configuración inicial y primeros flujos automáticos" },
                { time: "10:45 - 12:15", title: "Integración con OpenAI", desc: "Automatización con inteligencia artificial avanzada" },
                { time: "12:15 - 13:30", title: "Almuerzo", desc: "Networking y resolución de dudas" },
                { time: "13:30 - 15:00", title: "Casos prácticos reales", desc: "Implementación de automatizaciones que funcionan" },
                { time: "15:15 - 16:30", title: "Optimización y escalado", desc: "Mejores prácticas y troubleshooting avanzado" },
                { time: "16:30 - 17:00", title: "Q&A y plan de acción", desc: "Dudas finales y plan de implementación personalizado" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-blue-600 font-semibold">{item.time}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonos & Garantía */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Bonos exclusivos + Garantía de resultados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bonos */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">🎁 Bonos Exclusivos (Valor: 500€)</h3>
                <ul className="space-y-3">
                  {[
                    "5 automatizaciones n8n exportables listas para usar (.json)",
                    "Plantillas de prompts para ventas/soporte optimizadas",
                    "Checklist de implementación en 7 días paso a paso",
                    "Acceso completo a grabación del taller (6 meses)",
                    "Grupo de WhatsApp exclusivo para soporte continuo",
                    "1 sesión de consultoría individual (30 min)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Garantía */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">🛡️ Garantía de Resultados</h3>
                <div className="text-center">
                  <p className="text-lg text-gray-700 mb-4">
                    {WORKSHOP_CONFIG.guarantee}
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      Si después del taller no implementas al menos 2 automatizaciones en tu negocio, te devolvemos el dinero sin preguntas. Sin condiciones ocultas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Lo que dicen nuestros alumnos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "María García",
                  role: "Emprendedora",
                  text: "Ahorro 8 horas semanales automatizando mi atención al cliente. El taller fue increíblemente práctico y ya tengo 3 automatizaciones funcionando."
                },
                {
                  name: "Carlos López",
                  role: "Freelancer",
                  text: "Implementé 3 automatizaciones en mi negocio en solo 2 semanas. ROI inmediato y clientes más satisfechos."
                },
                {
                  name: "Ana Rodríguez",
                  role: "Directora de Marketing",
                  text: "El contenido fue muy claro y los casos prácticos me dieron ideas inmediatas para aplicar. Ahorro 12 horas semanales."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precio + CTA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Inversión única con descuento especial
            </h2>
            
            <div className="bg-white rounded-2xl p-8 mb-8 inline-block">
              <div className="text-sm text-gray-500 mb-2">Precio normal: 500€</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {WORKSHOP_CONFIG.price}
              </div>
              <p className="text-gray-600">Ahorras 200€ • Sin costos ocultos</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                data-action="purchase"
                onClick={() => window.open(WORKSHOP_CONFIG.paymentLink, '_blank')}
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Reserva tu plaza ahora
              </button>
              
              <button
                data-action="lead"
                onClick={scrollToLeadForm}
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver programa completo
              </button>
            </div>
            
            <p className="text-blue-200 mt-6 text-sm">
              Solo 8 plazas disponibles • {WORKSHOP_CONFIG.nextDate} • {WORKSHOP_CONFIG.guarantee}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "¿Necesito conocimientos técnicos previos?",
                  a: "No, el taller está diseñado para principiantes absolutos. Te guiamos paso a paso desde cero hasta tener automatizaciones funcionando."
                },
                {
                  q: "¿Qué incluye exactamente el precio?",
                  a: "Taller presencial de 1 día completo, acceso a grabación por 6 meses, 5 automatizaciones exportables, plantillas de prompts, checklist de implementación, grupo de WhatsApp y 1 sesión de consultoría individual."
                },
                {
                  q: "¿Puedo implementar lo aprendido inmediatamente?",
                  a: "Sí, todos los casos son 100% prácticos y reales. Saldrás del taller con automatizaciones funcionando en tu negocio."
                },
                {
                  q: "¿Qué herramientas necesito llevar?",
                  a: "Solo tu laptop. Te ayudamos a configurar n8n y todas las herramientas gratuitas que usaremos durante el taller."
                },
                {
                  q: "¿Hay soporte después del taller?",
                  a: "Sí, acceso al grupo de WhatsApp exclusivo para resolver dudas durante la implementación y 1 sesión de consultoría individual incluida."
                },
                {
                  q: "¿Puedo cancelar si no puedo asistir?",
                  a: "Sí, hasta 7 días antes del taller. Después de esa fecha, puedes transferir tu plaza a otra persona sin costos adicionales."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <div id="lead-section">
          <LeadEmailForm webhookUrl={process.env.NEXT_PUBLIC_WORKSHOP_N8N_WEBHOOK_URL} />
        </div>

        {/* Sticky CTA for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 md:hidden">
          <button
            data-action="purchase"
            onClick={() => window.open(WORKSHOP_CONFIG.paymentLink, '_blank')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Reservar plaza - {WORKSHOP_CONFIG.price}
          </button>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/34654990421?text=Hola,%20quiero%20saber%20más%20sobre%20el%20taller%20de%20automatización"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pregúntanos por WhatsApp"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </>
  );
} 