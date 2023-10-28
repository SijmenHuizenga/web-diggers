const ArtObject = () => {
  return (
    <div className="grid h-screen place-items-center">
      <h2 className='text-2xl font-bold'>Tile</h2>
      <div className="image-container">
        <img
          className="width-full z-50"
          src="https://source.unsplash.com/random/500x500"
          alt="placeholder"
        />
      </div>
      <div className="description">
        <p className="">
          Old Basel, nestled on the banks of the Rhine River in Switzerland, is
          a captivating blend of medieval charm and rich history. Its cobbled
          streets wind through a tapestry of well-preserved buildings, some
          dating back centuries. The iconic Basel Minster, a Gothic masterpiece,
          towers above the city, while quaint squares and cozy cafes invite
          leisurely exploration. Old Basel's time-honored architecture and
          quaint alleys transport visitors to a bygone era, offering a glimpse
          into the city's storied past and a true sense of its enduring
          character and allure.
        </p>
      </div>
    </div>
  );
};

export default ArtObject;
