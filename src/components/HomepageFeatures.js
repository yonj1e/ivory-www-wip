import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_open_source_-1-qxw.svg').default,
    description: (
      <>
        No Vendor Lock-In
      </>
    ),
  },
  {
    title: 'Powered by PostgrSQL',
    Svg: require('../../static/img/postgresql-icon.svg').default,
    description: (
      <>
        Based on the <code>PostgreSQL</code>, with full SQL, rock-solid reliability, and a massive ecosystem.
      </>
    ),
  },
  {
    title: 'Backed by HighGo',
    Svg: require('../../static/img/undraw_partying_re_at7f.svg').default,
    description: (
      <>
        Supported by <code>HighGo</code>, The leading provider of PostgreSQL database.
      </>
    ),
  },
  {
    title: 'Oracle Compatible',
    Svg: require('../../static/img/undraw_feeling_proud_qne1.svg').default,
    description: (
      <>
        Migrate your Oracle DB to ivorySQLL.
      </>
    ),
  },
  {
    title: 'Customization',
    Svg: require('../../static/img/undraw_advanced_customization_58j6.svg').default,
    description: (
      <>
        Just download the code and make it as you like.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
