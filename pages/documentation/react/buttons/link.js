import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import ButtonsCode from 'components/Documentation/JavaScript/React/ButtonsCode';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import Icon from 'components/Icon/Icon';
import Ripple from 'material-ripple-effects';

export default function Buttons() {
  const [copy, setCopy] = React.useState(null);
  const ripple = new Ripple();

  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        <title>React Buttons | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container max-w-7xl mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="React Buttons"
                description="Beautiful buttons using React."
              />
              <SmallHeading title="Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                buttonName="Button"
                buttonChildren="Button"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Rounded Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={true}
                buttonChildren="Rounded Button"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                Rounded Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Small Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="sm"
                rounded={false}
                buttonChildren="Small Button"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                Small Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Regular Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                buttonChildren="Regular Button"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                Regular Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Large Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="lg"
                rounded={false}
                buttonChildren="Large Button"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                Large Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon Before" />

              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                hasIcon={true}
                buttonChildren={`<Icon name="favorite" /> With Icon Before`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                <Icon name="favorite" />
                With Icon Before
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon After" />

              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                hasIcon={true}
                buttonChildren={`With Icon After <Icon name="favorite" />`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                With Icon After
                <Icon name="favorite" />
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon Only" />

              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={true}
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                hasIcon={true}
                buttonChildren={`<Icon name="favorite" size="sm" />`}
                iconOnly
                onMouseUp={(e) => ripple.create(e, 'dark')}
              >
                <Icon name="favorite" size="sm" />
              </ButtonsCode>
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
