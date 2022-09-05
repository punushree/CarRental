import React from "react"

const Home = (props) => {
  return (
    <>
  <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Home
