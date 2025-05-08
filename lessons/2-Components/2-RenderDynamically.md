Problem: JSX does not have a FOR loop

Solution: Arrays.map

    const items = [
        'New York',
        'San Francisco',
        'Los Angeles',
        'Saint Louis',
        'Seoul'
    ];

    items.map(item => <li>{item}</li>)

note: in jsx, use {} to render dynamically

        {items.map(item => <li>{item}</li>)}
Problem: "each child in a list should have a unique "key" prop."
    In a real world w API calls, this would mean 'items.id'. 

for now: 
    {items.map(item => <li key={item}>{item}</li>)}

