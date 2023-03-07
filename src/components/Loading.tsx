const Loading = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center items-center space-x-1">
        <div className="w-2 h-5 rounded-full bg-orange-400 animate-[up_1s_ease-in-out_infinite]"></div>
        <div className="w-2 h-5 rounded-full bg-orange-400 animate-[up_1s_ease-in-out_0.5s_infinite] "></div>
        <div className="w-2 h-5 rounded-full bg-orange-400 animate-[up_1s_ease-in-out_0.75s_infinite] "></div>
        <div className="w-2 h-5 rounded-full bg-orange-400 animate-[up_1s_ease-in-out_1s_infinite] "></div>
      </div>
    </div>
  );
};

export default Loading;
