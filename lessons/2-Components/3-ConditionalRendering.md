JSX renders: html elements, react components, or {}

{items.length === 0 ? <p>No item} found</p> : null}
or
{items.length === 0 && <p>No item} found</p>}

function: to render conditionally
    
    const getMessage = () => {
        return items.length === 0 ? <p>No item} found</p> : null
    }
    ...
    ...

    {getMessage(1)}