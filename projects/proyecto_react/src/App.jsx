
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'pauk',
    name: 'Pau Cañizares López',
    isFollowing: true
  },
  {
    userName: 'exemple1',
    name: 'Mark',
    isFollowing: false
  },
  {
    userName: 'exemple2',
    name: 'Avon',
    isFollowing: true
  },
  {
    userName: 'exemple3',
    name: 'Hertz',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
