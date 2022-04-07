import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {

    return ( 
<section>
    <header className='wrapperHeader'>
        <h1>Real Madrid Squad</h1>
      <h4 className='colorSmallHeader'>The best team in the world</h4>
    </header>

<main className='mainHeader'>
    <div >
    <Link to="/PlayerList"><button className='startPageBtn'> View all players</button></Link>
</div>
</main>

</section>
     )
};


export default Header;

