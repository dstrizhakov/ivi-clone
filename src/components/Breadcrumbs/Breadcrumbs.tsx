import { FC } from 'react';
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';
import { BreadcrumbsProps } from './Breadcrumbs.props';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs = [] }): JSX.Element => {
  return (
    <>
      {breadcrumbs.length && (
        <div className={styles.container}>
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
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
