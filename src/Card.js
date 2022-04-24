import React from 'react'

function Card({image,info,position,alt,cardRef}) {
    return (
        <section  className="info-section"> 
            <div className='card-container'>
        <div ref={cardRef} className={`card card-${position}`}><img src={image} alt={alt} />
        <h1>{info}</h1>
        </div>
    </div>
    </section>
        
    )
}

export default Card
