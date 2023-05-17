import React from 'react';
import { ChatlistHeader } from 'common/components/ChatlistHeader';
import { useActions } from 'common/hooks/useActions';
import { MessageForm } from './MessageForm';
import { ChatBoard } from './ChatBoard';
import s from './ChatMessages.module.scss';
import { messengerActions } from '../../index';

type PropsType = {
  currentChatNumber: string;
};

export const ChatMessages = ({ currentChatNumber }: PropsType) => {
  const { sendMessageTC } = useActions(messengerActions);
  const addMessage = (title: string) => {
    sendMessageTC({ currentChatNumber, message: title });
  };

  return (
    <div className={s.chatMessagesCont}>
      {currentChatNumber && (
        <>
          <ChatlistHeader phoneNumber={currentChatNumber} owner={false} />
          <ChatBoard currentChatNumber={currentChatNumber} />
          <MessageForm addMessage={addMessage} />
        </>
      )}
    </div>
  );
};
