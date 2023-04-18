import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

export type Breadcrumb = {
  name: string;
  path: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className={styles.breadcrumbs__item}>
            {index === breadcrumbs.length - 1 ? (
              <span>{breadcrumb.name}</span>
            ) : (
              <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
