

const FormField = ({placeholder, inputType, isTextArea, handleChange}) => {
  return (
    <div className="p-[15px]">
            <textarea required
                      onChange={handleChange}
                      type={inputType}
                      placeholder={placeholder}
                      rows={15}
                      className=" outline-none border-[1px] bg-transparent text-[20px] text-[#3B175C]
                    placeholder:text-[#CDC4DF] rounded-[10px] w-full h-full" />
    </div>
  )
}

export default FormField