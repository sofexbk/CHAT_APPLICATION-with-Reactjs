import './App.css';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App=() => {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
       height="100vh"
       projectID="
       b5d151b5-5c3e-4c3e-b6ea-0a8647654f5d"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
//props in chatengine should be updated abro , variable