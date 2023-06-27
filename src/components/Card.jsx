import card_logo from '../assets/card_logo.svg';


const Card = () => {
  return (
    <div className="flex flex-col flex-1 items-end drop-shadow-sm">
      <div className="items-start flex-col rounded-[10px] h-[358px] w-[609px] bg-opacity-20
      bg-gradient-to-tr from-purple-200/20 via-purple-400/20 to-purple-800/20">
        <div className="flex justify-between flex-col w-full h-full ">
          <div className="flex justify-between items-start">
            <div className="w-[225px] h-[150px] flex flex-col items-left pl-[46px] pt-[35px]">
              <img src={card_logo} alt="card_logo" />
              <div className='pt-[36px]'>
              <div className='w-[77px] h-[54px] bg-[#1E1E1E] pb-[-36px] rounded-[10px] bg-opacity-20'></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card