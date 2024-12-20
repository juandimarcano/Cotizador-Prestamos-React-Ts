import React, { useState, ChangeEvent, FormEvent } from 'react';
import { calcularTotal } from '../Calculo';

type FormularioProps = {
    cantidad: number;
    setCantidad: (cantidad: number) => void;
    plazo: string;
    setPlazo: (plazo: string) => void;
    setTotal: (total: number) => void;
};

export default function Formulario({ cantidad, setCantidad, plazo, setPlazo, setTotal }: FormularioProps) {
    const [error, setError] = useState<boolean>(false);

    const calcularPrestamo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (cantidad === 0 || plazo === "") {
            setError(true);
            return;
        }
        setError(false);

        const total = calcularTotal(cantidad, plazo);
        setTotal(total);
    };

    const handleCantidadChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCantidad(parseInt(e.target.value));
    };

    const handlePlazoChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPlazo(e.target.value);
    };

    return (
        <>
            <form onSubmit={calcularPrestamo}>
                <div className="column">
                    <div>
                        <label>Cantidad Préstamo</label>
                        <input
                            type="number"
                            placeholder="Ej: 3000"
                            onChange={handleCantidadChange}
                        />
                    </div>
                    <div>
                        <label>Plazo para pagar</label>
                        <select onChange={handlePlazoChange}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>
            {error && <p className="error">Todos los campos son obligatorios...</p>}
        </>
    );
}
