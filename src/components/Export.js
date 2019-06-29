import React, { Component } from 'react'
import { Avatar, Statistic, Row, Col, Card, Progress, Button, Icon, Steps} from 'antd';

const { Step } = Steps;

const graphs = [
  (
    <Steps>
      <Step status="process" title="Exporting" icon={<Icon type="loading" />} />
      <Step status="wait" title="Verifying" icon={<Icon type="solution" />} />
      <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
  ),
]

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100px',
}

const buttonStyle = {
  height: '100%',
  marginBottom: '10px',
  borderLeft: '1px #d9d9d9 solid',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingLeft: '20px',
}

const heroStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'spaceBetween',
  alignItems: 'center',
  marginBottom: '20px'
}

const statsStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%'
}

const lowerStyle = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-around'
}

export default class Export extends Component {
  steps = () => {
    return (
      <Steps>
        <Step status="finish" title="Exporting" icon={<Icon type="user" />} />
        <Step status="finish" title="Verifying" icon={<Icon type="solution" />} />
        <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
      </Steps>
    )
  }

  render() {
    return (
      <Card title={ this.props.title } bordered={false} style={ cardStyle }>
        { graphs[this.props.index] }
        <div style={lowerStyle}>
          <div style={heroStyle}>
            <Avatar size={64} src={this.props.profileImageSrc} />
            <h2>{this.props.profileName}</h2>
            <div style={statsStyle}>
              <Statistic title="Followers" value={this.props.followers} prefix={<Icon type="team" />} />
              <Statistic title="Scraping" value={this.props.toScrape} suffix={'/ ' + this.props.followers} />
            </div>
          </div>
          <div style={cardStyle}>
            <div style={buttonStyle}>
              <Button type="primary" icon="eye" size="small" disabled={this.props.inProgress}>
                View
              </Button>
              <Button type="primary" icon="usergroup-add" size="small" disabled={this.props.inProgress}>
                Follow All
              </Button>
              <Button type="primary" icon="download" size="small" disabled={this.props.inProgress}>
                Download
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

