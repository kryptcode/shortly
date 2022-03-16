export function Stats() {
  return (
    <div className="bg-gray-100 py-24">
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-14">
                <h3 className="text-4xl font-bold mb-4">Advance Statistics</h3>
                <p className="text-gray-400 w-[50%] mx-auto">
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                {/* Brand Recognition */}
                <div className="bg-white relative pt-12 p-4 rounded-lg shadow-md">
                    <div className="bg-[#3b3054] w-14 p-3 rounded-full absolute -top-7 left-5 ">
                        <img src="./images/icon-brand-recognition.svg" alt="brand recognition" />
                    </div>
                    <h5 className="text-xl font-semibold mb-2">
                        Brand Recognition
                    </h5>
                    <p className="text-gray-400">
                        Boost your brand recognition with each click. Generic links do not mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>

                {/* detailed Records */}
                <div className="bg-white relative pt-12 p-4 rounded-lg shadow-md mt-5 sm:mt-8">
                    <div className="bg-[#3b3054] w-14 p-3 rounded-full absolute -top-7 left-5">
                        <img src="./images/icon-detailed-records.svg" alt="detailed-records" />
                    </div>
                    <h5 className="text-xl font-semibold mb-2">
                        Detailed Records
                    </h5>
                    <p className="text-gray-400">
                        Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                    </p>
                </div>

                {/* Fully Customizable */}
                <div className="bg-white relative pt-12 p-4 rounded-lg shadow-md mt-5 sm:mt-16">
                    <div className="bg-[#3b3054] w-14 p-3 rounded-full absolute -top-7 left-5">
                        <img src="./images/icon-fully-customizable.svg" alt="fully-customizable" />
                    </div>
                    <h5 className="text-xl font-semibold mb-2">
                        Fully Customizable
                    </h5>
                    <p className="text-gray-400">
                        Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}