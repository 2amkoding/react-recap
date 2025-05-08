Click Events:
    React
        elements
            properties(props)
                onClick



        {items.length === 0 && <p className="p-4">No item found</p>}
        <ul>
          {items.map((item) => (
            <li
              className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
              key={item}
              onClick={()=> console.log("clicked")}
            >
              {item}
            </li>
          ))}
        </ul>
