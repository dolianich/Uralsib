
import logo from '../assets/logo.svg'
import image_top from '../assets/image_top.png'

const Welcome = () => {
  return (
    <div className='flex flex-row px-[200px] py-[53px]'>
      <div className='flex w-full justify-start flex-col mt-[11px]'>
        <div className='w-[217px] h-[58px] lex-col justify-center items-center gap-2.5 inline-flex'>
          <img src={logo} alt="logo" />
        </div>
        <h1 className='flex flex-1 flex-col justify-between font-bold text-[70px] leading-[85px] text-[#3B175C]'>
          Ваша карта - <br/>Ваш дизайн
        </h1>
        <p className='text-left mt-[11px] text-[24px] font-light leading-[29px] text-[#3B175C]'>
          Создайте свой уникальный дизайн карты <br/>с помощью Искусственного Интелекта
        </p>
      </div>
      <div className='flex flex-col flex-1 justify-start w-full'>
        <div className='justify-end items-start flex-col h-[358px] w-[609px]'>
          <img src={image_top} alt="image_top" />
        </div>
      </div>
    </div>
  )
}

export default Welcome