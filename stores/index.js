export const CONFIG = { ...JSON.parse(process.env.PROJECT_CONFIG), lang:{ spanish:'SPANISH', english:'ENGLISH' } }

export const APP = {
	config:{
		auth:null, local:CONFIG, unsubs:[], user:{
			email:'', info:{ birth:'01/01/1920', code:'+56', company:'', firstname:'', lastname:'', nationality:'Chile', phone:'' }, 
			main:{ banned:false, enabled:false, verified:false }, rol:'', uid:0
		}
	},
	cpanel:{
		active:'/', mobile:false, tab:{ current:0, temporal:0 }, settings:0, wide:true,
		selected:[...Array(7).keys()].map(() => true), register:true
	},
	database:{
		admins:[], drivers:[], owners:[], cars:[], documents:[], interviews:[], requests:[], reports:[]
	},
	super:process.env.SUPER_ADMIN
}

export * from './faqs'

export const WEB = {
	routes:{
		driver:{
			services:[
				{ name:'Planes y precios', path:'planes' }, 
				{ name:'Inscripción', path:'inscripcion' }, 
				{ name:'Balances', path:'balances' }, 
				{ name:'Garantías', path:'garantias' },
				{ name:'Seguros', path:'seguros' }
			],
			resources:[
				{ name:'Preguntas frecuentes', path:'preguntas' }, 
				{ name:'Términos y condiciones', path:'terminos' }
			]
		},
		owner:{
			services:[
				{ name:'Características', path:'caracteristicas' }, 
				{ name:'Seguros', path:'seguros' }, 
				{ name:'Servicio al cliente', path:'asistencia' }, 
				{ name:'Integraciones', path:'integraciones' }
			],
			resources:[
				{ name:'Documentación', path:'documentacion' }, 
				{ name:'Términos y condiciones', path:'terminos' },
				{ name:'Preguntas frecuentes', path:'preguntas' }
			]
		},
		resources:[
			{ name:'Sobre nosotros', path:'nosotros' }, 
			{ name:'Términos y condiciones', path:'terminos' }, 
			{ name:'Política de privacidad', path:'politica' },
			{ name:'Centro de ayuda', path:'asistencia' }
		]
	},
	mobile:{
		driver:[
			{ name:'Planes y precios', path:'planes' }, 
			{ name:'Inscripción', path:'inscripcion' }, 
			{ name:'Balances', path:'balances' }, 
			{ name:'Garantías', path:'garantias' },
			{ name:'Seguros', path:'seguros' }
		],
		owner:[
			{ name:'Características', path:'caracteristicas' }, 
			{ name:'Seguros', path:'seguros' }, 
			{ name:'Servicio al cliente', path:'asistencia' }, 
			{ name:'Integraciones', path:'integraciones' },
			{ name:'Documentación', path:'documentacion' }
		],
		resources:[
			{ name:'Sobre nosotros', path:'nosotros' }, 
			{ name:'Términos y condiciones', path:'terminos' },
			{ name:'Política de privacidad', path:'politica' },
			{ name:'Centro de ayuda', path:'asistencia' },
			{ name:'Preguntas frecuentes', path:'preguntas' }
		]
	},
	social:[
		{ name:'facebook', icon:'facebook-f', url:'' },
		{ name:'instagram', icon:'instagram', url:'https://www.instagram.com/rentacapp/' },
		{ name:'whatsapp', icon:'whatsapp', url:'https://wa.me/56973317001' },
		{ name:'linkedin', icon:'linkedin-in', url:'' }
	],
	prices:{
		exclusive:[
			{ name:'Citycar', price:'00.000' }, 
			{ name:'Diesel', price:'00.000' }, 
			{ name:'Premium', price:'00.000' }
		],
		shared:[
			{ name:'D-diurno', price:'00.000' }, 
			{ name:'B-diurno', price:'00.000' }, 
            { name:'D-nocturno', price:'00.000' }, 
            { name:'B-nocturno', price:'00.000' }
        ]
	},
	partners:{
		financial:[
			{ name:'Autofin', logo:'logo-autofin' },
			{ name:'Tanner', logo:'logo-tanner' }
		],
		insurance:[
			{ name:'Sura', logo:'logo-sura' },
			{ name:'Aon', logo:'logo-aon' },
			{ name:'Unnio', logo:'logo-unnio' }
		],
		transport:[
			{ name:'Uber', logo:'logo-uber' },
			{ name:'Cabify', logo:'logo-cabify' },
			{ name:'DiDi', logo:'logo-didi' }
		]
	}, 
	plans:{
		citycar:{
			name:'Citycar',
			price:75000,
			services:[
				'Disponibilidad de 12 hrs diarias', 'Citycar económico', 'Kilómetros ilimitados', 
				'Cobertura de seguros', 'Asistencia en ruta', 'Crédito de combustible'
			]
		},
		diesel:{
			name:'Diesel',
			price:85000,
			benefits:['Apoyo en acceso a microcréditos'],
			services:[
				'Disponibilidad de 12 hrs diarias', 'Vehículo diesel de alto rendimiento', 'Kilómetros ilimitados', 
				'Cobertura de seguros', 'Asistencia en ruta', 'Crédito de combustible'
			]
		},
		premium:{
			name:'Premium',
			price:90000,
			benefits:['Apoyo en acceso a microcréditos'],
			services:[
				'Disponibilidad de 12 hrs diarias', 'Vehículo de categoría Black', 'Kilómetros ilimitados', 
				'Cobertura de seguros', 'Asistencia en ruta', 'Crédito de combustible'
			]
		}
	}
}