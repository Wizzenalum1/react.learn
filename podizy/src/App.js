import { Component } from 'react';
import './App.css';
import Control from './Control';
import Display from './Display';

// root component from react.

class App extends Component {
  constructor() {
    super();
    // current option help to highlight the selected opion in display
    this.state = {
      currentSelectedOption: 0,
      scrolling: false,
      prevX: 0,
      prevY: 0,
      currentDisplay: 0, // 0 : home, 1 : about, 2 : music, 3 : settion, 4 : contact us 5: tracks 6: setting option.
      // first i tried to do set all the options here but now i am doing this from component side.
      options: [
        [
          { title: 'About', id: 0 },
          { title: 'Music', id: 1 },
          { title: 'Setting', id: 2 },
          { title: 'Contact Us', id: 3 },
        ],
        [
          { title: 'track1', id: 0 },
          { title: 'track2', id: 1 },
          { title: 'track3', id: 2 },
          { title: 'track4', id: 3 },
        ],
        [
          { title: 'volume', id: 0 },
          { title: 'britness', id: 1 },
          { title: 'dark mode', id: 2 },
          { title: 'password', id: 3 },
        ],
      ],
    };
  }

  handleMenu = () => {
    console.log('menu is clicked');
    const { currentDisplay } = this.state;
    if (currentDisplay > 0 && currentDisplay < 5) {
      this.setState({ currentDisplay: 0 });
    } else if (currentDisplay === 5) {
      this.setState({ currentDisplay: 2 });
    } else if (currentDisplay === 6) {
      this.setState({ currentDisplay: 3 });
    }
  };
  handleMain = () => {
    // here i am setting the pattern for the navigation
    const { currentDisplay } = this.state;
    console.log('main is clicked');
    if (currentDisplay === 0) {
      this.setState({
        currentDisplay: this.state.currentSelectedOption + 1,
        currentSelectedOption: 0,
      });
    } else if (currentDisplay === 2) {
      this.setState({ currentDisplay: 5, currentSelectedOption: 0 });
    } else if (currentDisplay === 3) {
      this.setState({ currentDisplay: 6, currentSelectedOption: 0 });
    }
  };

  handleScroll = (x, y) => {
    const controlTag = document.querySelector('.Control');
    const centerX =
      Number(controlTag.offsetLeft) + Number(controlTag.offsetWidth) / 2;
    console.log('handleing scroll', x, y, centerX);
    const { prevX, prevY, currentDisplay } = this.state;
    let dis = Math.sqrt((x - prevX) * (x - prevX) + (y - prevY) * (y - prevY));
    // let slope = (y-prevY)/(x-prevX);
    let list_index = 0;
    if (currentDisplay === 2) list_index = 1;
    if (currentDisplay === 3) list_index = 2;
    let optionCount = this.state.options[list_index].length;
    if (x < centerX && dis > 50) {
      if (y < prevY) {
        this.setState((prev) => {
          const current =
            (prev.currentSelectedOption + 1 + optionCount) % optionCount;
          return { currentSelectedOption: current, prevX: x, prevY: y };
        });
      }
      if (y > prevY) {
        this.setState((prev) => {
          const current =
            (prev.currentSelectedOption - 1 + optionCount) % optionCount;
          return { currentSelectedOption: current, prevX: x, prevY: y };
        });
      }
    }
    if (x > centerX && dis > 50) {
      if (y > prevY) {
        this.setState((prev) => {
          const current =
            (prev.currentSelectedOption + 1 + optionCount) % optionCount;
          return { currentSelectedOption: current, prevX: x, prevY: y };
        });
      }
      if (y < prevY) {
        this.setState((prev) => {
          const current =
            (prev.currentSelectedOption - 1 + optionCount) % optionCount;
          return { currentSelectedOption: current, prevX: x, prevY: y };
        });
      }
    }
  };
  componentDidMount() {
    const controlTag = document.querySelector('.Control');
    controlTag.addEventListener('mousedown', (event) => {
      const { currentDisplay } = this.state;
      if (
        currentDisplay === 0 ||
        currentDisplay === 2 ||
        currentDisplay === 3
      ) {
        this.setState({
          scrolling: true,
          prevX: event.clientX,
          prevY: event.clientY,
        });
      }
      console.log('mouse down');
    });
    controlTag.addEventListener('mousemove', (e) => {
      if (this.state.scrolling) {
        this.handleScroll(e.clientX, e.clientY, 4);
      }
    });
    document.addEventListener('mouseup', () => {
      if (this.state.scrolling) {
        this.setState({ scrolling: false });
      }
    });
    /// TODO : add mobile touch.
    // controlTag.addEventListener('touchstart',event=>{
    //   this.setState({scrolling:true,prevX:event.clientX,prevY:event.clientY});
    //   console.log("mouse down")
    // })
    // controlTag.addEventListener('touchmove',e=>{
    //   if(this.state.scrolling){
    //     this.handleScroll(e.clientX,e.clientY);
    //   }
    // })
    // document.addEventListener('touchend',()=>{
    //   if(this.state.scrolling){
    //     this.setState({scrolling:false});
    //   }
    // })
  }

  render() {
    return (
      <div styles={{ backgroundColor: 'red' }} className="App">
        <Display data={this.state} />
        <Control handleMenu={this.handleMenu} handleMain={this.handleMain} />
      </div>
    );
  }
}

export default App;
