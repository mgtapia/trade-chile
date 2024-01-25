import React, { Fragment } from 'react';
import Helmet from 'next/head';

export default props => {
	switch (props.config) {
		case 'app':{
			return (
				<Helmet>
					<title>B&D &mdash; Trade Chile</title>
					<meta charSet="utf-8"/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
					<meta name="author" content={props.data.author}/>
	        <meta name="copyright" content={props.data.author}/>
	        <meta name="description" content="Ofrecemos servicios “a  la medida”,  con el objeto de proveer a empresas extranjeras o chilenas, asesorías comerciales, gestionar contactos y facilitar los negocios internacionales."/>
	        <meta name="keywords" content="asesoria, byd, trade, chile, empresa, comercio, exterior, extranjero, comercia, negocio, internacional"/>
	        <meta name="language" content="ES"/>
	        <meta name="robots" content="index, follow"/>
	        <meta name="title" content={props.data.name}/>
	        <meta name="url" content={props.data.url}/>
	        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
	        <link rel="canonical" href={props.data.url}/>

	        <meta property="og:description" content="Ofrecemos servicios “a  la medida”,  con el objeto de proveer a empresas extranjeras o chilenas, asesorías comerciales, gestionar contactos y facilitar los negocios internacionales."/> 
          <meta property="og:image" content="/santiago.jpg"/>
          <meta property="og:image:secure_url" content="/santiago.jpg"/>
          <meta property="og:image:type" content="image/jpg"/> 
          <meta property="og:image:alt" content="Arriendos semanales, vehículos económicos."/>
          <meta property="og:locale" content="es_CL"/> 
          <meta property="og:site_name" content={props.data.name}/>
          <meta property="og:title" content={props.data.name}/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={props.data.url}/>
          <meta name="twitter:title" content={props.data.name}/>
					<meta name="twitter:description" content="Ofrecemos servicios “a  la medida”,  con el objeto de proveer a empresas extranjeras o chilenas, asesorías comerciales, gestionar contactos y facilitar los negocios internacionales."/>
					<meta name="twitter:image" content="/santiago.jpg"/>
					<meta name="twitter:site" content="@tradechile"/>
					<meta name="twitter:card" content="summary"/>
				</Helmet>
			)
		}
		default: {			
			return (
				<Helmet>
					<meta name="robots" content="noindex, nofollow"/>
				</Helmet>
			)
		}		
	}	
}