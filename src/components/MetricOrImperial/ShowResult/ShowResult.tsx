import './ShowResult.css';

type ShowResultProps = {
	result: string
	idealWeight: number | number[]
}

export function ShowResult({result, idealWeight}: ShowResultProps) {
	let healthStatus = "";
	if(+result < 18.5) {
		healthStatus = "Underweight";
	} else if(+result < 24.9) {
		healthStatus = "Healthy weight";
	} else if (+result < 29.9) {
		healthStatus = "Overweight";
	} else {
		healthStatus = "Obese";
	}

	function imperialReducedFifteenKg(arrayIdealWeight: number[]) {
		const oneKgToLbs = 2.20462;
		const numberLbsForOneSt = 14;
		const minIdealWeight = (arrayIdealWeight[0] * numberLbsForOneSt) + arrayIdealWeight[1] - (15 * oneKgToLbs);
		const minIdealWeightSt = Math.floor(minIdealWeight / numberLbsForOneSt);
		const minIdealWeightLbs = Math.round(minIdealWeight % numberLbsForOneSt);
		return `${minIdealWeightSt}st ${minIdealWeightLbs}lbs`
	}

	const idealWeightMetricOrImperialMax = Array.isArray(idealWeight) ? `${idealWeight[0]}st ${idealWeight[1]}lbs` : `${idealWeight}kgs`;
	const idealWeightMetricOrImperialMin = Array.isArray(idealWeight) ? imperialReducedFifteenKg(idealWeight) : `${idealWeight - 15}kgs`;
	
	if(result === "NaN" || +result < 1 || +result > 100) {
		return (
			<div id="firstSection-2-3">
				<div id="firstSectionWelcome">
					<h4>Welcome!</h4>
					<p>Enter your height and weight and you'll see your BMI result here</p>
				</div>
			</div>
		)
	} else {
		return (
			<div id="firstSection-2-3">
				<div id="result-1">
					<p>Your BMI is...</p>
					<h4>{result}</h4>
				</div>
				<div id="result-2">
					<p>Your BMI suggests you're a {healthStatus}. Your ideal weight is between <strong>{idealWeightMetricOrImperialMin} - {idealWeightMetricOrImperialMax}</strong></p>
				</div>
			</div>
		)
	}
}
