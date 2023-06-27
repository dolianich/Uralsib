import FormField from "./FormField"


const Input = () => {

  const handleSubmit = () => {

  }

  return (
    <div className="h-[489px] w-[505px] bg-[#EBE5F7] flex justify-center items-center rounded-[10px]">
      <form onSubmit={handleSubmit} className="w-full">
        <FormField placeholder='Опишите дизайн вашей будущей карты'
                   isTextArea
                   handleChange={() =>{}}/>
      </form>
    </div>
  )
}

export default Input