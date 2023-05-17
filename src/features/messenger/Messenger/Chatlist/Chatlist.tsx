import React from 'react';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { authSelectors } from 'features/auth';
import { ChatlistHeader } from '../../../../common/components/ChatlistHeader';
import { ChatlistCreator } from './ChatlistCreator';

import { Chats } from './Chats';

type PropsType = {
  changeCurrentChatId: (currentChatId: string) => void;
};
export const Chatlist = ({ changeCurrentChatId }: PropsType) => {
  const whatsAppId = useAppSelector(authSelectors.selectWhatsAppId);
  const phoneNumber = `+${whatsAppId.replace(/\D/g, '')}`;
  return (
    <div>
      <ChatlistHeader phoneNumber={phoneNumber} />
      <ChatlistCreator />
      <Chats changeCurrentChatId={changeCurrentChatId} />
    </div>
  );
};
