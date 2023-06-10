import React, { FC } from 'react';
import styles from './InputFileButton.module.scss';
import { useTranslation } from 'react-i18next';

interface InputFileProps {
  setSelected: unknown;
}

const InputFileButton: FC<InputFileProps> = ({ setSelected }) => {
  const { t } = useTranslation();
  const selectFile = (e) => {
    if (e.target.files.length) {
      setSelected(() => e.target.files[0]);
    }
  };
  return (
    <label className={styles.inputFile}>
      <input type="file" name="file" onChange={(e) => selectFile(e)} />
      <span>{t('buttons.choose-file')}</span>
    </label>
  );
};

export default InputFileButton;
