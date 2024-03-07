import React from 'react'

function Home() {
  return (
    <>
      <main className='wrapper'>


        <p>This domain is owned by <a href="https://www.prayagadhikari.com.np">Prayag Adhikari</a></p>
        <div className="social-icons">
          <a href="https://www.instagram.com/adhikariprayag" className='icon one' target='_blank'><i className="ri-instagram-line"></i></a>
          <a href="https://www.prayagadhikari.com.np" className='icon two' target='_blank'><i className="ri-global-line"></i></a>
          <a href="https://www.github.com/adhikariprayag" target='_blank' className='icon three'><i className="ri-github-fill"></i></a>
        </div>


      </main>
    </>
  )
}

export default Home