import React from 'react'
import { Link } from 'components'
import { fn, io } from 'actions'
import Header from './Header'
import Footer from './Footer'

const Banner = ({ bg, center, children, lead, scroll, title }) => {
	return (
		<main className="text-center">
       <div className="container-fluid flexbox">
         <div>
	        <img alt="Trade Chile" className="mr-4 min-sm" src="/images/logos/trade-3.png"/>
					<div className="business">
						<h1>{title}</h1>
						<p className={fn.classnames('lead', { 'ml-0 pl-0':!center })}>{lead}</p>
					</div>
				</div>
			</div>
        </main>
	)
}

const Browser = ({ children, dark, lang, name, setLang }) => {
	return (
		<div>
			<div className="browser">		
				<Header />
				<section>{children}</section>
				<Footer />
			</div>
		</div>
	)
}

const Content = ({ active, center, children, dark, id, sub, tab }) => {
	return (
		<article id={tab} className={fn.classnames({ 'text-center':center, dark, 'd-none':typeof id === 'number' && active != id, [sub]:sub })}>
        	<div className="container-fluid">
			{children}
			</div>
        </article>
	)
}

export {
	Banner, 
	Browser, 
	Content
}