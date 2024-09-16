const ArrayFilter = ({nameList})=>{

    const filteredList = nameList.filter((name)=>(name.toLowerCase().startsWith('b')));
    return(
        <div>
            <h1>Array Filter</h1>
            <ul>
                {filteredList.map((name,index)=>{
                    return(
                        <li key={index}>{name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ArrayFilter;