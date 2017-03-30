import React from 'react';

// Props 정적인 데이터
// jsx 내부 { this.props.propsName }
// <> 안에 propsName="value"로 사용
// this.props.children은 <Rada>여기에 있는 값이 들어감</Rada>
class Props extends React.Component {
  render() {
    return(
      <div>
        <h1>Props</h1>
        <p>Hello {this.props.name}</p>
        <p>{this.props.number}</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

// prop 타입 설정
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
Props.propTypes = {
  name:React.PropTypes.string,
  number:React.PropTypes.number.isRequired // number가 설정되지 않으면 console에 err
};

// props 기본값 설정
Props.defaultProps = {
  name:'Unknown'
};

// State 유동적인 데이터
// jsx 내부 { this.state.stateName }
// 초기값 설정 필수, 생성자에서 this.state = {} 로 설정
//  값을 수정시 this.setState({...})
// this.state = 형태로 사용 금지
class State extends React.Component {

  // state 초기값 설정
  constructor(props){
    super(props);
    this.state = {
      value:0
    };

    // handleClick의 setState가 this를 알수 없으므로 this를 binding 해줌
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      value:this.state.value + 1
    });
  }

  render(){
    return(
      <div>
        <h1>State</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }

}

// Component Mapping
// map() : 파라미터로 전달됨 함수로 배열 내의 각 요소를 처리하여 새로운 배열을 생성
// arr.map(callback, [thisArg]) : callback(currnetValue, index, array), thisArg(callback 내부의 this 설정)

/*
var numbers = [1,2,3,4,5];
var processed = numbers.map(function(num){
  return num*num;
});

// ES6
let numbers = [1,2,3,4,5];
let result = numbers.map((num) => {
  return num*num;
})

(...) => {...} : arrow function
http://es6console.com 에서 확인
let one = a => console.log(a);
let twe = (a,b) => console.log(a,b);
let three = (c,d) = {
  console.log(c);
  console.log(d);
}
let four = () => { console.log('no params'); }
*/
class MapInfo extends React.Component {
  render() {
    // props에 contact(name, phone) Object로 넘어오는것 주의
    return(
      <div>{this.props.contact.name} {this.props.contact.phone}</div>
    );
  }
}

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contactData:[
        {name:"Jin", phone:"010-0000-0000"},
        {name:"Rada", phone:"010-0001-0001"},
        {name:"Radajin", phone:"010-0002-0004"}
      ]
    };
  }

  render() {

    const mapToComponent = (data) => {
      return data.map((contact, i) => {
        return (<MapInfo contact={contact} key={i}/>);
      });
    };

    // jsx에서 함수 사용 가능 : mapToComponent
    return (
      <div>
        <h1>Map</h1>
        {mapToComponent(this.state.contactData)}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Props name={this.props.name} number={this.props.number}>{this.props.children}</Props>
        <State/>
        <Map/>
      </div>
    );
  }
}

export default App;
