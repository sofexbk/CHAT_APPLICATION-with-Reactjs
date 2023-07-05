import './App.css';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed from './components/ChatFeed';
const App=() => {
  return (
    <ChatEngine
       height="100vh"
       projectID="
       f4e27272-b989-473f-b511-8db17403a452"
       userName="Mohssin"
       userSecret="123123"
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
