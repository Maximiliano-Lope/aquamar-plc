export interface Modulo {
	modulo: string;
	totalDePsicinas: number;
	alimentoTeorico: number;
	totalSacosTeorico: number;
	alimentoAplicado: number;
	totalSacosAplicados: number;
	piscinas: Piscina[];
}

export interface Piscina {
	piscina: string;
	kilosProgramados: number;
	tolvas: number;
	calibración: number;
	grSegundo: number;
	edadDias: number;
	disparosHora: number;
	horaInicio: string;
	horaApagado: string;
	porcentaje: string;
	tr: number;
	te: number;
	racionPorAplicar: number;
}
