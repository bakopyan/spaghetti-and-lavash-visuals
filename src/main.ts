// main.ts
import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

// Function to create a simple bar chart
function createBarChart(data: number[], containerId: string): void {
  // Set up the SVG container
  const width = 300;
  const height = 150;

  const svg = select(`#${containerId}`)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Create bars based on data
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 30)
    .attr('y', d => height - d)
    .attr('width', 25)
    .attr('height', d => d)
    .attr('fill', 'steelblue');
}

// Example data
const sampleData = [20, 50, 30, 40, 10];

// Call the function to create the bar chart in a container with the id 'chart-container'
createBarChart(sampleData, 'chart-container');
