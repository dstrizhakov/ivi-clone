import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';
import cn from 'classnames';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={cn(styles.h, styles.h1)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(styles.h, styles.h2)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(styles.h, styles.h3)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn(styles.h, styles.h4)}>{children}</h4>;
    default:
      return <></>;
  }
};
