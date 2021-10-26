import React, { useContext } from 'react';
import '../Chats.css';
import Avatar from '@mui/material/Avatar';
import timeago from 'epoch-timeago';
import Divider from '@mui/material/Divider';
import { ItemsContext } from '../../ItemsContext';

export default function ChatListEntry({ entryObj }) {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const {
    trader1,
    trader1Photo,
    trader1ItemPhoto,
    trader2,
    trader2Photo,
    trader2ItemPhoto,
    timestamp,
    lastMessage,
  } = entryObj;

  // onclick function
  // once clicked
  // sets the global state of currentChatRoom

  const TimeAgo = ({ time }) => (
    <time dateTime={new Date(time).toISOString()}>{timeago(time)}</time>
  );

  const epochTimeStamp = Date.now() - 60000 * 22;
  <TimeAgo time={epochTimeStamp} />;

  return (
    <>
      {trader1 === currentUser.firstName ? (
        <>
          <div className="chat">
            <div>
              <Avatar className="chat_image" src={trader2Photo} />
              <h3>{trader2}</h3>
            </div>
            <div className="chat_details">
              <p>{lastMessage}</p>
            </div>
            <p className="chat_timestamp">
              {' '}
              <TimeAgo time={epochTimeStamp} />
            </p>
          </div>
          <Divider />
        </>
      ) : (
        <>
          <div className="chat">
            <Avatar className="chat_image" src={trader1Photo} />
            <h3>{trader1}</h3>
            <div className="chat_details">
              <p>{lastMessage}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
          </div>
          <Divider />
        </>
      )}
    </>
  );
}
