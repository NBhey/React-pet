
export default function Parent({num, string}: {num:number, string:string}){
    num++
    return (
        <>
            <br />
            <h1>I'm a Parent</h1>
            <p>Я загадал число {num}</p>
            <p>и передал слово: {string}</p>
            <br />
            <Children num={num} string={string}/>
        </>
    )
}

function Children({num, string}: {num:number, string:string}){
    num = num - 6
    string = "Hello " + string + '!'
    return(
        <div>
            <h1>I'm a children</h1>
            <p>number: {num}</p>
            <p>string: {string}</p>
            <button onClick={()=>{num++ }}> number up</button>
        </div>
    )
}