import './FourthSection.css';

export function FourthSection() {
	return (
		<section id='fourthSection'>
      <div id="fourthSection-1">
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not
          suited for every person. Specific groups should carefully consider their
          BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div id="fourthSection-2">
          <div id="gender" className="fourthSection-2-Item">
            <div className="fourthSection-2-Item-Content">
              <div className="fourthSection-2-Item-Content-Title">
                <img src="/assets/images/icon-gender.svg" alt="gender" />
                <h5>Gender</h5>
              </div>
              <p>
                The development and body fat composition of girls and boys vary with age. Consequently,
                a child's age and gender are considered when evaluating their BMI.
              </p>
            </div>
          </div>

          <div className="fourthSection-2-Item">
            <div className="fourthSection-2-Item-Content">
              <div className="fourthSection-2-Item-Content-Title">
                <img src="/assets/images/icon-age.svg" alt="age" />
                <h5>Age</h5>
              </div>
              <p>
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
                body fat content.
              </p>
            </div>
          </div>

          <div className="fourthSection-2-Item">
            <div className="fourthSection-2-Item-Content">
              <div className="fourthSection-2-Item-Content-Title">
                <img src="/assets/images/icon-muscle.svg" alt="muscle" />
                <h5>Muscle</h5>
              </div>
              <p>
                BMI may misclassify muscular
                individuals as overweight or obese, as
                it doesn't differentiate muscle from fat.
              </p>
            </div>
          </div>

          <div className="fourthSection-2-Item">
            <div className="fourthSection-2-Item-Content">
              <div className="fourthSection-2-Item-Content-Title">
                <img src="/assets/images/icon-pregnancy.svg" alt="pregnancy" />
                <h5>Pregnancy</h5>
              </div>
              <p>
                Expectant mothers experience weight
                gain due to their growing baby.
                Maintaining a healthy pre-pregnancy
                BMI is advisable to minimise health
                risks for both mother and child.
              </p>
            </div>
          </div>

          <div className="fourthSection-2-Item">
            <div className="fourthSection-2-Item-Content">
              <div className="fourthSection-2-Item-Content-Title">
                <img src="/assets/images/icon-race.svg" alt="race" />
                <h5>Race</h5>
              </div>
              <p>
                Certain health concerns may affect
                individuals of some Black and Asian
                origins at lower BMIs than others. To
                learn more, it is advised to discuss this
                with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
    </section>
	)
}
