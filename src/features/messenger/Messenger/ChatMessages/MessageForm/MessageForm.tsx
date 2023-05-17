import React from 'react';
import { AddItemForm } from 'common/components/AddItemForm';

import s from './MessageForm.module.scss';

type PropsType = {
  addMessage: (title: string) => void;
};
export const MessageForm = ({ addMessage }: PropsType) => {
  return (
    <div className={s.messFormCont}>
      <AddItemForm
        addItem={addMessage}
        tooltipTitle="Send a message"
        inputLabel="Type a message"
        errorMessage="Required"
      />
    </div>
  );
};
