function CardUI(props){
    const width = 300;
    return(
        // to display contents in form of card --> className="card"
        <div className="card" style={{width: '19rem'}}>
            <div>
                <img src="../c1.png" width={width} style={{border:'1px solid #FF0000', borderRadius:'50px'}}/>
                {/* <h1>{props.program}</h1>
                <p>{props.desc}</p> */}
                {/* to apply padding to details -->  className="card-body"*/}
                <div className="card-body">
                    <h2>{props.userFromArray}</h2>
                    <p>{props.col}</p>
                    <p>{props.branchname}</p>
                    {/* <h1>{props.user.name}</h1> */}
                    {/* <p>{props.user.branch}</p> */}
                    {/* <p>{props.user.section}</p> */}
                    
                    <button type="button" class="btn btn-primary">Connect</button>
                </div>
                
            </div>
        </div>

    );
}

export default CardUI;