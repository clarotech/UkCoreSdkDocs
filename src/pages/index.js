import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={clsx('SdkFeatures')}>
          <div className="container">
            <div className="row">
              {/* <HomepageFeatures /> */}
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="/img/hl7uk.png" />
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">HL7 UK Core</Heading>
                  <p>The SDK provides convenient methods for implementing the UK Core specification.</p>
                </div>
              </div>
              {/* <HomepageFeatures /> */}
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="/img/logo-fhir-flame-195-297.png" />
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">FHIR Release R4</Heading>
                  <p>Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                    ahead and move your docs into the <code>docs</code> directory.</p>
                </div>
              </div>
              {/* <HomepageFeatures /> */}
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="/img/Nuget-logo.png" />
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">C# NuGet Package</Heading>
                  <p>Extend or customize your website layout by reusing React. Docusaurus can
                    be extended while reusing the same header and footer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
