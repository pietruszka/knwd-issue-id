import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Route from 'react-router-dom/Route';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import axios from 'axios';
import { Notification } from 'react-notification';
import projects from './projects';
import { View, Header, Top, Bottom, Center, Input, Button } from './styles';

class Home extends PureComponent {
  state = {
    value: '',
    disabled: false,
    buttonText: 'Wygeneruj ID',
    notification: false,
  }

  getValue = () => {
    const project = projects[this.props.match.params.name];
    axios.patch(`https://issuesids.konrisz96.usermd.net/api/project/${project.id}`)
      .then((res) => {
        this.setState({
          value: res.data.result.issueNumber,
          disabled: true,
          buttonText: 10,
          notification: true,
        }, () => {
          window.navigator.clipboard.writeText(`${project.short}-${this.state.value}`).then(() => {}, (err) => {
            console.error(err);
          });
          this.interval = window.setInterval(() => {
            const { buttonText } = this.state;
            if (buttonText > 1) {
              this.setState({ buttonText: buttonText - 1, notification: buttonText > 7 });
            } else {
              window.clearInterval(this.interval);
              this.setState({ disabled: false, buttonText: 'Wygeneruj ID', value: '' });
            }
          }, 1000);
        });
      });
  }

  hideNotification = () => this.setState({ notification: false });

  render() {
    const project = projects[this.props.match.params.name];

    return (
      <View>
        <Header>
          <Top>Generator ID dla issues w projekcie</Top>
          <Bottom>{project.name}</Bottom>
        </Header>
        <Center>
          <Input value={this.state.value && `${project.short}-${this.state.value}`} />
          <Button disabled={this.state.disabled} onClick={this.getValue}>{this.state.buttonText}</Button>
        </Center>
        <Notification
          isActive={this.state.notification}
          message="Numer został skopiowany do schowka"
          onClick={this.hideNotification}
        />
      </View>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/:name" component={Home} />
  </BrowserRouter>,
  document.querySelector('.container'),
);
