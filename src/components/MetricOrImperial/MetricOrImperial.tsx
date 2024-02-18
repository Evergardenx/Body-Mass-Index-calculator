import { useState, ChangeEvent } from 'react';
import { Metric } from './Metric/Metric';
import { Imperial } from './Imperial/Imperial';
import './MetricOrImperial.css';

export function MetricOrImperial() {

	const [metricOrImperial, setMetricOrImperial] = useState<string>("metric");

	const radioOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMetricOrImperial(e.target.value);
	}

	const showMetricOrImperial = metricOrImperial === "metric" ? <Metric/> : <Imperial/>;

	return (
		<>
			<h3>Enter your details below</h3>
			<div id="firstSection-2-1">
				<div className="firstSectionRadio">
					<input type="radio" name="metricOrImperial" value="metric" onChange={radioOnChange} checked={metricOrImperial === "metric"}/>
					<label htmlFor="metric">Metric</label>
				</div>
				<div className="firstSectionRadio">
					<input type="radio" name="metricOrImperial" value="imperial" onChange={radioOnChange} checked={metricOrImperial === "imperial"}/>
					<label htmlFor="imperial">Imperial</label>
				</div>
			</div>
			{showMetricOrImperial}
		</>
	)
}
