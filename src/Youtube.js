import React ,{Component} from 'react';
const Api='AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelId='UCXgGY0wkgOzynnHvSEVmE3A'
const Results=10;

var finalUrl=`https://www.googleapis.com/youtube/v3/search?key=${Api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${Results}`
class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultYt:[]
    };
    this.clicked=this.clicked.bind(this);

  }
  clicked(){
    fetch(finalUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson);

      const resultYt = responseJson.items.map(obj =>"https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({resultYt});

    })
    .catch((error) => {
      console.error(error);
    });
  }
  render(){
    console.log(finalUrl);
    console.log(this.state.resultYt);
    return(
      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
          {
            this.state.resultYt.map((link,i) =>{
            var frame =<div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
             return frame;
           })
          }
          {this.frame}

        </div>
    );
  }
}
export default Youtube;
