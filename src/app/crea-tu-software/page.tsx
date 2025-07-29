'use client';

import { useEffect } from 'react';
import Head from 'next/head';

// Declaraciones de tipos para tracking
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export default function CreaTuSoftwarePage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Tracking de conversiones con mejor manejo
    const trackConversion = () => {
      console.log('🎯 Conversion event triggered');
      
      // Google Ads
      if (typeof window.gtag !== "undefined") {
        const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
        const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
        
        console.log('📊 Google Ads conversion:', `${conversionId}/${conversionLabel}`);
        
        window.gtag("event", "conversion", {
          send_to: `${conversionId}/${conversionLabel}`
        });
      } else {
        console.warn('⚠️ Google Ads gtag not available');
      }
      
      // Meta Pixel
      if (typeof window.fbq !== "undefined") {
        console.log('📘 Meta Pixel Lead event');
        window.fbq("track", "Lead");
      } else {
        console.warn('⚠️ Meta Pixel fbq not available');
      }
    };

    // Función para configurar event listeners con retry
    const setupEventListeners = () => {
      const btn = document.getElementById("reservar-consultoria");
      const btnMobile = document.getElementById("reservar-consultoria-mobile");
      const btnFinal = document.getElementById("reservar-consultoria-final");

      if (btn) {
        btn.addEventListener("click", trackConversion);
        console.log('✅ Main CTA event listener added');
      }
      if (btnMobile) {
        btnMobile.addEventListener("click", trackConversion);
        console.log('✅ Mobile CTA event listener added');
      }
      if (btnFinal) {
        btnFinal.addEventListener("click", trackConversion);
        console.log('✅ Final CTA event listener added');
      }
    };

    // Esperar a que los scripts de Google se carguen
    const waitForGoogleScripts = () => {
      if (typeof window.gtag !== "undefined") {
        console.log('✅ Google scripts loaded');
        setupEventListeners();
      } else {
        console.log('⏳ Waiting for Google scripts...');
        setTimeout(waitForGoogleScripts, 100);
      }
    };

    // Iniciar el proceso después de un pequeño delay
    setTimeout(waitForGoogleScripts, 500);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Crea tu software a medida | Consultoría gratuita - ConAIsoft</title>
        <meta name="description" content="Reserva una sesión gratuita y descubre cómo lanzar tu software personalizado en menos de 30 días sin errores técnicos ni equipos caros. Una consultoría directa contigo, sin compromiso." />
        <meta name="keywords" content="desarrollo de software, software a medida, automatización, crear app, MVP, consultoría tecnológica, conaisoft" />
        <meta property="og:title" content="Crea tu software a medida | Consultoría gratuita - ConAIsoft" />
        <meta property="og:description" content="Lanza tu software sin errores técnicos ni gastos innecesarios. Consultoría gratuita para emprendedores y empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/crea-tu-software`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/hero-shape.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crea tu software a medida | Consultoría gratuita - ConAIsoft" />
        <meta name="twitter:description" content="Reserva tu consultoría gratuita para lanzar software personalizado sin errores técnicos ni gastos innecesarios." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/hero-shape.svg`} />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Solo 1 plaza disponible esta semana
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Lanza tu software personalizado en{' '}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">30 días o menos</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea o proceso que quieres automatizar? En 20 minutos te explico si es viable, cuánto costaría y cómo lanzarlo sin errores técnicos ni equipos caros.
          </p>
          
          {/* Mobile-first CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="reservar-consultoria"
              onClick={scrollToCalendly}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservar consultoría gratuita
            </button>
            
            <div className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Solo 20 minutos
            </div>
          </div>
        </div>
      </section>

            {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">+10 años creando software</h3>
              <p className="text-gray-600 text-sm sm:text-base">Para empresas y startups</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Solo 1 plaza disponible</h3>
              <p className="text-gray-600 text-sm sm:text-base">Esta semana</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Diagnóstico sin compromiso</h3>
              <p className="text-gray-600 text-sm sm:text-base">Claridad 100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            ¿Cómo funciona?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Agenda tu sesión gratuita
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Reserva 20 minutos en mi calendario
              </p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Revisamos tu idea y objetivos
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Analizamos viabilidad técnica y comercial
              </p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Te presento plan y presupuesto
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Plan técnico detallado y presupuesto base
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Reserva tu consultoría gratuita
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Solo necesitas 20 minutos para saber si tu proyecto es viable
            </p>
            
            {/* Mobile-friendly CTA above Calendly */}
            <div className="sm:hidden mb-6">
              <button
                id="reservar-consultoria-mobile"
                onClick={scrollToCalendly}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reservar ahora
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/mackewinsson/exploring-call?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium mb-4">
              &ldquo;Trabajar con Mackewinsson fue lo mejor que hice para lanzar mi app sin gastar de más.&rdquo;
            </blockquote>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              — Cliente satisfecho
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para lanzar tu software?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Solo 1 plaza disponible esta semana. No pierdas la oportunidad.
          </p>
          
          {/* Mobile-first CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="reservar-consultoria-final"
              onClick={scrollToCalendly}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservar ahora
            </button>
            
            <div className="text-sm text-gray-400 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sin compromiso
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
} 