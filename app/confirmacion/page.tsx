'use client';

import { useState } from 'react';

interface InvitadoInfo {
    _id: string;
    nombre_invitado: string;
    codigo_reserva: string;
    max_acompanantes: number;
    confirmado: boolean;
    acompanantes_confirmados: number;
    email_confirmacion?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function ConfirmacionPage() {
    const [paso, setPaso] = useState<'codigo' | 'formulario'>('codigo');
    const [codigoIngresado, setCodigoIngresado] = useState('');
    const [invitadoInfo, setInvitadoInfo] = useState<InvitadoInfo | null>(null);
    const [error, setError] = useState('');
    const [verificandoCodigo, setVerificandoCodigo] = useState(false);
    const [numeroAcompanantes, setNumeroAcompanantes] = useState(0);
    const [email, setEmail] = useState('');
    const [confirmando, setConfirmando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState('');
    const [emailError, setEmailError] = useState('');

    const validarEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const manejarCambioEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nuevoEmail = e.target.value;
        setEmail(nuevoEmail);

        if (nuevoEmail && !validarEmail(nuevoEmail)) {
            setEmailError('Por favor ingresa un email válido');
        } else {
            setEmailError('');
        }
    };

    const verificarCodigo = async () => {
        if (!codigoIngresado.trim()) return;

        setVerificandoCodigo(true);
        setError('');

        try {
            const response = await fetch(`http://localhost:4202/api/invitados/codigo/${codigoIngresado.toUpperCase()}`);

            if (response.ok) {
                const invitado: InvitadoInfo = await response.json();
                setInvitadoInfo(invitado);
                setNumeroAcompanantes(invitado.acompanantes_confirmados);
                setEmail(invitado.email_confirmacion || '');
                setPaso('formulario');
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Código de invitación no válido');
            }
        } catch (error) {
            console.error('Error al verificar código:', error);
            setError('Error de conexión. Por favor, intenta nuevamente.');
        } finally {
            setVerificandoCodigo(false);
        }
    };

    const confirmarAsistencia = async () => {
        if (!invitadoInfo || !email.trim() || emailError) return;

        setConfirmando(true);
        setError('');
        setMensajeExito('');

        try {
            const response = await fetch('http://localhost:4202/api/invitados/confirmar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    codigo_reserva: invitadoInfo.codigo_reserva,
                    email: email.trim(),
                    acompanantes_confirmados: numeroAcompanantes
                })
            });

            const data = await response.json();

            if (response.ok) {
                if (data.guest) {
                    setInvitadoInfo(data.guest);
                }
                setMensajeExito(data.message);
                setTimeout(() => {
                    window.location.href = '/';
                }, 5000);
            } else {
                setMensajeExito(data.message);
                if (data.message.includes('ya ha sido confirmada')) {
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 5000);
                }
            }
        } catch (error) {
            console.error('Error al confirmar asistencia:', error);
            setError('Error de conexión. Por favor, intenta nuevamente.');
        } finally {
            setConfirmando(false);
        }
    };

    const volver = () => {
        setPaso('codigo');
        setCodigoIngresado('');
        setInvitadoInfo(null);
        setError('');
        setNumeroAcompanantes(0);
        setEmail('');
        setMensajeExito('');
        setEmailError('');
    };


    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 max-w-md w-full p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <div className="w-12 h-12 mx-auto bg-stone-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-2xl font-light text-stone-800 mb-2">Brenda & Jordi</h1>
                    <p className="text-stone-500 text-sm">Confirmación de Asistencia</p>
                </div>

                {paso === 'codigo' && (
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="codigo-invitacion" className="block text-sm font-medium text-stone-700 mb-2">
                                Código de Invitación
                            </label>
                            <input
                                id="codigo-invitacion"
                                type="text"
                                value={codigoIngresado}
                                onChange={(e) => setCodigoIngresado(e.target.value)}
                                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent text-stone-400 placeholder:text-stone-400"
                                placeholder="Ingresa tu código"
                                maxLength={6}
                                onKeyUp={(e) => e.key === 'Enter' && verificarCodigo()}
                            />
                            {error && (
                                <p className="mt-2 text-sm text-red-600">{error}</p>
                            )}
                        </div>
                        <button
                            onClick={verificarCodigo}
                            disabled={!codigoIngresado.trim() || verificandoCodigo}
                            className="w-full bg-stone-800 text-white py-3 px-4 rounded-md hover:bg-stone-700 transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {verificandoCodigo ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verificando...
                                </>
                            ) : (
                                'Verificar Código'
                            )}
                        </button>
                        <div className="text-center">
                            <p className="text-xs text-stone-500">
                                Ingresa tu código de invitación
                            </p>
                        </div>
                    </div>
                )}

                {paso === 'formulario' && invitadoInfo && (
                    <>
                        {mensajeExito ? (
                            <div className="space-y-6 text-center">
                                <div className="bg-green-50 p-6 rounded-md border border-green-200">
                                    <div className="mb-4">
                                        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-green-800 text-sm leading-relaxed">{mensajeExito}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-stone-500">
                                        Serás redirigido automáticamente en unos segundos...
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="bg-stone-50 p-4 rounded-md">
                                    <p className="text-sm text-stone-600 mb-1">Invitado</p>
                                    <p className="font-medium text-stone-800">{invitadoInfo.nombre_invitado}</p>
                                    <p className="text-xs text-stone-500 mt-1">Código: {invitadoInfo.codigo_reserva}</p>
                                    {invitadoInfo.confirmado && (
                                        <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Ya confirmado
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="numero-acompanantes" className="block text-sm font-medium text-stone-700 mb-2">
                                        Número de Acompañantes
                                    </label>
                                    <select
                                        id="numero-acompanantes"
                                        value={numeroAcompanantes}
                                        onChange={(e) => setNumeroAcompanantes(Number(e.target.value))}
                                        className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-400 placeholder:text-stone-400 focus:border-transparent"
                                    >
                                        {Array.from({ length: invitadoInfo.max_acompanantes + 1 }, (_, i) => (
                                            <option key={i} value={i}>
                                                {i === 0 ? 'Solo yo' : `${i} acompañante${i > 1 ? 's' : ''}`}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-stone-500 mt-1">
                                        Máximo permitido: {invitadoInfo.max_acompanantes} acompañante{invitadoInfo.max_acompanantes !== 1 ? 's' : ''}
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="email-invitado" className="block text-sm font-medium text-stone-700 mb-2">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="email-invitado"
                                        type="email"
                                        value={email}
                                        onChange={manejarCambioEmail}
                                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-400 focus:border-transparent ${emailError ? 'border-red-300' : 'border-stone-300'}`}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                    {emailError && (
                                        <p className="mt-2 text-sm text-red-600">{emailError}</p>
                                    )}
                                </div>
                                <div className="space-y-3">
                                    <button
                                        onClick={confirmarAsistencia}
                                        disabled={!email.trim() || !!emailError || confirmando || verificandoCodigo}
                                        className="w-full bg-stone-800 text-white py-3 px-4 rounded-md hover:bg-stone-700 transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {confirmando ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Confirmando...
                                            </>
                                        ) : (
                                            'Confirmar Asistencia'
                                        )}
                                    </button>
                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                                            <p className="text-sm text-red-600">{error}</p>
                                        </div>
                                    )}
                                    <button
                                        onClick={volver}
                                        disabled={confirmando || verificandoCodigo}
                                        className="w-full bg-transparent text-stone-600 py-2 px-4 rounded-md hover:bg-stone-50 transition-colors border border-stone-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Volver
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}