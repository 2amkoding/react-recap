//PascalCasing: jsx best practice
function Message()  {
    // JSX
    // dynamic content
    const name = 'June';
    if(name)
        return <h1 className="text-3xl font-bold underline">Hello {name}</h1>;
    return  <h1>Hello  World</h1>;
}

export default Message;