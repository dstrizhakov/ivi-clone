import { BtnA, BtnS, ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  children,
  appearance = BtnA.rectangle,
  size = BtnS.M,
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        {
          [styles.rectangle]: appearance == BtnA.rectangle,
          [styles.square]: appearance == BtnA.square,
          [styles.circle]: appearance == BtnA.circle,
          [styles.red]: appearance == BtnA.red,
          [styles.transparent]: appearance == BtnA.transparent,
        },
        {
          [styles.S]: size == BtnS.S,
          [styles.M]: size == BtnS.M,
          [styles.L]: size == BtnS.L,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
