import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { Section } from './Section';
import { Layout } from './Layout';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <main>
        <GlobalStyle />
        <Layout>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Layout>
      </main>
    );
  }
}
