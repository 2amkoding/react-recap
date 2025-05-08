import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Saint Louis",
    "Seoul",
  ];

 //items = [];

 
 // Hook
 const [selectedIndex, setSelectedIndex] = useState(-1);



  const sharedBlockStyles =
    "w-48 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white";

//Event Handler
//const handleClick = (event)=> console.log(event)
const handleClick = (index) => {
    setSelectedIndex(index);
};

  return (
    <>
      <div className={sharedBlockStyles}>
        <h1 className="px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          Title
        </h1>

        {items.length === 0 && <p className="p-4">No item found</p>}
        <ul>
          {items.map((item, index) => (
            <li
              //className="w-full px-4 py-2 border-b border-gray-200 //dark:border-gray-600 hover:bg-sky-700 active:bg-violet-700"
              key={item}
              //onClick={()=> console.log("clicked")}
              //onClick={()=> console.log(item)}
              //onClick={()=> console.log(item,index)}
              //onClick={(event)=> console.log(event)}
              //onClick={handleClick}
              onClick={() => handleClick(index)}
              className={`w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 cursor-pointer ${index === selectedIndex ? "bg-blue-500 text-white" : "hover:bg-sky-700"}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
