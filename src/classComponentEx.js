import React from "react";
class ClassEx extends React.Component{
    name = "ReactJS";
    count = 0;
    constructor(){
        super();
        // this.count = 1;
        // state is method here
        this.state = {
            number : 1
        };
        console.log(this.count);
        console.log("Constructor is called!!");
    }

    componentDidMount(){
        // this.count += 1;
        // console.log(this.count);
        // console.log(this.count+1);
        console.log("Mounted");
    }

    componentDidUpdate(){
        console.log("Component Updated!");
    }

    componentWillUnmount(){
        console.log("Unmounted");
    }

    funEightBtnClick = () => {
        // this.count += 1;
        console.log(this.count+1);
        this.setState({number : this.state.number + 1});
        // console.log(this.state.number+1);
        console.log("Button Clicked!");
    }


    render(){
        // let a = 5;
        // let b = 4;
        return(
            <div>
                <h1>Krishna Priya</h1>
                <h2>CSE</h2>
                <h3>B</h3>
                <h4>III</h4>
                <h5>
                    This is Class Component{this.name} {this.count} {this.state.number}
                </h5>
                <button className="btn btn-primary" onClick={this.funEightBtnClick}>
                    Click here
                </button>
                
            </div>
        );
    }
}
export default ClassEx;