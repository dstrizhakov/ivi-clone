import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ children, size = 'M', className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.S]: size == 'S',
        [styles.M]: size == 'M',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
