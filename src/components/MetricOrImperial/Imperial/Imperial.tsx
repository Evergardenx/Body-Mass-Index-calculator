import { useState, useEffect, ChangeEvent } from "react";
import { ShowResult } from "../ShowResult/ShowResult";

export function Imperial() {
	const [ftValue, setFtValue] = useState<number>(0);
	const [inValue, setInValue] = useState<number>(0);
	const [stValue, setStValue] = useState<number>(0);
	const [lbsValue, setLbsValue] = useState<number>(0);
	const [result, setResult] = useState<string>("");
	const [idealWeight, setIdealWeight] = useState<number[]>([]);

	const oneFtToCm = 30.48; //Source = Google
	const oneInToCm = 2.54;
	const oneKgToSt = 0.15747304;
	const numberLbsForOneSt = 14;
	const numberInForOneFt = 12;

	useEffect(() => {
		if(ftValue !== 0 && inValue !== 0 && stValue !== 0 && lbsValue !== 0) {
			const height = (ftValue * numberInForOneFt) + inValue;
			const weight = (stValue * numberLbsForOneSt) + lbsValue;
			const bmi = ((weight / (height * height)) * 703).toFixed(1);
			setResult(bmi);
			const idealWeightMaxKg = (ftValue * oneFtToCm) + (inValue * oneInToCm) - 100;
			const idealWeightMaxSt = Math.floor(idealWeightMaxKg * oneKgToSt);
			const idealWeightMaxLbs = Math.round((idealWeightMaxKg * oneKgToSt - idealWeightMaxSt) * numberLbsForOneSt);
			setIdealWeight([idealWeightMaxSt, idealWeightMaxLbs]);
		}
	}, [ftValue, inValue, stValue, lbsValue])

	const inputOnChangeImperial = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target.id === 'ftValue') {
			setFtValue(parseInt(e.target.value));
		} else if(e.target.id === 'inValue'){
			setInValue(parseInt(e.target.value))
		} else if(e.target.id === 'stValue') {
			setStValue(parseInt(e.target.value))
		} else {
			setLbsValue(parseInt(e.target.value))
		}
	}

	return (
		<>
			<div id="firstSectionImperial">
				<div className="firstSectionImperial">
					<label id="label" htmlFor="height">Height</label>
					<div className="imperialInput">
						<input type="text" id="ftValue" onChange={inputOnChangeImperial} placeholder='0'/>
						<span id="ft">ft</span>
						<input type="text" id="inValue" onChange={inputOnChangeImperial} placeholder='0'/>
						<span id="in">in</span>
					</div>
				</div>
				<div className="firstSectionImperial">
					<label htmlFor="weight">Weight</label>
					<div className="imperialInput">
						<input type="text" id="stValue" onChange={inputOnChangeImperial} placeholder='0'/>
						<span id="st">st</span>
						<input type="text" id="lbsValue" onChange={inputOnChangeImperial} placeholder='0'/>
						<span id="lbs">lbs</span>
					</div>
				</div>
			</div>
			<ShowResult result={result} idealWeight={idealWeight}/>
		</>
	)
}
