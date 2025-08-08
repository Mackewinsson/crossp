'use client';

import { useState } from 'react';

interface LeadEmailFormProps {
  className?: string;
  webhookUrl?: string;
}

export default function LeadEmailForm({ className = '', webhookUrl }: LeadEmailFormProps) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre.trim()) {
      setMessage({ type: 'error', text: 'Por favor ingresa tu nombre.' });
      return;
    }

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Por favor ingresa tu correo electrónico.' });
      return;
    }

    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: 'Por favor ingresa un correo electrónico válido.' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const finalWebhookUrl = webhookUrl || process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      
      if (!finalWebhookUrl) {
        throw new Error('Webhook URL no configurada');
      }

      console.log('🌐 Sending to webhook:', finalWebhookUrl);
      console.log('📦 Payload:', { nombre: nombre.trim(), email: email.trim() });

      const response = await fetch(finalWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'ConaiSoft-Webhook/1.0',
        },
        body: JSON.stringify({ 
          nombre: nombre.trim(),
          email: email.trim() 
        }),
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Response error:', errorText);
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      setMessage({ type: 'success', text: '¡Gracias! Te contactaremos pronto.' });
      setNombre('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage({ 
        type: 'error', 
        text: 'Hubo un error al enviar tu correo. Por favor intenta nuevamente.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes dudas? Deja tu correo y te escribiremos
          </h2>
          <p className="text-lg text-gray-600">
            Recibe información personalizada sobre tu proyecto
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                disabled={isSubmitting}
                required
              />
            </div>

            {message && (
              <div className={`p-4 rounded-xl text-sm ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Quiero que me contacten'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 