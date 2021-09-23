import {Component} from "react";

class Control extends Component{
    render(){
        const {handleMain,handleMenu} = this.props;
        return (
            <div className="Control">
                <div className="menu_control"
                onClick={()=>handleMenu()}>MENU</div>
                <div className="next_control"
                onClick={()=>{console.log("next**** clicked")}}>&lt;&lt;--</div>
                <div className="main_control"
                onClick={()=>handleMain()}></div>
                <div className="previous_control"
                onClick={()=>{console.log("prev**** clicked")}}>--&gt;&gt;</div>
                <div className="play_control"
                onClick={()=>{console.log("play**** clicked")}}>|| / &gt;</div>
            </div>
        )
    }
}
export default Control;
