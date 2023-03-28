const Cards = () => {
  return (
    <div className=" h-fit w-96 shadow-md p-3 rounded-lg mx-auto my-4 overflow-hidden text-gray-900 ">
      <div className="text-xs rounded-md flex items-center justify-between font-medium">
        <span>Post: 28/03/2023</span>
        <div>
          <span className="bg-gray-200 rounded-full px-2 py-1 mr-5">
            Atul Aryan
          </span>
          <span className="bg-gray-200 rounded-full px-2 py-1">Marketing</span>
        </div>
      </div>
      <div className="w-full h-fit px-1 pt-3 text-base border-b-8 border-transparent overflow-hidden break-all">
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essenti
        </p>
      </div>
    </div>
  );
};

export default Cards;
