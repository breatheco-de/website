import React from "react";
import Helmet from "react-helmet";
import PropTypes from 'prop-types';

class Helmett extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                {/*<!-- Primary Meta Tags -->*/}
                    <title>{this.props.title}</title>
                    <meta name="title" content={this.props.title}/>
                    <meta name="description" content={this.props.description}/>

                    {/*<!-- Open Graph / Facebook -->*/}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={this.props.url}/>
                    <meta property="og:title" content={this.props.title}/>
                    <meta property="og:description" content={this.props.description}/>
                    <meta property="og:image" content={this.props.image}/>

                    {/*<!-- Twitter -->*/}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={this.props.url}/>
                    <meta property="twitter:title" content={this.props.title}/>
                    <meta property="twitter:description" content={this.props.description}/>
                    <meta property="twitter:image" content={this.props.image}/>
            </Helmet>


            </React.Fragment>

        );
    }
}

Helmett.propTypes = {
  title: PropTypes.string,
  url:PropTypes.string,
  description:PropTypes.string,
  image:PropTypes.string,
}

export default Helmett;