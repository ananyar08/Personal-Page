export default function App() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-between h-16 px-6 w-full ">
        <h1 className="font-rubik text-2xl font-bold leading-7 tracking-tight">
          JISHNUE BOYAPATI
        </h1>

        {/* Links Section */}
        <div className="flex gap-10">
          <a href="#projects" className="font-inter text-[15px] font-medium leading-[26px] tracking-[0.1em]">
            Projects
          </a>
          <a href="#achievements" className="font-inter text-[15px] font-medium leading-[26px] tracking-[0.1em]">
            Achievements
          </a>
          <a href="#blogs" className="font-inter text-[15px] font-medium leading-[26px] tracking-[0.1em]">
            Blogs
          </a>
        </div>

        {/* Connect Button */}
        <button className="w-[217.96px] h-[50px] rounded-tl-[11px] border border-black text-black font-inter text-[17px] font-bold leading-[20.57px] tracking-[-0.5px] text-center">
          Connect
        </button>
      </div>

      <div className="h-[20px] w-[1352px] mt-[50px] ml-[124px] mb-8 opacity-0">
        {/* Adjusted the gap to reduce spacing */}
      </div>
      {/* Who Am I Section */}
      <div className="px-[50px] py-[5px] bg-gray-50">
        <h2 className="text-[80px] font-inter font-normal leading-[96.82px] text-left mb-8 opacity-100 mt-10">
          Who Am I?
        </h2>

        {/* Content Section */}
        <div className="flex items-center gap-8 h-[500px]">
          {/* Image Section */}
          <div className="w-[600px] h-[403px] flex-shrink-0 opacity-100">
            <img
              src="/Rectangle 1.png" // Directly referencing from the public folder
              alt="Description"
              className="w-full h-full object-cover rounded-tl-[48px] rounded-br-[0px]"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex-1">
          <p
  className="text-[34px] font-inter leading-[47.6px] tracking-[0.02em] text-left  decoration-skip-ink ml-10 mt-20">
  <span className="font-bold">Jishnue Boyapati</span> - Innovator | <br />
  Machine Learning Enthusiast | TEDx <br />
  Speaker
</p>
<p
  className="text-[18px] font-inter leading-[28px] text-gray-700 mt-4 w-[656px] h-[191px] opacity-100 ml-10 mr-10 mt-10"
>
  At just 16, I am driven by a passion for advanced mathematics and 
  artificial intelligence, striving to solve real-world problems 
  through innovation and technology. Explore my journey and discover 
  the impact of youthful curiosity combined with serious academic 
  pursuit.
</p>
</div>
</div>

<div className="w-[1074px] h-[335px] mt-[80px] ml-[263px] gap-[66px] opacity-100">
  {/* New Section Header */}
  <h2 className="text-[32px] font-inter font-extrabold leading-[40px] tracking-[0.01em] text-center text-black underline decoration-skip-ink">
    {/* Your section title goes here */}
  </h2>

  {/* New Section with Columns */}
  <div className="mt-[40px]"> {/* Margin top to create spacing */}
    <div className="w-full h-auto grid grid-cols-3 gap-[40px] opacity-100">
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
        <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-black ">
        Proficient in Django, MySQL, and familiar with API development and integration.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="w-full h-auto mt-[50px] ml-[50px] opacity-100">
  {/* New Section with Left and Right Columns */}
  <div className="flex gap-[40px]">
    {/* Left Column (About Heading) */}
    <div className="w-1/2 text-left">
      <h3 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black">
        About
      </h3>
    </div>

    {/* Right Column (Info) */}
    <div className="w-1/2 text-left">
      <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left  bg-[rgba(129, 129, 130, 1)] px-6 py-4 mt-4">
      Hello! I’m Jishnue, a high school student with a profound interest in machine learning and computer vision. My journey began in elementary school, where I was captivated by the complexities of mathematics and programming. Since then, I've advanced through rigorous academic challenges, including a machine learning certification from Stanford University where I scored 97%, and speaking at a TEDx event. My goal is to leverage technology to create solutions that make a meaningful difference in people's lives.
      </p>
    </div>
  </div>
</div>



