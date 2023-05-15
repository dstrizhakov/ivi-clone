import { PProps } from './P.props';
import styles from './P.module.scss';

import cn from 'classnames';

export const P = ({ children, size = 'M', color, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(
        styles.p,
        className,
        {
          [styles.S]: size == 'S',
          [styles.M]: size == 'M',
          [styles.L]: size == 'L',
        },
        {
          [styles.white]: color == 'white',
          [styles.gray__light]: color == 'gray-light',
          [styles.gray]: color == 'gray',
        }
      )}
      {...props}
    >
      {children}
    </p>
  );
};
