import React, { Component, PropTypes } from 'react';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRamdomizeColor: PropTypes.func
};

function createWarning(funcName) {
    return () => console.warn(funcName + 'is not defined');
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract:  createWarning('onSubtract'),
    onRamdomizeColor:  createWarning('onRamdomizeColor')
};

class Control extends Component {

    
    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRamdomizeColor}>Randomize Color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
