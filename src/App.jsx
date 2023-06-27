import {Welcome, Input, Card, Button1, Button2} from './components';

function App() {

  return (
    <div className='min-h-screen'>
      <div>
        <Welcome/>
        <div className='bg-[#3B175C]'>
          <div className='flex flex-row px-[200px] py-[60px] relative'>
            <div >
            <Input />
            </div>
          <div className='flex flex-col justify-start w-full'>
             <Card/>
             <div className='flex flex-row justify-center'>
             <Button1 />
             <Button2/>
             </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
