
function List(){

    const gerechten = [{id: 1,  name:"Gerecht1", prijs:10},
                        {id: 2, name:"Gerecht2", prijs:15},
                        {id: 3, name:"Gerecht3", prijs:20},
                        {id: 4, name:"Gerecht4", prijs:25},
                        {id: 5, name:"Gerecht5", prijs:30}];

    const listItems = gerechten.map(gerecht => <li key={gerecht.id}>{gerecht.name} : &nbsp; {gerecht.prijs}€</li>);
    
    return(<ul>{listItems}</ul>);
}

export default List;