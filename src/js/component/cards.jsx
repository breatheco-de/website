import React from "react";
import PropTypes from "prop-types";

export class Cards extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className={this.props.cardClass}>
					<i className={this.props.iconClass} />
					<div className="container d-flex justify-content-center">
						<div className="row d-flex flex-row justify-content-around w-100 pb-0">
							{this.props.technologies &&
								this.props.technologies.map(
									(element, index) => {
										return (
											<div
												key={index}
												className={element.color}>
												{element.tech}
											</div>
										);
									}
								)}
						</div>
					</div>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							{this.props.title}
						</h5>
						<p className="card-text d-flex justify-content-center">
							{this.props.cardText}
						</p>
					</div>
				</div>
			</React.Fragment>
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
	technologies: PropTypes.array,
	tagsCol: PropTypes.string
};
