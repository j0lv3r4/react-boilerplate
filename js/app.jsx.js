/** @jsx React.DOM */

var HelloMessage = React.createClass({
    render: function() {
        return <strong>Hello {this.props.name}</strong>;
    }
});

React.renderComponent(<HelloMessage name="World!" />,
        document.body);
