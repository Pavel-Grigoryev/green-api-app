import React from 'react';
import { AddItemForm } from 'common/components/AddItemForm';
import { useActions } from 'common/hooks/useActions';
import s from './ChatlistCreator.module.scss';
import { messengerActions } from '../../../index';

export const ChatlistCreator = () => {
  const { createChatAC } = useActions(messengerActions);
  const addPhoneNumber = (num: string) => {
    createChatAC(num);
  };

  return (
    <div className={s.chatCreator}>
      <AddItemForm
        addItem={addPhoneNumber}
        tooltipTitle="Create a new chat"
        inputLabel="Phone number"
        validateNumber
        errorMessage="Must be a number at least 12 characters long"
      />
    </div>
  );
};
