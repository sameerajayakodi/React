const ArrayFind = ({nameList,numberList}) => {
    const max = numberList.find((num)=>(num>6));
    const name = nameList.find((name)=>(name.includes("r")));
    return(
        <div>
            <h1>Array First Number grater than 5 Find</h1>
            <table border={1} cellPadding={5}>
                <tr >
                    {
                        numberList.map((name,index)=>{
                            return(
                                <td bgcolor = {index === 1 ? "blue":""} key={index}>{name}</td>
                            )
                        })
                    }
                </tr>
            </table>
            <hr />
            {max}

            <h1>Array name include letter - r </h1>
            <table border={1} cellPadding={5}>
                <tr >
                    {
                        nameList.map((name,index)=>{
                            return(
                                <td key={index}>{name}</td>
                            )
                        })
                    }
                </tr>
            </table>
            <hr />
            {name}
        </div>
    )
}


export default ArrayFind;