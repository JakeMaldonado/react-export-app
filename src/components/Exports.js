import React, { Component } from 'react'
import { Col, Row } from 'antd';
import Export from './Export';


const cardData = [
  {
    title: "Some export",
    index: 0,
    inProgress: true
  },
  {
    title: "My second export",
    index: 1,
    inProgress: true
  },
  {
    title: "Wow this things awesome",
    index: 2,
    inProgress: false
  }
]

export default class Exports extends Component {
  
  displayExports = () => {
    const rows = [];
    const rowCount = Math.floor(cardData.length / 3);
    console.log(rowCount)
  
    for (let i = 0; i < rowCount; i++) {
      const cols = cardData.map(card => {
        return (
          <Col span={8}>
            <Export title={card.title} inProgress={card.inProgress} index={card.index}  /> 
          </Col>
        )
      });

      const newRow = (<Row gutter={16}>{cols}</Row>);
      rows.unshift(newRow);
    }
    return rows;
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          { this.displayExports() }
        </Row>
      </div>
    )
  }
}
