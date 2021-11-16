import React from 'react';

//
// class Index extends React.Component{
class Index extends React.PureComponent{
  constructor(props){
      super(props)
      this.state={
         data:{
            name:'alien',
            age:28
         }
      }
  }
  handerClick= () =>{
      const { data } = this.state
      data.age++
      console.log(data);
      this.setState({ data })
    //   this.setState({ ...data }) // 新对象
  }
  render(){
      const { data } = this.state
      return <div className="box" >
      <div className="show" >
          <div> 你的姓名是: { data.name } </div>
          <div> 年龄： { data.age  }</div>
          <button onClick={ this.handerClick } >age++</button>
      </div>
  </div>
  }
}

const App = () => {
  return (
    <Index/>
  )
}

export default App;