import React from "react";
import { Button } from "./button.jsx";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export class Jumbotron extends React.Component {
	render() {
		const Title = this.props.jumbotronTitle;
		return (
			<div className={this.props.jumbotronClass}>
				<Title/>
				<div className={this.props.jumboRowClass}>
					<div className={this.props.firstColumnClass}>
						<p className={this.props.pClassFirstCol}>{this.props.pHeaderFirstCol}</p>
						<p className={this.props.pTexClassColOne}>{this.props.pTextFirstCol}</p>
						<p className={this.props.firstColumnLinkClass}>
							<Link to="/aboutus">
								<span className={this.props.linkClassColOne}>{this.props.firstLinkColOneText}</span>
							</Link>
						</p>
						<hr className={this.props.hrLineClass} />
						<p className={this.props.firstColumnLinkClass}>
							<Link to="/opensource">
								<span className={this.props.linkClassColOne}> {this.props.secondLinkColOneText}</span>
							</Link>
						</p>
						<hr className={this.props.hrLineClass} />
						<p className={this.props.firstColumnLinkClass}>
							<Link to="/contributing">
								<span className={this.props.linkClassColOne}> {this.props.thirdLinkColOneText}</span>
							</Link>
						</p>
						<p className={this.props.smallDescriptionFirstColClass}>
							<small>{this.props.smallDescriptionFirstCol}</small>
						</p>
						<div className={this.props.buttonAlignCenterClass}>
							<Link to="/contributing">
							
								<button type="button" className="btn btn-outline-success btn-lg greenButton text-dark px-3 px-md-5 py-4">Start Contributing</button>
							</Link>
						</div>
					</div>
					<div className={this.props.secondColumnClass}>
						<div className="d-none d-md-block">
							<img className={this.props.imgClass} src={this.props.imgSrc} />
						</div>
					</div>
					<div className={this.props.thirdColumnClass}>
						<p className={this.props.pClassSecondCol}>{this.props.pHeaderSecondCol}</p>
						<p className={this.props.pTextClassColTwo}>{this.props.pTextSecondCol}</p>
						<p className={this.props.linksClassSecondCol}>
							<Link to="/lessons">
								<span> {this.props.firstLinkColTwoText}</span>
							</Link>
						</p>
						<hr className={this.props.hrLineClass} />
						<p className={this.props.linksClassSecondCol}>
							<a>{this.props.secondLinkColTwoText}</a>
						</p>
						<hr className={this.props.hrLineClass} />
						<p className={this.props.linksClassSecondCol}>
							<a href={this.props.secondColThirdLinkHref}>{this.props.thirdLinkColTwoText}</a>
						</p>
						<p className={this.props.smallDescriptionSecondColClass}>
							<small>{this.props.smallDescriptionsecondTextCol}</small>
						</p>
						<div className={this.props.buttonAlignCenterClassTwo}>
							<Button
								href="https://student.breatheco.de"
								classNameButton={this.props.buttonColTwoClass}
								buttonText={this.props.buttonColTwoText}
								smallText={this.props.buttonSmallText}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Jumbotron.propTypes = {
	jumbotronClass: PropTypes.string,
	jumbotronTitle: PropTypes.func,
	jumbotronTitleClass: PropTypes.string,
	firstColumnClass: PropTypes.string,
	secondColumnClass: PropTypes.string,
	thirdColumnClass: PropTypes.string,
	pClassFirstCol: PropTypes.string,
	pHeaderFirstCol: PropTypes.string,
	imgSrc: PropTypes.string,
	pClassSecondCol: PropTypes.string,
	pHeaderSecondCol: PropTypes.string,
	imgClass: PropTypes.string,
	pTextSecondCol: PropTypes.string,
	pTextFirstCol: PropTypes.string,
	pTexClassColOne: PropTypes.string,
	firstLinkColOneClass: PropTypes.string,
	firstLinkColOneText: PropTypes.string,
	hrLineClass: PropTypes.string,
	secondLinkColOneClass: PropTypes.string,
	secondLinkColOneText: PropTypes.string,
	thirdLinkColOneClass: PropTypes.string,
	thirdLinkColOneText: PropTypes.string,
	smallDescriptionFirstCol: PropTypes.string,
	smallDescriptionFirstColClass: PropTypes.string,
	buttonColOneClass: PropTypes.string,
	buttonColOneText: PropTypes.string,
	buttonAlignCenterClass: PropTypes.string,
	pTextClassColTwo: PropTypes.string,
	firstLinkColTwoClass: PropTypes.string,
	firstLinkColTwoText: PropTypes.string,
	secondLinkColTwoClass: PropTypes.string,
	thirdLinkColTwoClass: PropTypes.string,
	thirdLinkColTwoText: PropTypes.string,
	secondLinkColTwoText: PropTypes.string,
	linksClassSecondCol: PropTypes.string,
	firstColumnLinkClass: PropTypes.string,
	smallDescriptionsecondTextCol: PropTypes.string,
	buttonColTwoClass: PropTypes.string,
	buttonColTwoText: PropTypes.string,
	buttonSmallText: PropTypes.string,
	buttonAlignCenterClassTwo: PropTypes.string,
	jumboRowClass: PropTypes.string,
	linkClassColOne: PropTypes.string,
	smallDescriptionSecondColClass: PropTypes.string,
	secondColThirdLinkHref: PropTypes.string,
	hrefSecondColSecondLink: PropTypes.string
};
