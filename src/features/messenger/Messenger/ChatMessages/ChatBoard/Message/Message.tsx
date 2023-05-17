import React from 'react';
import { MessageStatusType } from 'features/messenger/messengerSlice';
import cn from 'classnames';
import s from './Message.module.scss';

type PropsType = {
  message: string;
  status: MessageStatusType;
};
export const Message = ({ message, status }: PropsType) => {
  return (
    <div className={cn(s.messageBlock, { [s.messageReceiveBlock]: status === 'receive' })}>
      <div className={cn(s.message, { [s.messageReceive]: status === 'receive' })}>{message}</div>
    </div>
  );
};