<div className="w-full mt-[50px] ml-[50px] opacity-100">
  {/* Projects Section */}
  <div className="text-left">
    {/* Projects Heading */}
    <h3 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black">
      Projects
    </h3>

    <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black bg-[rgba(129, 129, 130, 1)] px-6 py-4 mt-4">
  Explore my selected projects, showcasing my dedication to innovative
  <span className="block">and heartfelt design.</span>
</p>



    {/* Images Section */}
    <div className="flex gap-[40px] mt-[50px]">
      {/* Image 1 */}
      <div className="w-[671px] h-[411px]">
        <img
          src="/Rectangle 2.png" // Ensure this is the correct path
          alt="Project 1"
          className="w-full h-full object-cover rounded-[48px_0px_0px_0px]"
        />
        <p className="text-[28px] font-inter font-medium leading-[39.2px] tracking-[0.02em] text-left text-black ml-20 mt-3">
  Kids SeedBank Mobile Application
</p>
<p className="text-[18px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black ml-20">
A mobile app designed to educate children about agriculture and 
<span class = "block">help farmers by identifying and counting seeds using AI</span>
</p>
<div className="mt-4">
  <img
    src="/Frame 9 (1).png" // Replace with your image URL
    alt="Project Image"
    className="w-[178px] h-[25px] opacity-100 ml-20"
  />
</div>
      </div>

      {/* Image 2 */}
      <div className="w-[671px] h-[411px]">
        <img
          src="/Rectangle 2 (1).png" // Ensure this is the correct path
          alt="Project 2"
          className="w-full h-full object-cover rounded-[48px_0px_0px_0px]"
        />
        <p className="text-[28px] font-inter font-medium leading-[39.2px] tracking-[0.02em] text-left text-black ml-20 mt-3"> 
        Pneumonia Identification using ML
        </p>
        <p className="text-[18px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black ml-20">
         Developed a highly accurate deep learning model to detect 
          <span class = "block">pneumonia from chest X-ray images</span>
</p>
<div className="mt-4">
  <img
    src="/Frame 9 (1).png" // Replace with your image URL
    alt="Project Image"
    className="w-[178px] h-[25px] opacity-100 ml-20"
  />
</div>
      </div>
    </div>
  </div>
</div>

