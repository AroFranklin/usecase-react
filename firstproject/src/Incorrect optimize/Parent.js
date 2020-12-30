import React from 'react'

function Parent() {
    
        localStorage.setItem('ID',121)
    
    return (
        <div>
          <h1> hi {localStorage.getItem('ID')}</h1>
        </div>
    )
}

export default Parent
