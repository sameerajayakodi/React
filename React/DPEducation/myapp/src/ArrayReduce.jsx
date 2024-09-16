const ArrayReduce = ({numberList})=>{

    const sum = numberList.reduce((total,num)=>(total+num),10);
    
    return(
        <div>
            <h1>Sum Of Numbers</h1>
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