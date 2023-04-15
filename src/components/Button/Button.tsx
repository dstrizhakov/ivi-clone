import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({
  children,
  appearance = 'rectangle',
  size = 'M',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        {
          [styles.rectangle]: appearance == 'rectangle',
          [styles.square]: appearance == 'square',
          [styles.circle]: appearance == 'circle',
          [styles.red]: appearance == 'red',
          [styles.transparent]: appearance == 'transparent',
        },
        {
          [styles.S]: size == 'S',
          [styles.M]: size == 'M',
          [styles.L]: size == 'L',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
