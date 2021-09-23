import { Component } from 'react';
import About from './options/About';
import Track from './options/Track';
import Contactus from './options/Contactus';
import SettingOption from './options/SettingOption';

class Display extends Component {
  componentDidMount() {
    const { prevX, prevY, currentSelectedOption } = this.props.data;
    console.log('component did mount', prevX, prevY);
    const optionTag = document.querySelectorAll('.Display>*');
    console.log(optionTag[currentSelectedOption]);
    optionTag[currentSelectedOption].style.backgroundColor = 'lightblue';
  }
  componentDidUpdate(prevProps) {
    const { currentSelectedOption, currentDisplay } = this.props.data;
    const preSelectedOption = prevProps.data.currentSelectedOption;
    const preDisplay = prevProps.data.currentDisplay;
    console.log(
      'component did update',
      currentSelectedOption,
      ' form ',
      preSelectedOption,
      currentDisplay
    );
    const optionTag = document.querySelectorAll('.Display>*');
    // console.log(optionTag[this.props.currentSelectedOption])
    if (
      currentDisplay !== preDisplay ||
      preSelectedOption !== currentSelectedOption
    ) {
      if (
        currentDisplay === 0 ||
        currentDisplay === 2 ||
        currentDisplay === 3
      ) {
        optionTag[preSelectedOption].style.backgroundColor = 'transparent';
        optionTag[currentSelectedOption].style.backgroundColor = 'lightblue';
      }
    }
  }
  render() {
    const { options, currentDisplay } = this.props.data;

    console.log('render display');
    return (
      // 0 : home, 1 : about, 2 : music, 3 : settion, 4 : contact us 5: tracks 6: setting option.
      <div className="Display">
        {currentDisplay === 0 &&
          options[currentDisplay].map((option, i) => {
            return <div key={option.id}>{option.title}</div>;
          })}
        {currentDisplay === 1 && <About />}
        {currentDisplay === 2 &&
          options[currentDisplay - 1].map((option, i) => {
            return <div key={option.id}>{option.title}</div>;
          })}
        {currentDisplay === 3 &&
          options[currentDisplay - 1].map((option, i) => {
            return <div key={option.id}>{option.title}</div>;
          })}

        {currentDisplay === 4 && <Contactus />}
        {currentDisplay === 5 && <Track />}
        {currentDisplay === 6 && <SettingOption />}
      </div>
    );
  }
}

export default Display;
