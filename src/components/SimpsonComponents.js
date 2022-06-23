function SimpsonComponents(props) {
    let {itemName, image, info, slogans} = props

        return (
        <div className={'block'}>

            <h2>{itemName}</h2>
            <img src={image}/>
            <p>{info}</p>
            <h4>Slogans</h4>
            <ul>
                {slogans.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}

            </ul>
        </div>
    )


}
export default SimpsonComponents;

