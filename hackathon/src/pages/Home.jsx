import React from 'react'
import { useHasMounted } from '../utils'

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

export function Home() {
    const urls = [
      'https://media.graphassets.com/RmZ06tMSj6st04ov8lkh',
      'https://media.graphassets.com/U7IY50hxQyRtmm5CjURM',
      'https://media.graphassets.com/XL8aVyXoQ9iU1LZYw09d',
      'https://media.graphassets.com/pyb441HiSOW35ZlFJiFs'
    ]
    const hasMounted = useHasMounted(1000)
  
    const extra = `z-10 transition-all ease-out duration-1000 delay-1000 drop-shadow ${hasMounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`
    return (
      <>
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
              <p className="uppercase text-white font-bold mb-2 ">📍 Oct 26 - Nov 6, Tech Square</p>
              <p className="uppercase text-white font-bold mb-8 ">🚨 Applications close Nov 1</p>
              <div className={`grid md:grid-cols-2 gap-4 text-center`}>
                <a href="https://forms.gle/YN6NSAbe2CyuzADc7" className="cta-button" target="_blank">
                  Apply
                </a>
                <a href="https://docs.google.com/document/d/1SKRlqt5lIM3IOvXQeupBlJwITV3hggryKK9T0wXo9fk/edit?usp=sharing" className="cta-button" target="_blank">
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
              <img src={url} key={i} alt="" />
            ))}
          </div>
        </div>
        {/* Track 1 */}
        <section className="blur-and-dark section-thing">
          <img src={urls[3]} alt="" className="drop-shadow" />
          <div className="border-card bg-black/50 w-[min(500px,90vw)]">
            <h2 className="text-3xl font-bold">Solidity Sprint</h2>
            <div className="opacity-80 my-4">
              On November 5th, hackers will compete in a Solidity Sprint competition with problems that increase in difficulty. 
              The goal is to achieve the highest score by interacting with a live contract on Goerli testnet. 
              <DifficultySlider num={2} title="Blockchain&nbsp;" />
              <DifficultySlider num={2} title="Solidity&nbsp;&nbsp;&nbsp;" />
              <DifficultySlider num={2} title="Game Theory" />
            </div>
            <a href="https://docs.google.com/document/d/16Q_mg1YALV35S_sCy_fjlKw5480r9dRBdvhlfAi-8aE/edit?usp=sharing" className="button" target="_blank">
              Problem Details
            </a>
          </div>
        </section>
        {/* Track 2 */}
        <section className="section-thing">
          <div className="glass w-[min(500px,90vw)]">
            <h2 className="text-3xl font-bold">Security Track</h2>
            <div className="opacity-80 my-4">
              Forta protects Web3. Hackers will develop solutions using Fortas SDK to deliver protection or detection value through bots, libraries, or data
              insights.
              <DifficultySlider num={2} title="ML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
              <DifficultySlider num={1} title="GQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
              <DifficultySlider num={2} title="Blockchain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
              <DifficultySlider num={2} title="Python, JS, or TS" />
            </div>
            <a href="https://docs.google.com/document/d/17xHAAFSGQvqFVjnnMepil4Jwwq2iCHX2RQSQ3SnozX0/edit?usp=sharing" className="button" target="_blank">
              Problem Details
            </a>
          </div>
          <img src={urls[0]} alt="" className="drop-shadow" />
        </section>
        {/* Track 3 */}
        <section className="blur-and-dark section-thing">
          <img src={urls[2]} alt="" className="drop-shadow" />
          <div className="border-card bg-black/50 w-[min(500px,90vw)]">
            <h2 className="text-3xl font-bold">Chainlink Track</h2>
            <div className="opacity-80 my-4">
              Chainlink is vital to Web3.
              Hackers will build projects that utilize data feeds, varifiable randomness, automation, or API calls inside of smart contracts.
              <DifficultySlider num={2} title="Blockchain" />
              <DifficultySlider num={2} title="Solidity&nbsp;&nbsp;" />
              <DifficultySlider num={1} title="Oracles&nbsp;&nbsp;&nbsp;" />
            </div>
            <a href="https://docs.google.com/document/d/1JoUTH5JFYXdkpcSWpToqJkPCANg2qmEvzMWVFyIy64I/" className="button" target="_blank">
              Problem Details
            </a>
          </div>
        </section>
        {/* Track 4 */}
        <section className="section-thing">
          <div className="glass w-[min(500px,90vw)]">
            <h2 className="text-3xl font-bold">Data Track</h2>
            <div className="opacity-80 my-4">
              Ocean democratizes data through tokenization, trade, and analysis of data in an open marketplace.
              Hackers can choose from two problems - ETH price prediction and Eneregy Efficiency modelling and analysis. 
              <DifficultySlider num={2} title="ML&nbsp;&nbsp;&nbsp;&nbsp;" />
              <DifficultySlider num={2} title="Python" />
            </div>
            <a href="https://docs.google.com/document/d/16mPQvJiJM39qTz3i_lwsrJ6Mg4tEai1UPsCAgY-UyMI/edit?usp=sharing" className="button" target="_blank">
              Problem Details
            </a>
          </div>
        <img src={urls[1]} alt="" className="drop-shadow pb-10" />
        </section>
  
        <section className="section-thing blur-and-dark !h-auto py-20">
          <div className="w-full space-y-10">
            <div className="flex flex-col md:flex-row w-full justify-around px-8 gap-6 min-w-[300px] mx-auto drop-shadow">
              <a href="https://forms.gle/YN6NSAbe2CyuzADc7" className="button hover:text-white !bg-black/50" target="_blank">
                Apply
              </a>
              <a
                href="https://docs.google.com/document/d/1SKRlqt5lIM3IOvXQeupBlJwITV3hggryKK9T0wXo9fk/edit?usp=sharing" 
                target="_blank"
                className="button hover:text-white !bg-black/50">
                Hack Pack
              </a>
              <a href="https://web3atl.io/schedule?hackathon=1" className="button hover:text-white !bg-black/50" target="_blank">
                Schedule
              </a>
              <a href="https://discord.gg/gVvKKhcCA8" className="button hover:text-white !bg-black/50" target="_blank">
                Discord
              </a>
            </div>
            <div className="px-10 md:px-16 lg:px-20 xl:px-24">
              <h2 className="mb-2 mt-4 font-bold text-4xl">FAQs</h2>
              <div className="faq">
                {faqs.map((faq, i) => (
                  <>
                    <h3 className="" key={i}>
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
          return <div className={`rounded-full w-2 h-2 border border-white/90 ${i < num ? 'bg-white' : ''}`} key={i}></div>
        })}
      </div>
    )
  }