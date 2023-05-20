import {
  Window,
  ListOfEducation,
  ListOfWork,
  Skills,
} from '../../component/index'

import CV from '../../../assets/HosamOthman.pdf'
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useState } from 'react'

//Style
import './About.scss'

const About = () => {
  const [skills, setSkills] = useState(false)
  const [education, setEducation] = useState(false)
  const [work, setWork] = useState(false)

  return (
    <div className='about'>
      <Window />
      <div className='controlIcons'>
        <Link to='/'>
          {' '}
          <HiArrowUturnLeft />
        </Link>
      </div>
      <div className='welcome d-flex'>
        <div className=' col-lg-6 d-flex justify-content-center align-items-center flex-column'>
          <div className='welcomeImage'>
            <div className='Profimg'></div>
          </div>
          <div>
            CV Download
            <a href={CV} download>
              EN
            </a>
          </div>
        </div>
        <div className='welcomeText col-lg-6'>
          <div className='aboutme col-lg-12'>
            <h4>About me</h4>
            <p>
              Greetings, I'm a seasoned MERN (MongoDB, Express, React, and
              Node.js) full-stack web developer with extensive expertise in
              creating user-friendly, scalable, and robust web applications. I
              specialize in building dynamic front-end interfaces using React,
              designing efficient back-end APIs using Node.js and Express, and
              working with MongoDB to develop secure, maintainable, and
              high-performing databases. My portfolio showcases various examples
              of my work, including web applications and APIs, that demonstrate
              my proficiency in these areas. I'm keen to collaborate with
              potential clients on their upcoming projects and welcome any
              inquiries or questions.
            </p>
          </div>
          <div className='collection'>
            <div className='d-flex justify-content-around align-items-center'>
              {' '}
              <button
                className='btn btn-info mx-2 fs-3'
                onClick={() => {
                  setEducation(false)
                  setSkills(true)
                  setWork(false)
                }}
              >
                Skills
              </button>
              <button
                className='btn btn-info mx-2 fs-3'
                onClick={() => {
                  setSkills(false)
                  setEducation(true)
                  setWork(false)
                }}
              >
                Education
              </button>
              <button
                className='btn btn-info mx-2 fs-3'
                onClick={() => {
                  setEducation(false)
                  setSkills(false)
                  setWork(true)
                }}
              >
                Work Experience
              </button>
            </div>

            <div className='timeLine'>
              {skills && (
                <div className='skills collectionBox w-100 d-flex'>
                  <Skills />
                </div>
              )}
              {education && (
                <div className='education collectionBox'>
                  <ListOfEducation />
                </div>
              )}
              {work && (
                <div className='word collectionBox'>
                  <ListOfWork />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
