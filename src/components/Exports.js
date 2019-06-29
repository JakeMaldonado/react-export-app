import React, { Component } from 'react'
import { Col, Row } from 'antd';
import Export from './Export';

export default class Exports extends Component {
  displayExports = () => {
    const scrapeData = this.props.scrapes
    const rows = [];
    const rowCount = Math.ceil(scrapeData.length / 3);

    for (let i = 0; i < rowCount; i++) {
      const cols = scrapeData.map(scrape => {
        return (
          <Col span={8}>
            <Export title={scrape.scrapeTitle} profileName={scrape.profileName} inProgress={scrape.inProgress} index={scrape.index} profileImageSrc={scrape.profileImageSrc} followers={scrape.followers} toScrape={scrape.toScrape} /> 
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
      <div style={{ height: '100vh', background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          { this.displayExports() }
        </Row>
      </div>
    )
  }
}
