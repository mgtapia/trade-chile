import React, { useEffect, useState } from 'react'
import { Link, Web } from 'components'
import { useStore } from 'contexts'
import $, { fn, io } from 'actions'

export default () => {
	const { dark, lang, ES, setLang } = useStore();
	return (
		<header className="web">
			<nav>
				<div className="container-fluid">
					<ul>
						<li>
							<img alt="Trade Chile" src="/images/logos/trade-0.png"/>
						</li>
					</ul>
					<ul>
						<li onClick={() => fn.scroll()}>{ES ? 'Inicio' : 'Home'}</li>
						<li onClick={() => fn.scroll($('servicios').offsetTop)}>{ES ? 'Servicios' : 'Services'}</li>
						<li onClick={() => fn.scroll($('nosotros').offsetTop)}>{ES ? 'Nosotros' : 'About us'}</li>
						<li onClick={() => fn.scroll($('clientes').offsetTop)}>{ES ? 'Clientes' : 'Customers'}</li>
						<li onClick={() => fn.scroll($('contacto').offsetTop)}>{ES ? 'Contacto' : 'Contact'}</li>
						<li className="menu">
							<a href="https://api.whatsapp.com/send?phone=56990990871" target="_blank">
								{io('whatsapp', 'fb', 'pr-3')}
							</a>
						</li>
						<li className="flag" onClick={() => { setLang(lang == 'ES' ? 'EN' : 'ES') }}>{io('globe', 'fs')}
							<a className="lang fr">{lang == 'ES' ? 'ES' : 'EN'}</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}