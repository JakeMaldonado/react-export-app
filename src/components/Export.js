import React, { Component } from 'react'
import { Card, Progress, Button, Icon, Steps} from 'antd';

const { Step } = Steps;

const graphs = [
  (
    <Steps>
      <Step status="process" title="Exporting" icon={<Icon type="loading" />} />
      <Step status="wait" title="Verifying" icon={<Icon type="solution" />} />
      <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
  ),
  (
    <Steps>
      <Step status="finish" title="Exporting" icon={<Icon type="user" />} />
      <Step status="process" title="Verifying" icon={<Icon type="loading" />} />
      <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
  ),
  (
    <Steps>
      <Step status="finish" title="Exporting" icon={<Icon type="user" />} />
      <Step status="finish" title="Verifying" icon={<Icon type="solution" />} />
      <Step status="finish" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
  )
]

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100px'
}

const buttonStyle = {
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
        <div style={cardStyle}>
          { graphs[this.props.index] }
          <div style={buttonStyle}>
            <Button type="primary" icon="download" size="small" disabled={this.props.inProgress}>
              Download
            </Button>
            <Button type="primary" icon="export" size="small" disabled={this.props.inProgress}>
              Export
            </Button>
          </div>
        </div>
      </Card>
    )
  }
}
