import React, { Suspense, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'

import Effects from './Effects'
import MetaballSwarm from './MetaballSwarm/MetaballSwarm'

import './styles.css'

const faqs = [
  {
    question: 'What are the team sizes?',
    answer: 'Teams are capped to at most 3 participants'
  },
  {
    question: 'Where do I submit a team?',
    answer: 'Use <b><u><a href="https://forms.gle/a8oWcWnYxt3ZhyAj7" target="_blank">this link</a></u></b> to submit teams'
  },
  {
    question: 'How will the prizes be distributed?',
    answer:
      'Each sponsor outlines prize distribution according to the details included in the <b><u><a href="https://docs.google.com/document/d/1SKRlqt5lIM3IOvXQeupBlJwITV3hggryKK9T0wXo9fk/edit?usp=sharing" target="_blank">hack pack</a></u></b>'
  },
  {
    question: 'Where is the hackathon located?',
    answer: 'The kick off event is at Kitt Labs, the hackathon is at Tech Square Social Club'
  },
  {
    question: 'When is the hackathon?',
    answer: 'Begins October 26th in-person or virtual, ends November 6th in-person'
  }
]

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true)
    }, 1000)
  }, [])
  return hasMounted
}

function App() {
  const urls = [
    'https://media.graphassets.com/RmZ06tMSj6st04ov8lkh',
    'https://media.graphassets.com/U7IY50hxQyRtmm5CjURM',
    'https://media.graphassets.com/XL8aVyXoQ9iU1LZYw09d',
    'https://media.graphassets.com/q5n0pT5Q1Oqv1LzdA1Gp'
  ]
  const hasMounted = useHasMounted()

  const extra = `z-10 transition-all ease-out duration-1000 delay-1000 drop-shadow ${hasMounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`
  return (
    <>
      <meta
        property="og:image"
        content="https://cdn.raster.app/blockchain-at-georgia-tech/Sb4iAtiu4B?ixlib=js-3.6.0&amp;s=ef4c765f8a020ebbb89567b2d2d73076"></meta>
      <div style={{ height: '100vh' }} className="fixed w-full pointer-events-none">
        <Canvas gl={{ autoClear: false }} pixelRatio={getDevicePixelRatio(1)}>
          <MetaballSwarm />
          <Suspense fallback={null}>
            <Effects />
          </Suspense>
        </Canvas>
      </div>
      {/* First fold */}
      <section className="text-white z-20 flex max-w-screen-2xl mx-auto justify-start items-center min-h-screen drop-shadow">
        <div className="max-w-[min(600px,100vw)] px-16 md:mx-20 lg:mx-36 xl:mx-48">
          <h3 className={`text-3xl font-extrabold  transition-all duration-1000 ease-out ${hasMounted ? 'opacity-75' : 'opacity-0 translate-y-4'}`}>Web3ATL</h3>
          <h1
            className={`text-5xl md:text-8xl font-black drop-shadow-2xl transition-all duration-1000 delay-500 ease-out font-mono ${
              hasMounted ? '' : 'opacity-0 translate-y-4'
            }`}>
            Hackathon.
          </h1>
          <div className={extra}>
            <p className={`mb-3 text-gray-400`}>
              💻 Hybrid Event.
              <br />
              🤝 Open to all. <br />
              💸 <b>$10,000 in prizes.</b>
            </p>
            <p className="uppercase text-white font-bold mb-8 ">📍 Oct 26 - Nov 6, Tech Square</p>
            <div className={`grid md:grid-cols-2 gap-4 text-center`}>
              <a href="https://forms.gle/YN6NSAbe2CyuzADc7" className="cta-button">
                Apply
              </a>
              <a href="https://docs.google.com/document/d/1SKRlqt5lIM3IOvXQeupBlJwITV3hggryKK9T0wXo9fk/edit?usp=sharing" className="cta-button">
                Hack Pack
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors */}
      <div className="hidden md:relative h-0 flex justify-center">
        <div className="absolute z-40 text-white max-w-screen-lg mx-auto glass -translate-y-1/2 grid grid-cols-1 md:grid-cols-4 items-center gap-12">
          {urls.map((url, i) => (
            <img src={url} alt="" />
          ))}
        </div>
      </div>
      {/* Track 1 */}
      <section className="blur-and-dark section-thing">
        <div className="glass w-[min(500px,90vw)]">
          <h2 className="text-3xl font-bold">Data Track</h2>
          <p className="opacity-80 my-4">
            Beginning October 26th, hackers will compete to build an ETH price prediction model using the ocean protocol SDK. Winner will be decided by taking
            the NMSE of the predicted price versus actual price over 24 1-hour intervals.
            <DifficultySlider num={2} title="ML&nbsp;&nbsp;&nbsp;&nbsp;" />
            <DifficultySlider num={2} title="Python" />
          </p>
          <a href="https://github.com/oceanprotocol/predict-eth/blob/main/predict-eth2.md" className="button">
            Problem Details
          </a>
        </div>
        <img src={urls[1]} alt="" className="drop-shadow pb-10" />
      </section>
      {/* Track 2 */}
      <section className="section-thing">
        <img src={urls[0]} alt="" className="drop-shadow" />
        <div className="border-card bg-black/50 w-[min(500px,90vw)]">
          <h2 className="text-3xl font-bold">Security Track</h2>
          <p className="opacity-80 my-4">
            Forta protects Web3. Hackers will develop solutions using Fortas SDK to deliver protection or detection value through bots, libraries, or data
            insights.
            <DifficultySlider num={2} title="ML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
            <DifficultySlider num={1} title="GQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
            <DifficultySlider num={2} title="Blockchain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
            <DifficultySlider num={2} title="Python, JS, or TS" />
          </p>
          <a href="https://docs.google.com/document/d/1JoUTH5JFYXdkpcSWpToqJkPCANg2qmEvzMWVFyIy64I/edit?usp=sharing" className="button">
            Problem Details
          </a>
        </div>
      </section>
      {/* Track 3 */}
      <section className="blur-and-dark section-thing">
        <img src={urls[2]} alt="" className="drop-shadow" />
        <div className="border-card bg-black/50 w-[min(500px,90vw)]">
          <h2 className="text-3xl font-bold">Solidity Track</h2>
          <p className="opacity-80 my-4">
            TBD
            <DifficultySlider num={2} title="Solidity&nbsp;&nbsp;" />
            <DifficultySlider num={2} title="Blockchain" />
          </p>
          <a href="https://docs.google.com/document/d/1JoUTH5JFYXdkpcSWpToqJkPCANg2qmEvzMWVFyIy64I/edit?usp=sharing" className="button">
            Problem Details
          </a>
        </div>
      </section>
      {/* Track 4 */}
      <section className="section-thing">
        <div className="glass w-[min(500px,90vw)]">
          <h2 className="text-3xl font-bold">TBD</h2>
          <p className="opacity-80 my-4">
            More details soon!
            <br></br>
            <br></br>
            <br></br>
          </p>
          <a href="/" className="button">
            Problem Details
          </a>
        </div>
        <img src={urls[3]} alt="" className="drop-shadow" />
      </section>

      <section className="section-thing blur-and-dark !h-auto py-20">
        <div className="w-full space-y-10">
          <div className="flex flex-col md:flex-row w-full justify-around px-8 gap-6 min-w-[300px] mx-auto drop-shadow">
            <a href="https://forms.gle/YN6NSAbe2CyuzADc7" className="button hover:text-white !bg-black/50">
              Apply
            </a>
            <a
              href="https://docs.google.com/document/d/1SKRlqt5lIM3IOvXQeupBlJwITV3hggryKK9T0wXo9fk/edit?usp=sharing"
              className="button hover:text-white !bg-black/50">
              Hack Pack
            </a>
            <a href="https://web3atl.io/schedule" className="button hover:text-white !bg-black/50">
              Schedule
            </a>
            <a href="https://discord.gg/gVvKKhcCA8" className="button hover:text-white !bg-black/50">
              Discord
            </a>
          </div>
          <div className="px-10 md:px-16 lg:px-20 xl:px-24">
            <h2 className="mb-2 mt-4 font-bold text-4xl">FAQs</h2>
            <div className="faq">
              {faqs.map((faq, i) => (
                <>
                  <h3 className="" key={faq.question}>
                    {faq.question}
                  </h3>
                  <p key={faq.question} className="text-gray-300 pl-2 pb-4" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function DifficultySlider({ num, title }) {
  const max = 4
  return (
    <div className="flex gap-x-1 items-center">
      <p className="mr-2 font-mono">{title}</p>
      {new Array(max).fill(0).map((_, i) => {
        return <div className={`rounded-full w-2 h-2 border border-white/90 ${i < num ? 'bg-white' : ''}`}></div>
      })}
    </div>
  )
}

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0'

ReactDOM.render(<App />, document.getElementById('root'))
