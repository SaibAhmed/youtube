import React ,{Component} from 'react';
class Youtube extends Component {
  render(){
    return(
      <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OMvpBHtmrJo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    );
  }
}
export default Youtube;
