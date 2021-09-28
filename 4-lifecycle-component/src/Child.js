
// this is example of the conditional rendring.

export default function Child(){
    let a = Math.random()>.5
    // // conditional return
    // if(a) return <h1>conditional return {a}</h1>;
    // return <h1> conditional return second</h1>;

    // inline if with && operator
    return(
        <div>
            <h1> inline if can partial elemnets conditional rendring</h1>
        {a && <h3>hello first</h3>}
        {!a && <h3>hello second</h3>}
        <h1> inline if else condition</h1>
        {a?<h3>hello first</h3>:<h3>hello second</h3>}

        

        </div>
    )
    
}