import React from 'react';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { nanoid } from '@reduxjs/toolkit';
import user from 'assets/images/user.png';
import { messengerSelectors } from '../../../index';
import s from './Chats.module.scss';

type PropsType = {
  changeCurrentChatId: (currentChatId: string) => void;
};
export const Chats = ({ changeCurrentChatId }: PropsType) => {
  const chats = useAppSelector(messengerSelectors.selectChats);

  const onClickHandler = (currentChatId: string) => {
    changeCurrentChatId(currentChatId);
  };

  const chatsList = chats.map((chat) => {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className={s.chat} key={nanoid()} onClick={() => onClickHandler(chat)}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className={s.chatUserImg} src={user} alt="user image" />
        <span>{chat}</span>
      </div>
    );
  });

  return <div className={s.chatsContainer}>{chatsList}</div>;
};
