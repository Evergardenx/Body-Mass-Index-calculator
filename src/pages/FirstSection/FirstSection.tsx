import { MetricOrImperial } from '../../components/MetricOrImperial/MetricOrImperial';
import './FirstSection.css';

export function FirstSection() {
	
	return (
		<section id='firstSection'>
			<div id='firstSection-1'>
				<img src="/assets/images/logo.svg" alt="logo" />
				<div id="firstSection-1-1">
					<h1>Body Mass Index Calculator</h1>
					<p>
						Better understand your weight in relation to your height using
						our body mass index (BM) calculator. While BMI is not the
						sole determinant of a healthy weight, it offers a valuable
						starting point to evaluate your overall health and well-being.
					</p>
				</div>
			</div>
			<div id="firstSection-2">
				<MetricOrImperial/>
			</div>
		</section>
	)
}
