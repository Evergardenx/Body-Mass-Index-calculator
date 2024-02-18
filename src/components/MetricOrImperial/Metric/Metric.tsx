import { useState, useEffect, ChangeEvent } from "react";
import { ShowResult } from "../ShowResult/ShowResult";

export function Metric() {
	const [height, setHeight] = useState<number>(0);
	const [weight, setWeight] = useState<number>(0);
	const [result, setResult] = useState<string>("");
	const [idealWeight, setIdealWeight] = useState<number>(0);

	useEffect(() => {
		if(height !== 0 && weight !== 0) {
			const heightMetre = height / 100;
			const bmi: string = (weight / Math.pow(heightMetre, 2)).toFixed(1);
			setResult(bmi);
			setIdealWeight(height - 100);
		}
	}, [height, weight])

	const inputOnChangeMetric = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target.id === 'height') {
			setHeight(parseInt(e.target.value));
		} else {
			setWeight(parseInt(e.target.value))
		}
	}

	return (
		<>
			<div id="firstSectionMetric">
				<div className="firstSectionMetric">
					<label htmlFor="height">Height</label>
					<input onChange={inputOnChangeMetric} type="text" name="height" id="height" placeholder="0"/>
					<span id="textCM">cm</span>
				</div>
				<div className="firstSectionMetric">
					<label htmlFor="weight">Weight</label>
					<input onChange={inputOnChangeMetric} type="text" name="weight" id="weight" placeholder="0" />
					<span id="textKG">kg</span>
				</div>
			</div>
			<ShowResult result={result} idealWeight={idealWeight}/>
		</>
	)
}
