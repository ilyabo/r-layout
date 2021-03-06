'use strict';

var React = require('react');
var Layout = require('./Layout');
var Spacer = require('./Spacer');

var CenterVertical = React.createClass({
    getDefaultProps() {
        return {
            contentSize: "weight 1",
            spacerSize: "weight 1",
        };
    },
    render() {
        var {containerProps, orientation, ...otherProps} = this.props;
        return (
            <Layout {...otherProps} orientation="vertical">
                <Spacer size={this.props.spacerSize}/>
                <Layout {...containerProps} orientation={orientation} size={this.props.contentSize}>
                    {this.props.children}
                </Layout>
                <Spacer size={this.props.spacerSize}/>
            </Layout>
        );
    }
});

module.exports = CenterVertical;