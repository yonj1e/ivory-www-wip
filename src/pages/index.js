import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div class="row">
          <div class="column" className={`${styles.heroBanner_2} ${styles.heroLeftImage}`}>
          <p>PostgreSQL</p>
          </div>

          <div class="column" className={styles.heroCenterImage}>
          <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/IvorySQL/IvorySQL/blob/main/README.md">
            <Translate>Learn More</Translate>
          </Link>
        </div>

          </div>
          <div class="column" className={`${styles.heroBanner_2} ${styles.heroRightImage}`}>
            <p>HighGO</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Open Source Oracle Compitable PostgreSQL">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
