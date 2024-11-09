// import './App.scss'
import '@index.css'
import '@styles/examplePage.scss'

import { useStateTogether } from 'react-together'

import { version } from '@package'
import { HeroLogo } from '@components'
import Card from '@components/Card'

export default function App() {
  const [count, set_count] = useStateTogether('counter_0', 0)

  return (
    <div>
      <div >
        <HeroLogo {...{ type: 'reacttogether' }} />
        {/* <HeroLogo {...{ type: 'react' }} />
        <HeroLogo {...{ type: 'vite' }} /> */}
      </div>
      <h1 className='text-5xl font-bold underline'>Hack Together - Integrity Ink</h1>
      <div className='flex'>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
      </div>
     
      <div className='version-num'>{version}</div>
    </div>
  )
}
