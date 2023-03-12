import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { Section } from './Section';
import { Layout } from './Layout';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const option = {
    good,
    neutral,
    bad,
  };

  const leaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return null;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercentage(Math.round((good / total) * 100));
  }, [bad, good, neutral, total]);

  return (
    <main>
      <GlobalStyle />
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(option)}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Layout>
    </main>
  );
};
