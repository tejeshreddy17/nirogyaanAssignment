const express = require("express")
const app = express();
const port = 3002;

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

app.listen(port, function() {
    console.log(`Server started successfully at ${port}`);
   });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get("/", async (request, response) => {
    try {
        
    const message = "Post Created Successfully"
    response.send(JSON.stringify(sampleMedicationData));
    }

     catch (error) {
      console.log(`error at api-1 ${error.message}`);
    }
  });  

app.post("/",async(request,response)=>{
  try{
    response.send(JSON.stringify(request))

  }catch(error){
    console.log("error at posting PDF")
  }
})