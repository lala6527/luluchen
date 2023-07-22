export const Calculator2 = () => {

  return (
    <div className="flex justify-center">
      <div className="relative h-[911px] w-[480px] bg-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.08)] rounded-[20px]">
        <div className="h-[30px] flex justify-between">
          <img src="/images/Time.png" className="w-[33px] h-[15px] m-3 ml-[21px]" />
          <img src="/images/status icons.png" className="w-[61px] h-[14px]  m-4 mr-[14px]" />
        </div>
        <div className="flex justify-around">
          <div className="h-[48px] w-[104px] bg-[#F9F9F9] flex justify-around flex items-center rounded-[20px]">
            <img src="/images/sun icon.png" className="w-6 h-6 " />
            <img src="/images/moon icon.png" className="w-6 h-6 " />
          </div>
        </div>
        <div className="flex justify-end mt-[155px] mb-[40px] mr-[40px] text-4xl font-sans font-bold">
          0
        </div>
        <div className="absolute h-[607px] w-[480px] bg-[#F9F9F9] rounded-[20px] bottom-0 pt-10 px-[22px] pb-6 font-bold">
          <div className="grid grid-cols-4  gap-3 text-center  text-xl font-sans" >
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#7DD0C5]">AC</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#7DD0C5]">+/-</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#7DD0C5]">%</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#EB6B6D]">/</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">7</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">8</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">9</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#EB6B6D]">x</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">4</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">5</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">6</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#EB6B6D]">-</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">1</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">2</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">3</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#EB6B6D]">+</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] col-span-2">0</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px]">.</div>
            <div className="p-9 bg-[#F7F7F7] rounded-[20px] text-[#EB6B6D]">=</div>
          </div>
        </div>
      </div>
    </div>


  );
};