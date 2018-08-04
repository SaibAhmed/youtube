import React ,{Component} from 'react';
const Api='AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelId='UCXgGY0wkgOzynnHvSEVmE3A'
const Results=10;

var finalUrl=`https://www.googleapis.com/youtube/v3/search?key=${Api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${Results}`
class Youtube extends Component {
  render(){
    console.log(finalUrl);
    return(
      <div>
        <button>Get youtube videos</button>

      <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OMvpBHtmrJo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      </div>
    );
  }
}
export default Youtube;
