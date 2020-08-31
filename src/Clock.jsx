import React,{Component} from'react';
import './app.css';

class Clock extends Component{

constructor(props){
    super(props)  //for object oriented inheritive programming style of ES6 JS

    this.state={
        days:0,
        hours:0,
        minutes:0,
        seconds:0

    }
}

componentWillMount(){
    this.getTimeUntill(this.props.deadline);
}

componentDidMount(){    //lifecycle hook    this one runs after the component completely renders onto the screen
    setInterval(()=> this.getTimeUntill(this.props.deadline),1000);

}

leading0(num){
    // if(num<10){
    //     return '0'+ num;
    // }
    // return num; or we can write ternary expression

    return num < 10 ? '0'+num : num;
}

getTimeUntill(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time',time);
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor(((time/1000)/60)%60);
    const hours = Math.floor(time/(1000*60*60)&24);
    const days = Math.floor((time/(1000*60*60*24)));
    console.log('seconds',seconds,'minutes',minutes,'hours',hours,'days',days);
    this.setState({
        // days:days,
        // hours:hours,
        // minutes:minutes,
        // seconds:seconds
        //or we can simply say days,hours,minutes since key and value have the same name
        days,hours,minutes,seconds
    })
}

    render(){
      
        return(
            <div>
            <div className="Clock-Days" >{this.leading0(this.state.days)}Days</div>
            <div className="Clock-Hours">{this.leading0(this.state.hours)} Hours</div>
            <div className="Clock-Minutes">{this.leading0(this.state.minutes)} Minutes</div>
            <div className="Clock-Seconds">{this.leading0(this.state.seconds)}Seconds</div>
        </div>
        )
       
    }

}

export default Clock;