<div className="flex items-start">
  {/* Timeline Heading on the Left */}
  <div className="w-[250px]">
    <h3 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black mt-80">
      Timeline
    </h3>
  </div>

  {/* Right Section with Timeline Content */}
  <div className="flex flex-col ml-80 mt-80">
    <div className="relative flex items-start">
      {/* Line and Dots Section */}
      <div className="flex flex-col items-center">
        {/* Vertical Line */}
        <div className="w-[1px] h-full bg-[#e1e2e1] "></div>
        {/* Green Dots */}
        <ul className="list-none space-y-6">
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-[#6FB74D] mr-4 mt-[10px]"></span>
            <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black">
              <span className="font-bold text-[#161615]">2016</span> Winner at Pi Day Princeton Mathematics Competition
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-[#6FB74D] mr-4 mt-[10px]"></span>
            <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black">
              <span className="font-bold text-[#161615]">2018</span> Participated in multiple mathematical olympiads, achieving top merits.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-[#6FB74D] mr-4 mt-[10px]"></span>
            <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black">
              <span className="font-bold text-[#161615]">2019</span> TEDx Speaker
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-[#6FB74D] mr-4 mt-[10px]"></span>
            <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black">
              <span className="font-bold text-[#161615]">2021</span> Completed a Stanford University course in Machine Learning with a 97% score.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-[14px] h-[14px] rounded-full bg-[#6FB74D] mr-4 mt-[10px]"></span>
            <p className="text-[20px] font-inter font-normal leading-[40px] tracking-[0.01em] text-left text-black">
              <span className="font-bold text-[#161615]">2022</span> Internship at Digital On Us, developing applications for Johnson and Johnson.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



<div className="flex flex-col">
  {/* School Section */}
  <div className="flex items-start mt-[20px]">
    {/* School Heading on the Left */}
    <div className="w-[250px]">
      <h3 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black">
        Achivements
      </h3>
    </div>

    {/* Right Section with School Info */}
    <div className="ml-80">
  <div className="flex flex-col items-start mt-[20px]">
    <p
      className="text-[18px] font-inter font-normal leading-[40px] tracking-[1px] text-left mb-5"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      TEDx Speaker 2019 - <span class="block">Discussed <span className="font-semibold">The Impact of AI on Modern Education</span> in front of an</
    span> audience of over 300 educators and students.
    </p>

    <p
      className="text-[18px] font-inter font-normal leading-[40px] tracking-[1px] text-left mb-5"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      <span className="font-semibold">Duke University Talent Identification Program -</span> <span class="block">Achieved top merit in the 24th annual competition.</span>
    </p>

    <p
      className="text-[18px] font-inter font-normal leading-[40px] tracking-[1px] text-left mb-5"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      Machine Learning Certification by <span className="font-semibold">Stanford University</span> - <span class="block">Scored <span className="font-semibold">97%</span>, mastering complex algorithms and data processing.</span>
    </p>

    <p
      className="text-[18px] font-inter font-normal leading-[40px] tracking-[1px] text-left"
      style={{
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
      }}
    >
      Patents -Inventor of the<span className="font-semibold"> "Autonomous Flying Spacenet Car," </span> a patent that <span class="block">introduces innovative solutions in transportation.</span>
    </p>
  </div>
</div>
</div>
</div>


<div className="flex justify-between items-start mt-10">
  {/* Left Side Heading */}
  <div className="w-1/3">
    <h1 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black mt-20">Blogs</h1>
  </div>

  {/* Right Side Images with Info */}
 <div className="w-2/3 grid grid-cols-2 gap-4 mt-20">
  {/* Image 1 */}
  <div className="flex flex-col items-center space-y-4">
    <img
      src="/Frame 21.png"
      alt="Blog 1"
      className="w-[300px] h-[300px] object-cover"
    />
    <div>
      <p className="text-[16px] font-normal text-gray-600">
      Exploring AI’s Potential <span class="block">in Environmental </span>Conservation
      </p>
    </div>
  </div>

  {/* Image 2 */}
  <div className="flex flex-col items-center space-y-4">
    <img
      src="/Frame 22.png"
      alt="Blog 2"
      className="w-[300px] h-[300px] object-cover"
    />
    <div>
     
      <p className="text-[16px] font-normal text-gray-600">
      My Experience at TEDx: <span class="block">Sharing Ideas with </span>Future Innovators
      </p>
    </div>
  </div>
</div>
</div>

<div className="flex justify-between items-center">
  {/* Left Section - Heading "Skills" */}
  <div className="w-1/3">
    <h2 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black">
      Skills
    </h2>
  </div>

  {/* Right Section - Image */}
  <div className="w-2/3 mt-40">
    <img
      src="/Frame 9.png"  // replace with your image path
      alt="Skills Image"
      className="mt-30 object-cover"
    />
  </div>
</div>


<div className="flex justify-between items-center">
  {/* Left Section - Heading "Contact" */}
  <div className="w-1/3 mt-40">
    <h2 className="text-[56px] font-inter font-normal leading-[67.77px] text-left text-black">
      Contact
    </h2>
  </div>

  {/* Right Section - Information */}
  <div className="w-2/3 mt-40  ml-60">
    <p className="font-inter text-[18px]  leading-[40px] tracking-[1px] text-left" 
   style={{
     textUnderlinePosition: "from-font",
     textDecorationSkipInk: "none"
   }}>
    <span class= "block font-bold">Let’s Connect! </span>
    Whether you’re a fellow student, educator, or someone interested in <span class= "block">technology and innovation, I’m always open to discussing new ideas and </span>opportunities. Please use the form below to get in touch!</p>
    <p className="font-inter text-[18px] font-[500] leading-[40px] tracking-[1px] text-left flex items-cente mt-8"
   style={{
     textUnderlinePosition: "from-font",
     textDecorationSkipInk: "none",
   }}>
  <span className="w-[8px] h-[8px] bg-green-500 rounded-full mr-2 mt-4"></span>
  Available for work
</p>
<img 
  src="/Frame 28.png" 
  alt="Your Image" 
  className="w-[258px] h-[48px] gap-[22px] mt-9"
/>

  </div>
</div>


</div>
</div>
  );
}

