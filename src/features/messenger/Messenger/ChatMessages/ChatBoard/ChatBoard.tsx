import React, { useEffect } from 'react';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { messengerActions, messengerSelectors } from 'features/messenger/index';
import { useActions } from 'common/hooks/useActions';
import s from './ChatBoard.module.scss';
import { Message } from './Message';

type PropsType = {
  currentChatNumber: string;
};

export const ChatBoard = ({ currentChatNumber }: PropsType) => {
  const { receiveMessageTC } = useActions(messengerActions);
  useEffect(() => {
    const intervalMessage = setInterval(() => {
      receiveMessageTC();
      return () => clearInterval(intervalMessage);
    }, 5000);
  }, []);
  const chatId = currentChatNumber.replace(/\D/g, '');
  const messengerState = useAppSelector(messengerSelectors.selectMessengerState);

  const currentChat = messengerState.find((chat) => chat.chatId === chatId);
  let messages;
  if (currentChat) {
    messages = currentChat.messages.map((message) => (
      <Message key={message.id} message={message.message} status={message.status} />
    ));
  }

  return <div className={s.boardCont}>{messages}</div>;
};
