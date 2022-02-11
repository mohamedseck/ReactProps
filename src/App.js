import React from 'react'
import Profile from './Profile/Profile';
import './App.css';
class App extends React.Component {
  // =============================Profile & bio=============================
  constructor(props){
    super(props);
    this.state={
      Person :{ 
                fullName:   'Mohamed Seck',
                bio:        'Full stack web development @ GoMyCode,  I am learning full stack web development and enjoy computer programming',
                imgSrc:     '/assets/images.png',
                professio:  'Full Stack Software Engineering'
              },
      show:false ,
      count: 0
              };
  }
  
  // =============================button toggle function=============================
  toggle =() =>{this.setState({show:!this.state.show});}

  // ========================increment Counter function========================
  increment = () => {this.state.show ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: 0 });};

  // ========================componentDidMount lifecyle========================
  componentDidMount = () => {setInterval(this.increment, 1000);}

  render(){
    return (
    <div className="App">
      {/* counter */}
      <h4 style={{ color: '#457b9d' }}>
        {this.state.count} seconds .
      </h4>
      {/* show button */}
      <button className='btnShow' onClick={this.toggle}>Show Profile</button>
      {this.state.show && <Profile Person={this.state.Person}/>}
    </div>
  );
  }
}
export default App;