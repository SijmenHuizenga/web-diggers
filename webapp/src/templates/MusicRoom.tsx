
const MusicRoom = () => {
  return (
    <div className="h-full -maxh-full min-w-full border-black">
      <img src="" alt="background" className="absolute left-0 top-0" />
      <div className='grid place-items-center h-1/2 mt-8'>
        <h2 className='mb-4 text-3xl  '>Title</h2>
        <div className="image-container">
          <img
            className="width-full"
            src="https://source.unsplash.com/random/400x400"
            alt="placeholder"
          />
        </div>
        <div className="description w-2/5">
          <p className='hidden'>
            Old Basel, nestled on the banks of the Rhine River in Switzerland, is a captivating blend of medieval charm and rich history. Its cobbled streets wind through a tapestry of well-preserved buildings, some dating back centuries. The iconic Basel Minster, a Gothic masterpiece, towers above the city, while quaint squares and cozy cafes invite leisurely exploration. Old Basel's time-honored architecture and quaint alleys transport visitors to a bygone era, offering a glimpse into the city's storied past and a true sense of its enduring character and allure.
          </p>
        </div>
      </div>
      <img className='absolute bottom-0' src="https://source.unsplash.com/random/1600x300" alt="seperator" />
    </div>
  );
};

export default MusicRoom;
