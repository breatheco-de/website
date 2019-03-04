import React from "react";
import PropTypes from "prop-types";

export class Cards extends React.Component {
	render() {
		return (
			<div className={this.props.cardClass}>
				<i className={this.props.iconClass} />
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.cardText}</p>
				</div>
				<div className="card-body">
					<h6 className="card-title">{this.props.subTitle}</h6>
					<div className="card-text">
						<div className="container">
							<div className="row">
								{this.props.technologies &&
									this.props.technologies.map(
										(element, index) => {
											return (
												<div
													key={index}
													className="col-12">
													{element}
												</div>
											);
										}
									)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Cards.propTypes = {
	cardClass: PropTypes.string,
	iconClass: PropTypes.string,
	title: PropTypes.string,
	cardText: PropTypes.string,
	subTitle: PropTypes.string,
	cardItem: PropTypes.string,
	technologies: PropTypes.string
};
