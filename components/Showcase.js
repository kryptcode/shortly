export const Showcase = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row gap-10 justify-between items-center mb-20">
        <div>
            <h1 className="text-6xl font-bold mb-3 text-[#3b3054]">
                More than just shorter links
            </h1>
            <p className="text-gray-500 w-[80%] mb-6">
                Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
            <button className="py-2 px-4 bg-[#2acfcf] text-white rounded-2xl hover:opacity-80">
                Get Started
            </button>
        </div>

        <div>
            <img src="./images/illustration-working.svg" alt="" />
        </div>
    </div>
  )
}