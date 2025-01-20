export default function App() {
  return (
    <div>
      {/* Header Section */}
      <div>
  {/* Header Section */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between h-auto sm:h-16 px-4 sm:px-6 w-full">
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
    <h1 className="font-rubik text-2xl sm:text-3xl font-bold leading-7 tracking-tight text-center sm:text-left ">
      JISHNUE BOYAPATI
    </h1>
  
    {/* Links Section */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4 sm:mt-0">
      <a
        href="#projects"
        className="font-inter text-sm sm:text-[15px] font-medium leading-5 sm:leading-[26px] tracking-[0.1em] text-center"
      >
        Projects 
      </a>
      <a
        href="#achievements"
        className="font-inter text-sm sm:text-[15px] font-medium leading-5 sm:leading-[26px] tracking-[0.1em] text-center "
      >
        Achievements
      </a>
      <a
        href="#blogs"
        className="font-inter text-sm sm:text-[15px] font-medium leading-5 sm:leading-[26px] tracking-[0.1em] text-center"
      >
        Blogs
      </a>
    </div>

    {/* Connect Button */}
    <button className="w-full sm:w-[217.96px] h-[40px] sm:h-[50px] rounded-lg sm:rounded-[11px] border border-black text-black font-inter text-sm sm:text-[17px] font-bold leading-5 sm:leading-[20.57px] tracking-tight sm:tracking-[-0.5px] text-center mt-4 sm:mt-0">
      Connect
    </button>
  </div>
</div>


<div className="mt-[50px] px-4 sm:px-10 lg:px-[124px]">
  {/* Who Am I Section */}
  <div className="py-5 ">
    <h2 className="text-4xl sm:text-5xl lg:text-[80px] font-inter font-normal leading-tight sm:leading-[70px] lg:leading-[96.82px] text-left mb-6 lg:mb-8 mt-6 lg:mt-10">
      Who Am I?
    </h2>

    {/* Content Section */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-[600px] h-auto lg:h-[403px] flex-shrink-0">
        <img
          src="/Rectangle 1.png" // Directly referencing from the public folder
          alt="Description"
          className="w-full h-full object-cover rounded-tl-[24px] lg:rounded-tl-[48px] rounded-br-[0px]"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex-1">
        <p className="text-xl sm:text-2xl lg:text-[34px] font-inter leading-relaxed sm:leading-[40px] lg:leading-[47.6px] tracking-[0.02em] text-left lg:mt-20 ">
          <span className="font-bold">Jishnue Boyapati</span> - Innovator | <br />
          Machine Learning Enthusiast | TEDx <br />
          Speaker
        </p>
        <p className="text-sm sm:text-base lg:text-[18px] font-inter leading-6 sm:leading-[26px] lg:leading-[28px] text-gray-700 mt-4 lg:mt-6 lg:w-[90%]">
          At just 16, I am driven by a passion for advanced mathematics and
          artificial intelligence, striving to solve real-world problems through innovation and
          technology. Explore my journey and discover the impact of youthful curiosity combined with
          serious academic pursuit.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="w-full h-auto mt-[80px] px-4 sm:px-10 lg:px-[263px] gap-[66px] opacity-100">
  {/* New Section Header */}
  <h2 className="text-[32px] font-inter font-extrabold leading-[40px] tracking-[0.01em] text-center text-black underline decoration-skip-ink">
    {/* Your section title goes here */}
  </h2>

  {/* New Section with Columns */}
  <div className="mt-[40px]"> {/* Margin top to create spacing */}
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] opacity-100">
      {/* Column 1 */}
      <div className="flex-1 text-center">
        <h3 className="text-[32px] font-inter font-bold leading-[40px] tracking-[0.01em] text-black mb-2">
          Machine Learning with Python
        </h3>
        <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-black">
          Proficient in neural networks, computer vision, and natural language processing
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex-1 text-center">
        <h3 className="text-[32px] font-inter font-bold leading-[40px] tracking-[0.01em] text-black mb-2">
          JavaScript & Web Development
        </h3>
        <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-black">
          Experienced in backend development using Node.js and frontend technologies like HTML5 and CSS3
        </p>
      </div>

      {/* Column 3 */}
      <div className="flex-1 text-center">
        <h3 className="text-[32px] font-inter font-bold leading-[40px] tracking-[0.01em] text-black mb-2">
          Tools and Technologies
        </h3>
        <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-black">
          Proficient in Django, MySQL, and familiar with API development and integration.
        </p>
      </div>
    </div>
  </div>
</div>



<div className="w-full max-w-[1352px] h-auto lg:h-[319px] mx-auto px-4 sm:px-10 lg:px-16">
  {/* About Section */}
  <div>
    {/* Left Column (About Heading) */}
    <div className="mt-10 lg:mt-20">
      <h3 className="text-3xl sm:text-4xl lg:text-[56px] font-inter font-normal leading-tight lg:leading-[67.77px] text-red text-left">
        About
      </h3>
    </div>
    <div className="w-full mt-5 lg:mt-10">
      {/* Container for right-aligned text */}
      <div className="flex justify-end">
        <div className="w-full max-w-[670px] h-auto lg:h-[350px] opacity-100 text-right overflow-hidden">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-normal leading-relaxed sm:leading-6 md:leading-7 lg:leading-8 tracking-[0.01em] text-black text-justify">
            Hello! I’m Jishnue, a high school student with a profound interest
            in machine learning and computer vision. My journey began in
            elementary school, where I was captivated by the complexities of
            mathematics and programming. Since then, I've advanced through
            rigorous academic challenges, including a machine learning
            certification from Stanford University where I scored 97%, and
            speaking at a TEDx event. My goal is to leverage technology to
            create solutions that make a meaningful difference in people's
            lives.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>






<div className="w-full mt-[50px] px-4 sm:px-8 lg:px-16">
  {/* Projects Section */}
  <div className="text-left">
    {/* Projects Heading */}
    <h3 className="text-3xl sm:text-4xl lg:text-[56px] font-inter font-normal leading-tight lg:leading-[67.77px] text-black">
      Projects
    </h3>

    <p className="text-base sm:text-lg lg:text-[20px] font-inter font-normal leading-relaxed lg:leading-[40px] tracking-[0.01em] text-black  px-6 py-4 mt-4 rounded-md">
      Explore my selected projects, showcasing my dedication to innovative
      <span className="block">and heartfelt design.</span>
    </p>

    {/* Images Section */}
    <div className="flex flex-col lg:flex-row gap-6 mt-8">
      {/* Image 1 */}
      <div className="flex-1">
        <img
          src="/Rectangle 2.png"
          alt="Project 1"
          className="w-full h-auto object-cover rounded-tl-[48px] rounded-br-[48px]"
        />
        <p className="text-lg sm:text-xl lg:text-[28px] font-inter font-medium leading-tight lg:leading-[39.2px] text-black mt-3">
          Kids SeedBank Mobile Application
        </p>
        <p className="text-sm sm:text-base lg:text-[18px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black mt-2">
          A mobile app designed to educate children about agriculture and
          <span className="block">help farmers by identifying and counting seeds using AI.</span>
        </p>
        <div className="mt-4">
          <img
            src="/Frame 9 (1).png"
            alt="Project Image"
            className="w-[178px] h-[25px]"
          />
        </div>
      </div>

      {/* Image 2 */}
      <div className="flex-1">
        <img
          src="/Rectangle 2 (1).png"
          alt="Project 2"
          className="w-full h-auto object-cover rounded-tl-[48px] rounded-br-[48px]"
        />
        <p className="text-lg sm:text-xl lg:text-[28px] font-inter font-medium leading-tight lg:leading-[39.2px] text-black mt-3">
          Pneumonia Identification using ML
        </p>
        <p className="text-sm sm:text-base lg:text-[18px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black mt-2">
          Developed a highly accurate deep learning model to detect
          <span className="block">pneumonia from chest X-ray images.</span>
        </p>
        <div className="mt-4">
          <img
            src="/Frame 9 (1).png"
            alt="Project Image"
            className="w-[178px] h-[25px]"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row items-start mt-20 px-4 sm:px-8 lg:px-16">
  {/* Timeline Heading on the Left */}
  <div className="lg:w-[250px] mb-10 lg:mb-0">
    <h3 className="text-3xl sm:text-4xl lg:text-[56px] font-inter font-normal leading-tight lg:leading-[67.77px] text-black">
      Timeline
    </h3>
  </div>

  {/* Right Section with Timeline Content */}
  <div className="flex flex-col flex-1 lg:ml-80">
    <div className="relative flex items-start">
      {/* Line and Dots Section */}
      <div className="flex flex-col items-center">
        {/* Vertical Line */}
        <div className="w-[1px] h-full bg-gray-300"></div>
        {/* Green Dots */}
        <ul className="list-none space-y-6">
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-green-500 mr-4 mt-[10px]"></span>
            <p className="text-sm sm:text-base lg:text-[20px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black">
              <span className="font-bold text-gray-900">2016</span> Winner at Pi Day Princeton Mathematics Competition
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-green-500 mr-4 mt-[10px]"></span>
            <p className="text-sm sm:text-base lg:text-[20px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black">
              <span className="font-bold text-gray-900">2018</span> Participated in multiple mathematical olympiads, achieving top merits.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-green-500 mr-4 mt-[10px]"></span>
            <p className="text-sm sm:text-base lg:text-[20px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black">
              <span className="font-bold text-gray-900">2019</span> TEDx Speaker
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-green-500 mr-4 mt-[10px]"></span>
            <p className="text-sm sm:text-base lg:text-[20px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black">
              <span className="font-bold text-gray-900">2021</span> Completed a Stanford University course in Machine Learning with a 97% score.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-green-500 mr-4 mt-[10px]"></span>
            <p className="text-sm sm:text-base lg:text-[20px] font-inter font-normal leading-relaxed lg:leading-[40px] text-black">
              <span className="font-bold text-gray-900">2022</span> Internship at Digital On Us, developing applications for Johnson and Johnson.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>






<div className="flex flex-col px-4 sm:px-8 lg:px-16">
  {/* Achievements Section */}
  <div className="flex flex-col lg:flex-row lg:items-start mt-5 lg:mt-10">
    {/* Achievements Heading */}
    <div className="lg:w-[250px] mb-4 lg:mb-0">
      <h3 className="text-[32px] sm:text-[40px] lg:text-[56px] font-inter font-normal leading-[1.2] text-left text-black">
        Achievements
      </h3>
    </div>

    {/* Achievements Details */}
    <div className="lg:ml-80">
      <div className="flex flex-col items-start">
        {/* TEDx Speaker */}
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[1.5] tracking-wide text-left mb-5 ">
          TEDx Speaker 2019 - 
          <span className="block">
            Discussed <span className="font-semibold ">The Impact of AI on Modern Education</span> in front of an </span>audience of over 300 educators and students.
          
        </p>

        {/* Duke Program */}
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[1.5] tracking-wide text-left mb-5">
          <span className="font-semibold">Duke University Talent Identification Program -</span> 
          <span className="block">Achieved top merit in the 24th annual competition.</span>
        </p>

        {/* Stanford Certification */}
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[1.5] tracking-wide text-left mb-5">
          Machine Learning Certification by 
          <span className="font-semibold"> Stanford University</span> - 
          <span className="block">Scored <span className="font-semibold">97%</span>, mastering complex algorithms and data processing.</span>
        </p>

        {/* Patents */}
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[1.5] tracking-wide text-left">
          Patents - 
          <span className="block">Inventor of the
          <span className="font-semibold"> "Autonomous Flying Spacenet Car," </span> 
          </span>patent that introduces innovative solutions in transportation.
        </p>
      </div>
    </div>
  </div>
</div>




<div className="flex flex-col lg:flex-row justify-between items-start mt-10 px-4 sm:px-8 lg:px-16">
  {/* Left Side Heading */}
  <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-inter font-normal leading-[1.2] text-left text-black">
      Blogs
    </h1>
  </div>

  {/* Right Side Images with Info */}
  <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 lg:mt-20">
    {/* Image 1 */}
    <div className="flex flex-col items-center space-y-4">
      <img
        src="/Frame 21.png"
        alt="Blog 1"
        className="w-[300px] h-[300px] object-cover rounded-lg"
      />
      <div>
        <p className="text-[14px] sm:text-[16px] font-normal text-gray-600 text-center">
          Exploring AI’s Potential <span className="block">in Environmental</span> Conservation
        </p>
      </div>
    </div>

    {/* Image 2 */}
    <div className="flex flex-col items-center space-y-4">
      <img
        src="/Frame 22.png"
        alt="Blog 2"
        className="w-[300px] h-[300px] object-cover rounded-lg"
      />
      <div>
        <p className="text-[14px] sm:text-[16px] font-normal text-gray-600 text-center">
          My Experience at TEDx: <span className="block">Sharing Ideas with</span> Future Innovators
        </p>
      </div>
    </div>
  </div>
</div>


<div className="flex flex-col lg:flex-row justify-between items-start mt-10 px-4 sm:px-8 lg:px-16">
  {/* Left Section - Heading "Skills" */}
  <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-inter font-normal leading-[1.2] text-left text-black">
      Skills
    </h2>
  </div>

  {/* Right Section - Image */}
  <div className="w-full lg:w-2/3 mt-10 lg:mt-40">
    <img
      src="/Frame 9.png" // replace with your image path
      alt="Skills Image"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>
</div>



<div className="flex flex-col lg:flex-row justify-between items-center mt-10 px-4 sm:px-8 lg:px-16">
  {/* Left Section - Heading "Contact" */}
  <div className="w-full lg:w-1/3 mt-10 lg:mt-40">
    <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-inter font-normal leading-[1.2] text-left text-black">
      Contact
    </h2>
  </div>

  {/* Right Section - Information */}
  <div className="w-full lg:w-2/3 mt-10 lg:mt-40 lg:ml-16">
    <p
      className="font-inter text-[16px] sm:text-[18px] lg:text-[18px] leading-[1.5] tracking-[1px] text-left"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      <span className="block font-bold">Let’s Connect!</span>
      Whether you’re a fellow student, educator, or someone interested in{" "}
      <span className="block">technology and innovation, I’m always open to discussing new ideas and</span> opportunities.
      Please use the form below to get in touch!
    </p>
    <p
      className="font-inter text-[16px] sm:text-[18px] lg:text-[18px] font-[500] leading-[1.5] tracking-[1px] text-left flex items-center mt-6"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      <span className="w-[8px] h-[8px] bg-green-500 rounded-full mr-2 mt-4"></span>
      Available for work
    </p>
    <img
      src="/Frame 28.png"
      alt="Your Image"
      className="w-[220px] sm:w-[258px] h-auto gap-[22px] mt-9"
    />
  </div>
</div>



</div>
  );
}

