import React from "react";
import PropTypes from "prop-types"; 

export class Cards extends React.Component{
    render(){
        return(
            <div class={this.props.cardClass}>
                    <i class={this.props.iconClass} style="color:#00907B"></i>
                    <div class="card-body">
                      <h5 class="card-title">{this.props.title}</h5>
                      <p class="card-text">{this.props.cardText}</p>
                    </div>
                     <div class="card-body">
                            <h6 class="card-title">{this.props.subTitle}</h6>
                            <p class="card-text">
                                 <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                           EloquentORM
                                        </div>
                                        <div class="col-12">
                                            PHP
                                        </div>
                                        <div class="col-12">
                                            SlimPHP
                                        </div>
                                        <div class="col-12">
                                            MySQL
                                        </div>
                                        <div class="col-12">
                                            JSON
                                        </div>
                                        <div class="col-12">
                                            REST
                                        </div>
                                    </div>
                                </div>
                            </p>
                    </div>
                </div>
            
            );
    }
}
