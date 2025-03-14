import { assets } from "../assets/assets";
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <div className = "text-xl sm:text-2xl  mb-2 ">
        About <span className = "underline underline-offset-4 decoration-1 under font-light">Our Brand</span>
        <p className = "text-gray-500 max-w-80 text-center mb-8">Passionate About Properties, Dedicated to your Vision</p>
        <div className = "flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <img src={assets.brand_img} alt="" className = "w-full sm:w-1/2 max-w-lg " />
            <div className = "flex flex-col items-center md:items-start mt-10 text-gray-600 ">
                <div className = "grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28" >
                    <div>
                        <p className = "text-3xl font-medium text-gray-800">10+

                        </p>
                        <p className = 'text-xl'>Years of Excellence</p>
                    </div> <div>
                        <p className = "text-4xl font-medium text-gray-800">12+

                        </p>
                        <p className = 'text-xl'>Project Completed</p>
                    </div>
                    <div>
                        <p className = "text-4xl font-medium text-gray-800">20+

                        </p>
                        <p className = 'text-xl'>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className = "text-3xl font-medium text-gray-800">25+

                        </p>
                        <p className = 'text-xl'>Ongoing Projects</p>
                    </div>

                </div>
                <p className = "my-10 max-w-lg text-xl">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat ut laudantium sint qui officiis quae omnis consequatur fuga, sequi assumenda provident, eius labore tempora repellendus, harum possimus reprehenderit corporis.
                </p>
                <button className = "bg-blue-600 text-white px-6 py-2 rounded">Learn More</button>

            </div>

        </div>
      </div>
    </div>
  );
};
export default About;
