import React, { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import s from './AddItemForm.module.scss';

type AddItemFormPropsType = {
  addItem: (title: string) => void;
  tooltipTitle: string;
  inputLabel: string;
  errorMessage: string;
  validateNumber?: boolean;
  sx?: any;
};

export const AddItemForm = memo(
  ({
    addItem,
    inputLabel,
    sx,
    validateNumber = false,
    errorMessage,
    tooltipTitle,
  }: AddItemFormPropsType) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const regex = validateNumber ? /^\d{12,}$/ : /./;
    const addItemHandler = () => {
      if (regex.test(title.trim())) {
        addItem(title);
        setTitle('');
        setError(null);
      } else {
        setError(errorMessage);
      }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (error) {
        setError(null);
      }
      if (e.charCode === 13) {
        addItemHandler();
      }
    };

    return (
      <div className={s.formBlock}>
        <TextField
          id="standard-basic"
          value={title}
          size="small"
          label={inputLabel}
          variant="outlined"
          fullWidth
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          sx={sx}
        />
        <Tooltip title={tooltipTitle} arrow>
          <IconButton onClick={addItemHandler}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        {error && <div className={s.error}>{error}</div>}
      </div>
    );
  }
);
