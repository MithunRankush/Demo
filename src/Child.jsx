function Child ({a,b,c,d,e})
{
    return(
        <>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
        <h1>{c[0]}</h1>
        <h1>d.d1</h1>
        <button onClick={e}>invoke a function</button>
        </>


     
    )
}
export default Child