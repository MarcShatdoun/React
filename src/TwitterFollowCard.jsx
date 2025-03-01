import { useState } from 'react' 
export function TwitterFollowCard ({formatUserName, userName, name,}) {
  const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo': 'Seguir';
    const imgSrc = `https://unavatar.io/${userName}`
    const buttonClassName = isFollowing ? 
    'tw-followCard-button is-following' 
    : 'tw-followCard-button '

    let handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img 
           className="tw-followCard-avatar"
           src={imgSrc} 
           alt={`Foto de ${userName}`} />
  
          <div className='tw-followCard-info'>  
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside className='tw-followCard-user'>
          <button className={buttonClassName} onClick={handleClick}>
            {text}
          </button>
        </aside>
      </article>
    )
}