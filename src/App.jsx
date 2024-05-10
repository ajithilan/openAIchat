import './App.sass'
import { ChatPanel } from './components/chatroom/chatpanel'
import { Navigation } from './components/navbar/navigation'
import { UserProfile } from './components/userprofile/userprofile'

function App() {

  return <div className="app">
    <Navigation/>
    <section className='profile flex'>
      <UserProfile/>
      <ChatPanel/>
    </section>
  </div>
}

export default App