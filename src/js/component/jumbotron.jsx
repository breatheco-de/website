import React from "react";
import PropTypes from "prop-types";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className={this.props.jumbotronClass}>
				<div className={this.props.firstContainerClass}>
					<i className={this.props.iconClass} />
					<img
						className={this.props.imgClass}
						src={this.props.imgSrc}
						alt=""
					/>
					<h1 className={this.props.headerClass}>
						{this.props.title}
					</h1>
					<p className={this.props.parragraphClass}>
						{this.props.subheading}
					</p>
					{this.props.colContent && (
						<div className={this.props.rowContainer}>
							<div className={this.props.rowClass}>
								{this.props.colContent.map((element, index) => {
									return (
										<div
											key={index}
											className="col-12 col-sm-3">
											{element}
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

Jumbotron.propTypes = {
	classForColor: PropTypes.string,
	title: PropTypes.string,
	subheading: PropTypes.string,
	imgClass: PropTypes.string,
	imgSrc: PropTypes.string,
	jumbotronClass: PropTypes.string,
	headerClass: PropTypes.string,
	parragraphClass: PropTypes.string,
	firstContainerClass: PropTypes.string,
	iconClass: PropTypes.string,
	rowContainer: PropTypes.string,
	rowClass: PropTypes.string,
	colClass: PropTypes.string,
	colContent: PropTypes.array
};
