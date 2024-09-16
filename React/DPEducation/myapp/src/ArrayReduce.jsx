const ArrayReduce = ({numberList})=>{

    const sum = numberList.reduce((total,num)=>(total+num));
    
    return(
        <div>
            <h1>Array Filter</h1>
            <ul>
                {
                    numberList.map((number,index)=>(<li key={index}>{number}</li>))
                }
                <hr />
                <p>{sum}</p>
            </ul>
        </div>
    )
}

export default ArrayReduce;