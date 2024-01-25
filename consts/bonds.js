const BOOK = {
	activity: 'Actividad',
	admin: 'Administrador',
	art: 'Expresión Artística',
	culture: 'Cultura',
	entity: 'Entidad',
	personal: 'Desarrollo Personal',
	sport: 'Actividad Física',
	guest: 'Adulto Mayor',
	user: 'Adulto Mayor',
	volunteer: 'Voluntario',
	workshop: 'Taller',
	participate: 'Participar',
	organizeFree: 'Liderar Gratis',
	organizePaid: 'Liderar Pagado',
	inPerson: 'Presencial',
	remote: 'Remoto',
	male: 'Hombre',
	female: 'Mujer',
	single: 'Soltero',
	married: 'Casado',
	divorced: 'Divorciado',
	separated: 'Separado',
	widowed: 'Viudo',
	retired: 'Jubilado',
	working: 'Trabajando',
	both: 'Ambos'
};


const CATEGORIES = [
	{ 
		alias: 'V. Social',
		label: 'Vida Social', 
		name: 'social',
		options: [
			'outdoorMeeting',
			'socialCoffee',
			'neighborhoodWalks',
			'walkAround',
		]
	},
	{ 
		alias: 'Espiritu',
		label: 'Espiritualidad', 
		name: 'spirituality',
		options: [
			'yoga',
			'meditation',
			'reiki',
		] 
	},
	{ 
		alias: 'A. Física',
		label: 'Actividad Física', 
		name: 'sports',
		options: [
			'dance',
			'pilates',
			'taiChi',
			'rehabilitativeGymnastics',
			'march',
		] 
	},
	{ 
		alias: 'E. Artística',
		label: 'Expresión artística', 
		name: 'art',
		options: [
			'painting',
			'knitting',
			'drawing',
			'music',
		] 
	},
	{ 
		alias: 'D. Personal',
		label: 'Desarrollo personal', 
		name: 'mind',
		options: [
			'activeMind',
			'psicology',
			'chess',
			'cognitiveMemory',
			'technology',
		] 
	},
	{ 
		alias: 'Cultura',
		label: 'Cultura', 
		name: 'culture',
		options: [
			'cityWalks',
			'basicEnglish',
			'literature',
			'religion',
		] 
	}
];

const COLLECTION = [
	'activities',
	'entities',
	'guests',
	'groups',
	'events',
	'places',
	'users',
	'volunteers',
	'workshops'
];

const ROLES = [
	'entity',
	'volunteer',
	'user'
];

const EVENTS = [
	'activity',
	'workshop'
];

const SOCIAL = {
	facebook: 'Facebook',
	instagram: 'Instagram',
	google: 'Google',
	linkedin: 'LinkedIn',
	youtube: 'Youtube',
	press: 'Prensa',
	radio: 'Radio',
	reference: 'Recomendación',
	other: 'Otro'
};

const WORKSHOPS = { 
	activeMind: 'Mente activa',
	basicEnglish: 'Inglés básico',
	chess: 'Ajedrez',
	cityWalks: 'Paseos por la ciudad',
	cognitiveMemory: 'Memoria cognitiva',
	dance: 'Baile',
	drawing: 'Dibujo',
	knitting: 'Tejido',
	literature: 'Literatura',
	march: 'Caminatas deportivas',
	meditation: 'Meditación',
	music: 'Música',
	neighborhoodWalks: 'Caminatas por el barrio',
	outdoorMeeting: 'Juntas al aire libre',
	painting: 'Pintura',
	pilates: 'Pilates',
	psicology: 'Psicología',
	rehabilitativeGymnastics: 'Gimnasia rehabilitadora',
	reiki: 'Reiki',
	religion: 'Religión',
	socialCoffee: 'Café social',
	taiChi: 'Tai Chi',
	technology: 'Tecnología y digitalización',
	walkAround: 'Paseos recreativos',
	yoga: 'Yoga',
};

const EXTRA = {
	days: {
		monday: 'Lunes',
		tuesday: 'Martes',
		wednesday: 'Miercoles',
		thursday: 'Jueves',
		friday: 'Viernes',
		saturday: 'Sábado',
		sunday: 'Domingo'
	},
	schedule: {
		'morning-1': 'Mañana',
		'morning-2': 'Mediodía',
		afternoon: 'Tarde',
		night: 'Noche'
	},
	benefits: {
		beauty: 'Belleza',
		education: 'Educación',
		entertainment: 'Entretenimiento',
		fashion: 'Vestuario',
		health: 'Salud',
		pets: 'Mascotas',
		restaurant: 'Restaurantes',
		technology: 'Tecnología',
		transportation: 'Transporte',
		travel: 'Viajes'
	}
}

export {
	BOOK,
	CATEGORIES,
	COLLECTION,
	EXTRA,
	EVENTS,
	ROLES,
	SOCIAL,
	WORKSHOPS
};