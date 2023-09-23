import React from 'react'
import './PlaylistCSS.css'
export default function Playlist() {
  return (
    <>
    <section className='p-4'>
<section className="playlist-details">
    <h1 className="heading">playlist details</h1>
    <div className="row">
      <div className="column">
        <form action="" method="post" className="save-playlist">
          {/* <button type="submit">
            <i className="far fa-bookmark" /> <span>save playlist</span>
          </button> */}
        </form>
        <div className="thumb">
          <img src="./pictures/thumb-1.png" alt="" />
          <span>10 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src="./pictures/pic-2.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="details">
          <h3>complete HTML tutorial</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            minus reiciendis, error sunt veritatis exercitationem deserunt velit
            doloribus itaque voluptate.
          </p>
          <a href="" className="inline-btn">
            view profile
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="playlist-videos">
    <h1 className="heading">playlist videos</h1>
    <div className="box-container">
      <a className="box" href="watch-video.html">
        <i className="fas fa-play" />
        <img src="./pictures/post-1-1.png" alt="" />
        <h3>complete HTML tutorial (part 01)</h3>
      </a>
      <a className="box" href="watch-video.html">
        <i className="fas fa-play" />
        <img src="./pictures/post-1-2.png" alt="" />
        <h3>complete HTML tutorial (part 02)</h3>
      </a>
      <a className="box" href="watch-video.html">
        <i className="fas fa-play" />
        <img src="./pictures/post-1-3.png" alt="" />
        <h3>complete HTML tutorial (part 03)</h3>
      </a>
      <a className="box" href="watch-video.html">
        <i className="fas fa-play" />
        <img src="./pictures/post-1-4.png" alt="" />
        <h3>complete HTML tutorial (part 04)</h3>
      </a>
      <a className="box" href="watch-video.html">
        <i className="fas fa-play" />
        <img src="./pictures/post-1-5.png" alt="" />
        <h3>complete HTML tutorial (part 05)</h3>
      </a>
      <a className="box" href="watch-video.html">
        <i className="fas fa-play" />
        <img src="./pictures/post-1-6.png" alt="" />
        <h3>complete HTML tutorial (part 06)</h3>
      </a>
    </div>
  </section> */}
    </section>
    <section className='row p-2 m-0'>
        <div className='col mb-4'>
        <div className=' p-2 rounded ' style={{height:"260px", width:"350px",backgroundColor:"#4A4A4A"}}>
    <img className='rounded' src='./pictures/post-1-1.png'height={200} width={330} ></img>
    <p className='mt-2 text-dark fs-6' style={{fontWeight:'bold'}}>Complete HTML tutorial(part 01)</p>
  </div>
        </div>
        <div className='col mb-4'>
        <div className=' p-2 rounded ' style={{height:"260px", width:"350px",backgroundColor:"#4A4A4A"}}>
    <img className='rounded' src='./pictures/post-1-2.png'height={200} width={330} ></img>
    <p className='mt-2 text-dark fs-6' style={{fontWeight:'bold'}}>Complete HTML tutorial(part 02)</p>
  </div>
        </div>
        <div className='col mb-4'>
        <div className=' p-2 rounded ' style={{height:"260px", width:"350px",backgroundColor:"#4A4A4A"}}>
    <img className='rounded' src='./pictures/post-1-3.png'height={200} width={330} ></img>
    <p className='mt-2 text-dark fs-6' style={{fontWeight:'bold'}}>Complete HTML tutorial(part 03)</p>
  </div>
        </div>
        <div className='col mb-4'>
        <div className=' p-2 rounded ' style={{height:"260px", width:"350px",backgroundColor:"#4A4A4A"}}>
    <img className='rounded' src='./pictures/post-1-4.png'height={200} width={330} ></img>
    <p className='mt-2 text-dark fs-6' style={{fontWeight:'bold'}}>Complete HTML tutorial(part 04)</p>
  </div>
        </div>
        <div className='col mb-4'>
        <div className=' p-2 rounded ' style={{height:"260px", width:"350px",backgroundColor:"#4A4A4A"}}>
    <img className='rounded' src='./pictures/post-1-5.png'height={200} width={330} ></img>
    <p className='mt-2 text-dark fs-6' style={{fontWeight:'bold'}}>Complete HTML tutorial(part 05)</p>
  </div>
        </div>
        <div className='col mb-4'>
        <div className=' p-2 rounded ' style={{height:"260px", width:"350px", backgroundColor:"#4A4A4A"}}>
    <img className='rounded' src='./pictures/post-1-6.png'height={200} width={330} ></img>
    <p className='mt-2 text-dark fs-6' style={{fontWeight:'bold'}}>Complete HTML tutorial(part 06)</p>
  </div>
  {/* <video src='.https://www.w3schools.com/html/mov_bbb.mp4'></video> */}
        </div>
    </section>
  
</>

  )
}
