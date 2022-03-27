import {Component} from 'react'

import './index.css'

const sampleMedicationData = {
  patient_name: 'Joyneel Acharya',
  date_of_birth: '16 May 1991',
  date_of_issue: '30 Nov 2020',
  medications: [
    {
      medication_name: 'IBUPROFEN 600 MG TAB',
      medication_reason: 'For Treatment of lower back Pain',
      image_side_A:
        'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648392818/capsule_uldqez.png',
      image_side_B:
        'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648392818/capsule_uldqez.png',
      no_of_medications_to_be_consumed_at_a_time: [1],
      no_of_times_tablet_to_be_taken: 4,
      period_of_usage: 4,

      timings: ['8.00AM', '12.00NOON', '4.00PM', '8.00PM'],
      directions_to_use:
        '1 tablet by mouth 4 times a day with food every 4 hours',
      detail_directions: '',
      possible_side_effects: [
        {
          side_effect: 'Headache',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648393786/sick_vybnmy.png',
        },
        {
          side_effect: 'Dizziness',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648393999/dizziness_xpotxw.png',
        },
      ],
      medical_emergency_reasons:
        'Experiencing chest pain,shortness of breath and rapid weight gain',
    },
    {
      medication_name: 'INSULIN, GLARGINE, HUMAN 100 UNT/ML INJ',
      medication_reason: 'For Treatment of lower back Pain',
      image_side_A:
        'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648395993/injection_xirfep.png',
      image_side_B: '',
      no_of_medications_to_be_consumed_at_a_time: [1],
      no_of_times_tablet_to_be_taken: 4,
      timings: ['BED TIME'],
      period_of_usage: 4,
      directions_to_use: '1 injection at bedtime',
      detail_directions:
        'Inject 10 ml vial under the skin as directed for 28 days inject 25 units under the skin at bedtime do not mix with other insulins/discard open vials after 28 days.',
      possible_side_effects: [
        {
          side_effect: 'Headache',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648393786/sick_vybnmy.png',
        },
        {
          side_effect: 'Nausea',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648394597/vomit_rendhf.png',
        },
        {
          side_effect: 'Fatigue',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648394714/exhausted-man_q4lkhp.png',
        },
      ],
      medical_emergency_reasons:
        'Experiencing itching skin, wheezing and fast heart rate',
    },
    {
      medication_name: 'terazosin hcl 2mg capsule',
      medication_reason: 'For treatment of symptoms of an enlarged prostate.',
      image_side_A:
        'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648392818/capsule_uldqez.png',
      image_side_B: '',
      no_of_medications_to_be_consumed_at_a_time: [1, 1, 1],
      no_of_times_tablet_to_be_taken: '',
      period_of_usage: '',
      directions_to_use: '3 capsules before bed',
      timings: ['BED TIME'],
      possible_side_effects: [
        {
          side_effect: 'Dizziness',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648393999/dizziness_xpotxw.png',
        },
        {
          side_effect: 'Headache',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648393786/sick_vybnmy.png',
        },
        {
          side_effect: 'Constipation',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648395052/diarrhea_fcdnnp.png',
        },
        {
          side_effect: 'Loss of appetite',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648395151/lack-of-appetite_v94zgb.png',
        },
        {
          side_effect: 'Fatigue',
          logo:
            'https://res.cloudinary.com/tejeshreddy17/image/upload/v1648394714/exhausted-man_q4lkhp.png',
        },
      ],
      medical_emergency_reasons: '',
    },
  ],
}

const MedicineData = props => {
  const {medicine} = props
  return (
    <div className="medicine-container">
      <h1 className="tablet-name">{medicine.medication_name.toUpperCase()}</h1>
      <div className="sections">
        <div className="left-section">
          <p className="tablet-appearance">APPEARANCE</p>
          <img
            alt="tablet"
            className="tablet-image"
            src={medicine.image_side_A}
          />
          <p className="tablet-appearance">REASON FOR MEDICATION</p>
          <p className="medication_reason">{medicine.medication_reason}</p>
        </div>
        <div className="middle-section">
          <p className="tablet-appearance">DIRECTIONS / NOTES</p>
          <p className="directions-of-usage">{medicine.directions_to_use}</p>
          {medicine.detail_directions !== '' && (
            <p className="detailed-directions">{medicine.detail_directions}</p>
          )}
          <div className="tabletscontainer">
            {medicine.timings.map(timing => (
              <div className="tablets-container">
                {medicine.no_of_medications_to_be_consumed_at_a_time.map(
                  eachtime => (
                    <img
                      alt="tablet"
                      className="tablet-image"
                      src={medicine.image_side_A}
                    />
                  ),
                )}
              </div>
            ))}
          </div>
          <div className="timingsContainer">
            {medicine.timings.map(timing => (
              <p>{timing}</p>
            ))}
          </div>
        </div>
        <div className="right-section">
          <p className="tablet-appearance">POSSIBEL SIDE EFFECTS</p>
          {medicine.possible_side_effects.map(sideEffect => (
            <div className="side-effect-container">
              <img className="logo-capsule" src={sideEffect.logo} />
              <p className="side-effect-heading">{sideEffect.side_effect}</p>
            </div>
          ))}
          {medicine.medical_emergency_reasons !== '' && (
            <>
              <p className="medical-help-heading">GET MEDICAL HELP IF</p>
              <p className="medication_reason">
                {medicine.medical_emergency_reasons}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

class MedicationPage extends Component {
  render() {
    return (
      <div className="app-background">
        <nav className="header-container">
          <div className="header-main-heading-container">
            <h1 className="heading">Medications</h1>
            <div className="logo-container">
              <img
                className="logo-capsule"
                alt="capsule"
                src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648389940/pill-capsule_zbsv5x.png"
              />
              <h1 className="main-heading">
                Active Medications ({sampleMedicationData.medications.length})
              </h1>
            </div>
          </div>
          <div className="all-details-container">
            <div className="details-container">
              <p className="sub-heading">Patient Name</p>
              <p className="patient-details">
                {sampleMedicationData.patient_name}
              </p>
            </div>
            <div className="details-container">
              <p className="sub-heading">Date of Birth</p>
              <p className="patient-details">
                {sampleMedicationData.date_of_birth}
              </p>
            </div>
            <div className="details-container">
              <p className="sub-heading">Date of Issue</p>
              <p className="patient-details">
                {sampleMedicationData.date_of_issue}
              </p>
            </div>
          </div>
        </nav>
        <hr className="border-line" />
        <div className="medication-container">
          {sampleMedicationData.medications.map(medicine => (
            <MedicineData medicine={medicine} />
          ))}
        </div>
      </div>
    )
  }
}

export default MedicationPage
