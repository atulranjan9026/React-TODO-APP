import React from 'react';
import './DonutChart.css';
import ellipse2319 from '../assets/ellipse-2319.svg';
import ellipse2320 from '../assets/ellipse-2320.svg';
import infoIcon from '../assets/Group 2016.svg';
import legendDone from '../assets/ellipse-21.svg';
import legendPending from '../assets/ellipse-21-21.svg';

const DonutChart = () => {
  return (
    <div className="donut-chart">
      <div className="donut-chart__header">
        <span className="donut-chart__title">Today Tasks</span>
        <img src={infoIcon} alt="Info Icon" className="donut-chart__info-icon" />
      </div>
      <div className="donut-chart__task-count">11</div>
      <div className="donut-chart__chart">
        <img src={ellipse2319} alt="Donut Chart Segment 2" className="donut-chart__chart-segment" />
        <img src={ellipse2320} alt="Donut Chart Segment 1" className="donut-chart__chart-segment-1" />
      </div>
  
      <div className="donut-chart__legend">
      <div className="donut-chart__legend-item">
          <img src={legendPending} alt="Pending Legend" />
          <span>Pending</span>
        </div>
        <div className="donut-chart__legend-item">
          <img src={legendDone} alt="Done Legend" />
          <span>Done</span>
        </div>
       
      </div>
    </div>
  );
};

export default DonutChart;
