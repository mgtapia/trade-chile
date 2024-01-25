import { Fragment } from 'components';
import classnames from 'classnames';
import { APP } from 'consts';

import Helmet from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Console = ({ children, component, title, ...args }) => {
  const Component = component || Fragment;
  return (
    <div className={classnames('app', args.design)}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
        <title>{APP.alias} | {title || APP.slogan}</title>
      </Helmet>
      {args.design === 'admin' && (
        <Navbar {...args} />
      )}
      <Component>
        {children}  
      </Component>
      {args.design === 'admin' && (
        <Footer />
      )}      
    </div>
	);
};

export default Console;