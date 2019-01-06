import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions';

export const Stats = ({ user }) => (
  <div>
    <p>Username: {user.username}</p>
    <p>Kills: {user.stats.kills_solo}</p>
  </div>
);

class Fortnite extends Component {
  fetchUserStats = () => {
    this.props.fetchStats();
  };

  render() {
    return (
      <div>
        <h1>This component shows user stats</h1>
        <button onClick={this.fetchUserStats}>Fetch user stats</button>
        {this.props.isLoading && <p>...Loading</p>}
        {this.props.userStats && <Stats user={this.props.userStats.data} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  userStats: state.user.stats
});

const mapDispatchToProps = dispatch => ({
  fetchStats: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fortnite);
