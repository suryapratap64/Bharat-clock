let Currenttime=()=>{
    let time=new Date();
    return (
    <h1 className="sps">This is current {time.toLocaleDateString()}-{time.toLocaleTimeString()}</h1>
    );
 }
 export default Currenttime