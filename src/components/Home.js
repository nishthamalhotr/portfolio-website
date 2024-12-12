import React from 'react'
import pdf from '../pdf/resume.pdf'
const Home = () => {
  return (
    <>
    <div className="container home">
      <div className='left'>
        <h3>Hello,It's me</h3>
        <h1>Nishtha Malhotra</h1>
        <p>I am a passionate web developer with a strong foundation in creating intuitive, dynamic, and user-friendly websites.</p>
        <a href={pdf}  download ="resume.pdf" className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className='right'>
        <div className='img'> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
