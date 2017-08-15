import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.css';

class Paginator extends Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    handlePrev: PropTypes.func.isRequired,
    handlePageByNumber: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
  };

  render() {
    const {
      current,
      total,
      handlePrev,
      handlePageByNumber,
      handleNext,
    } = this.props;

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {current === 0 ?
            (
              <li className={cx('disabled', s.pointer)} onClick={handlePrev}>
                <a aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            ) :
            (
              <li className={s.pointer} onClick={handlePrev}>
                <a aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            )
          }

          {Array.from({ length: total }, (v, k) => k)
            .map((key, index) => {
              let element;
              if (index === current) {
                element = (
                  <li
                    className={cx('active', s.pointer)}
                    key={index}
                    onClick={() => handlePageByNumber(index)}
                  >
                    <a>{index + 1}</a>
                  </li>
                );
              } else {
                element = (
                  <li
                    className={s.pointer}
                    key={index}
                    onClick={() => handlePageByNumber(index)}
                  >
                    <a>{index + 1}</a>
                  </li>
                );
              }
              return element;
            })
          }

          {current === total - 1 ?
            (
              <li className={cx('disabled', s.pointer)} onClick={handleNext}>
                <a aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            ) :
            (
              <li className={s.pointer} onClick={handleNext}>
                <a aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}

export default Paginator;
