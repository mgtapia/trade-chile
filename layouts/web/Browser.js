import { Fragment } from 'components';
import classnames from 'classnames';
import { APP } from 'consts';

import Helmet from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Browser = ({ children, component, ...args }) => {
  const Component = component || Fragment;
  const title = `${APP.alias} | ${args.meta?.title || APP.slogan}`;
  const image = args.meta?.image;
  return (
    <div className={classnames('web', args.design)}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta content={title} name="og:title" />
        <meta content={args.meta?.description} name="description" />
        <meta content={args.meta?.description} name="og:description" />
        <meta content={image} name="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={args.meta?.description} name="twitter:description" />
        <meta content={image} name="twitter:image" />
        <meta content="website" name="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="Webflow" name="generator" />
      </Helmet>
      <Navbar 
        name={args.name} 
        push={args.push}
        tabs={args.tabs}
      />
      <Component>
        {children}  
      </Component>
      <Footer name={args.name} />
    </div>
	);
};

export default Browser;