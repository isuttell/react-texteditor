/**
 * @file Text Editor StyleButton
 * @author Isaac Suttell <isaac@isaacsuttell.com>
 */

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// CSS Module
import css from './StyleButton.css';

export default class StyleButton extends Component {
  /**
   * Make Render
   * @return    {React}
   */
  render() {
    return (
      <div
        className={classNames(this.props.className, css.btn, css.iconBtn, this.props.iconClass, {
          [css.active]: this.props.active
        })}
        onMouseDown={this.props.onMouseDown}
      />
    );
  }
}

/**
 * Type checking
 * @type    {Object}
 */
StyleButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string
};