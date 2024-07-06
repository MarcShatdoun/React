import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <div className='sugerenciaCard'>
        <TwitterFollowCard 
         formatUserName={formatUserName} 
         userName='midudev' 
         name='Miguel Angel' 
        />

        <TwitterFollowCard 
         formatUserName={formatUserName} 
         userName='nuri_shawk' 
         name='Nuri'/>

        <TwitterFollowCard 
         formatUserName={formatUserName} 
         userName='Xixauxas' 
         name='Xavier Fluxa'
        />

        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName='ironmouse' 
        name='Ironmouse'
        />
    </div>

  )
}


