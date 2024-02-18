import './ThirdSection.css';

export function ThirdSection() {
	return (
		<section id='thirdSection'>
      <div id='thirdSection-1'>
        <div className="thirdSectionItem">
          <img src="/assets/images/icon-eating.svg" alt="iconEating" />
          <div>
            <h4>Healthy eating</h4>
            <p>
              Healthy eating promotes weight control,
              disease prevention, better digestion, immunity,
              mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src="/assets/images/icon-exercise.svg" alt="iconExercice" />
          <div>
            <h4>Regular exercise</h4>
            <p>
              Exercise improves fitness, aids weight control,
              elevates mood, and reduces disease risk,
              fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src="/assets/images/icon-sleep.svg" alt="iconeSleep" />
          <div>
            <h4>Adequate sleep</h4>
            <p>
              Sleep enhances mental clarity, emotional
              stability, and physical wellness, promoting
              overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </section>
	)
}
