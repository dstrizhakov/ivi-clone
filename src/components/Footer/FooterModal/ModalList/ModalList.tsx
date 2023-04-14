import { P } from '@/components/P/P';
import styles from './ModalList.module.scss';
import { ModalListProps } from './ModalList.props';
import { FC, useState } from 'react';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

const ModalList: FC<ModalListProps> = ({ children, title }) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  return (
    <div className={styles.link}>
      <P
        onClick={() => (isListOpen ? setIsListOpen(false) : setIsListOpen(true))}
        size="M"
        className={styles.title}
      >
        {title} {isListOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
      </P>
      {isListOpen && <div className={styles.list}>{children}</div>}
    </div>
  );
};

export default ModalList;
