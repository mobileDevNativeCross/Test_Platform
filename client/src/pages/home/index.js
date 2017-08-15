import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  postUser,
  clearPost,
  getPageByNumber,
} from '../../redux/actions';

import Header from '../../components/Header';
import Paginator from '../../components/Paginator';

import s from './styles.css';

class HomePage extends Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    pageData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        email: PropTypes.string,
        firstname: PropTypes.string,
        surname: PropTypes.string,
      }),
    ).isRequired,
    postUsers: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string,
        firstname: PropTypes.string,
        surname: PropTypes.string,
      }),
    ).isRequired,
    dispatchPostUser: PropTypes.func.isRequired,
    dispatchClearPost: PropTypes.func.isRequired,
    dispatchGetPage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatchGetPage(0);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatchPostUser(this.file.files[0]);
    this.props.dispatchGetPage(this.props.current);
  }

  handleClear = () => {
    this.props.dispatchClearPost();
  };

  handlePrev = () => {
    this.props.dispatchGetPage(this.props.current - 1);
  };

  handleNext = () => {
    this.props.dispatchGetPage(this.props.current + 1);
  };

  handlePageByNumber = (page) => {
    this.props.dispatchGetPage(page);
  };

  render() {
    return (
      <div className={s.body}>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="panel panel-primary">
                <div className="panel-heading">POST</div>

                <div className="panel-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">Input</div>

                        <div className="panel-body">
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                              <input
                                ref={(file) => { this.file = file; }}
                                type="file"
                                name="file"
                                id="InputFile"
                              />
                            </div>

                            <button className="btn btn-success">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">Output</div>

                        <div className="panel-body">
                          {this.props.postUsers.length > 0 ?
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>name</th>
                                  <th>surname</th>
                                  <th>email</th>
                                </tr>
                              </thead>

                              <tbody>
                                {this.props.postUsers.map((user, index) => (
                                  <tr key={index}>
                                    <td>{user.firstname}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                  </tr>))
                                }
                              </tbody>
                            </table> :
                            <p>No users</p>
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12">
                      <button
                        className="btn btn-danger pull-right"
                        onClick={this.handleClear}
                      >
                        Clear POST
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel panel-primary">
                <div className="panel-heading">GET</div>

                <div className="panel-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <td>id</td>
                        <th>name</th>
                        <th>surname</th>
                        <th>email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.pageData.map(user => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.firstname}</td>
                          <td>{user.surname}</td>
                          <td>{user.email}</td>
                        </tr>))
                      }
                    </tbody>
                  </table>
                </div>

                <div className="panel-footer">
                  <div className="text-center">
                    <Paginator
                      current={this.props.current}
                      total={this.props.total}
                      handlePrev={this.handlePrev}
                      handlePageByNumber={this.handlePageByNumber}
                      handleNext={this.handleNext}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postUsers: state.users.post.users,
    current: state.users.page.current,
    total: state.users.page.total,
    pageData: state.users.page.result,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchPostUser: file => dispatch(postUser(file)),
    dispatchClearPost: () => dispatch(clearPost()),
    dispatchGetPage: page => dispatch(getPageByNumber(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
