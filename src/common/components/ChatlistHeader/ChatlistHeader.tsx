import React from 'react';
import user from 'assets/images/user.png';
import s from './ChatlistHeader.module.scss';

type PropsType = {
  phoneNumber: string;
  owner?: boolean;
};

export const ChatlistHeader = ({ phoneNumber, owner = true }: PropsType) => {
  return (
    <header className={s.chatlistHeader}>
      {phoneNumber && (
        <>
          <img className={s.chatlistUserAva} src={user} alt="user avatar" />
          <p>
            {phoneNumber} {owner && '(you)'}
          </p>
        </>
      )}
    </header>
  );
};
