import React from 'react'
import { Link, Web } from 'components'
import { useStore } from 'contexts'
import { fn, io } from 'actions'

export default () => {
	const { dark, lang, setLang } = useStore();
	return (
		<footer className={fn.classnames('web', { dark })}>
			<nav>
				<div className="container-fluid d-none">
					
				</div>
				<div className="container-fluid d-none">
					
				</div>
				<div className="container-fluid">
					<ol>
						<li>&copy; {(new Date()).getFullYear()} Trade Chile<span className="min-md"> - {lang == 'ES' ? 'CONSULTORA DE NEGOCIOS' : 'BUSINESS CONSULTING'}</span><span className="min-sm">. &mdash; Desarrollado por <a target="_blank" href="https://www.m2btech.cl/"><b>M2B Technologies</b></a></span></li>
						<li>{io('globe')}
							<a className={fn.classnames('lang fr', { active:lang == 'ES' })} onClick={() => { setLang('ES'); fn.scroll() }}>ES<span className="min-md">PAÑOL</span></a>|
							<a className={fn.classnames('lang', { active:lang == 'EN' })} onClick={() => { setLang('EN'); fn.scroll() }}>EN<span className="min-md">GLISH</span></a>
						</li>
					</ol>
					<ol className="max-xs text-center border-top">
						<li className="w-100">Desarrollado por <a target="_blank" href="https://www.m2btech.cl/"><b>M2B Technologies</b></a></li>
					</ol>
				</div>
			</nav>
		</footer>
	)
}