'use strict';
const allRows = [ { questionid: 70,
    num_of_people_correct: 0,
    num_of_people_incorrect: 8,
    date: '2016-07-11',
    a_count: 1,
    b_count: 2,
    c_count: 0,
    d_count: 4,
    e_count: 1,
    question: '70. Which one of the following is the recommended duration of thromboprophylaxis following totalhip arthroplasty, starting from the day of surgery and including outpatient prophylaxis?',
    answer: 'C',
    reason: '0For patients undergoing major orthopedic surgery, the American College of Chest Physicians recommendsoutpatient thromboprophylaxis for a duration of up to 35 days. Older recommendations for 10\'9614 days ofprophylaxis were based on studies performed when this was the usual hospital stay. This is stillrecommended as the minimum length for prophylaxis, but a longer period of time is preferred. Ref: Guyatt GH, Akl EA, Crowther M, et al: Executive summary: Antithrombotic therapy and prevention of thrombosis, 9thed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest 2012;141(2 Suppl):7S-47S. ',
    genre: 'GYN',
    a_option: 'A) 7 days',
    b_option: 'B) 14 days',
    c_option: 'C) 35 days',
    d_option: 'D) 60 days',
    e_option: 'E) 90 days' },
  { questionid: 17,
    num_of_people_correct: 5,
    num_of_people_incorrect: 3,
    date: '2016-07-11',
    a_count: 1,
    b_count: 1,
    c_count: 5,
    d_count: 1,
    e_count: 0,
    question: '17. You receive a telephone call from the mother of a 5-year-old female. The child has had diarrheaand a decreased appetite for the past 2 days. She is still playing some. The mother reports novomiting, but says her daughter has complained of a dry mouth and does not have tears whenshe cries. You suspect that the child may be mildly dehydrated.Which one of the following would you advise?',
    answer: 'C',
    reason: '7When children show signs of dehydration from diarrhea, the first step is to assess its extent. In one study,four factors predicted dehydration: a capillary refill time >2 seconds, the absence of tears, dry mucousmembranes, and an ill general appearance; the presence of two or more of these signs indicates a fluiddeficit of at least 5%. This child has two of the signs, but does not require intravenous fluids at this point.Early oral rehydration therapy is recommended and can be started at home. This should be done using anoral rehydration solution that is designed for children (SOR C). Adult oral rehydration solutions shouldnot be used in children.5Water and other clear liquids, even those with sodium, such as chicken broth, should not replace an oralrehydration solution because they are hyperosmolar. These fluids do not adequately replace potassium,bicarbonate, or sodium, and can sometimes cause hyponatremia. Antidiarrheal medications are usually notrecommended for use in children with acute gastroenteritis because they delay the elimination of infectiousagents from the intestines. Ref: Canavan A, Arant BS Jr: Diagnosis and management of dehydration in children. Am Fam Physician 2009;80(7):692-696.2) Churgay CA, Aftab Z: Gastroenteritis in children: Part II. Prevention and management. Am Fam Physician2012;85(11):1066-1070. ',
    genre: 'Endocrine',
    a_option: 'A) Increased water intake',
    b_option: 'B) Clear liquids with sodium, such as chicken broth',
    c_option: 'C) An over-the-counter oral rehydration solution',
    d_option: 'D) Intravenous fluids in the emergency department',
    e_option: 'E) Loperamide (Imodium)' },
  { questionid: 92,
    num_of_people_correct: 3,
    num_of_people_incorrect: 5,
    date: '2016-07-11',
    a_count: 3,
    b_count: 5,
    c_count: 0,
    d_count: 0,
    e_count: 0,
    question: '92. Which one of the following cardiovascular changes is a recognized age-related effect?',
    answer: 'A',
    reason: '2Maximal heart rate with exercise generally decreases with age. A frequently used formula for predictingmaximal heart rate is 220 minus age, with a correction factor of 0.85 often applied for females, who havea lower peak heart rate and a more gradual decline.Myocardial collagen and mass both increase with age. The increase in collagen may play a role indecreasing left ventricular compliance. The resting heart rate, like the maximal exercising heart rate,decreases with normal aging. Tachycardia at rest may suggest a pathologic state. Ref: Halter JB, Ouslander JG, Tinetti ME, et al (eds): Hazzard\'92s Geriatric Medicine and Gerontology, ed 6. McGraw-HillMedical, 2009, pp 883-895. 2) Fillit HM, Rockwood K, Woodhouse K (eds): Brocklehurst\'92s Textbook of GeriatricMedicine and Gerontology, ed 7. Saunders Elsevier, 2010, pp 91-97. 31',
    genre: 'OB',
    a_option: 'A) Decreased maximal heart rate with exercise',
    b_option: 'B) Decreased myocardial collagen',
    c_option: 'C) Decreased myocardial mass',
    d_option: 'D) Increased left ventricular compliance',
    e_option: 'E) Increased heart rate at rest' },
  { questionid: 109,
    num_of_people_correct: 7,
    num_of_people_incorrect: 1,
    date: '2016-07-11',
    a_count: 7,
    b_count: 0,
    c_count: 0,
    d_count: 1,
    e_count: 0,
    question: '109. A 22-year-old male who is training for a marathon presents with a 2-week history of ankle pain.There is no history of trauma to the ankle. Your examination reveals tenderness over the distaltibia and you suspect a stress fracture.The initial imaging study of choice for this patient\'92s ankle is',
    answer: 'A',
    reason: '09Plain radiography should be the initial imaging modality to diagnose stress fractures (SOR C). Onealgorithm advocates radiography 2 weeks after the onset of symptoms (if symptoms persist), with repeatradiography the following week before performing more advanced imaging. An expert panel of theAmerican College of Radiology recommends that MRI be considered next if plain radiography is negative. Ref: Patel DS, Roth M, Kapil N: Stress fractures: Diagnosis, treatment , and prevention. Am Fam Physician 2011;83(1):39-46. ',
    genre: 'PEDS',
    a_option: 'A) a plain radiograph',
    b_option: 'B) ultrasonography',
    c_option: 'C) CT',
    d_option: 'D) MRI',
    e_option: 'E) a radionuclide bone scan' },
  { questionid: 239,
    num_of_people_correct: 6,
    num_of_people_incorrect: 2,
    date: '2016-07-11',
    a_count: 1,
    b_count: 0,
    c_count: 6,
    d_count: 1,
    e_count: 0,
    question: '239. A 54-year-old white female presents to your office for a well care visit. She has no physicalcomplaints and her last examination was 5 years ago. Routine laboratory work reveals analkaline phosphatase level of 300 U/L (N <135). Ultrasonography of the liver is normal. Youare concerned about the possibility of primary biliary cirrhosis.Which one of the following would be most appropriate for further evaluation of this patient?',
    answer: 'C',
    reason: '39Antimitochondrial antibodies are positive in 90% of patients with primary biliary cirrhosis and this test isthe first step for ruling out the disease. A liver biopsy is the most important test in antimitochondrialantibody\'96negative primary biliary cirrhosis, but it is not the initial test of choice. Antinuclear antibodytesting, anti\'96smooth muscle antibody testing, and magnetic resonance cholangiopancreatography are notappropriate. Ref: Goldman L, Schafer AI (eds): Goldman\'92s Cecil Medicine, ed 24. Elsevier Saunders, 2011, pp 1014-1015.',
    genre: 'GI',
    a_option: 'A) An antinuclear antibody level',
    b_option: 'B) An anti\'96smooth muscle antibody level',
    c_option: 'C) An antimitochondrial antibody level',
    d_option: 'D) Magnetic resonance cholangiopancreatography (MRCP)',
    e_option: 'E) A liver biopsy' },
  { questionid: 37,
    num_of_people_correct: 5,
    num_of_people_incorrect: 0,
    date: '2016-07-08',
    a_count: 0,
    b_count: 0,
    c_count: 3,
    d_count: 0,
    e_count: 2,
    question: '37. Which one of the following cardiac rhythm abnormalities is most common in patients withanorexia nervosa?',
    answer: 'C',
    reason: '7Sinus bradycardia is almost universally present in patients with anorexia nervosa. It is hypothesized thatthis is due to vagal hyperactivity resulting from an attempt to decrease the amount of cardiac work byreducing cardiac output. It is also possible that the bradycardia can be accounted for by low serum T3 levels, a common finding in persons with chronic malnutrition. Sinus tachycardia may occur with refeedingin patients with anorexia. Other arrhythmias may also occur but are less frequent. Ref: Casiero D, Frishman WH: Cardiovascular complications of eating disorders. Cardiol Rev 2006;14(5):227\'96231. 2) WilliamsPM, Goodie J, Motsinger CD: Treating eating disorders in primary care. Am Fam Physician 2008;77(2):187-195. ',
    genre: 'Orthopedic',
    a_option: 'A) Atrial fibrillation',
    b_option: 'B) Ventricular fibrillation',
    c_option: 'C) Sinus bradycardia',
    d_option: 'D) Sinus tachycardia',
    e_option: 'E) Paroxysmal supraventricular tachycardia' },
  { questionid: 159,
    num_of_people_correct: 5,
    num_of_people_incorrect: 0,
    date: '2016-07-08',
    a_count: 5,
    b_count: 0,
    c_count: 0,
    d_count: 0,
    e_count: 0,
    question: '159. Misleadingly low serum sodium can be caused by',
    answer: 'A',
    reason: '59A decrease in serum sodium concentration does not always indicate a decrease in osmolality of body fluids.In cases of hyperglycemia, the main cause of the hyponatremia is the glucose-related increase in osmolalityof extracellular fluid, followed by the movement of water from intracellular to extracellular fluidcompartments and a subsequent loss of excessive extracellular fluid and electrolytes. The serum sodiumconcentration is also diminished in patients with hyperlipidemia or hyperproteinuria because of the volumeoccupied by the lipids or proteins. If the lipids or proteins are removed, the sodium concentration in theremaining plasma is found to be normal. No treatment is needed for these conditions. Ref: Rakel RE, Rakel DP (eds): Textbook of Family Medicine, ed 8. Elsevier Saunders, 2011, p 200. ',
    genre: 'Preventative Health',
    a_option: 'A) hyperglycemia',
    b_option: 'B) diuretic use',
    c_option: 'C) heart failure',
    d_option: 'D) renal disease',
    e_option: 'null' },
  { questionid: 118,
    num_of_people_correct: 3,
    num_of_people_incorrect: 2,
    date: '2016-07-08',
    a_count: 0,
    b_count: 1,
    c_count: 1,
    d_count: 0,
    e_count: 3,
    question: '118. A 31-year-old gravida 2 para 2 sees you for a routine annual visit. Her Papanicolaou (Pap) testis normal and high-risk HPV testing is negative. She has never had an abnormal Pap test.According to the guidelines of the U.S. Preventive Services Task Force and the AmericanCollege of Obstetricians and Gynecologists, this patient\'92s cervical cytology and HPV testingshould be repeated in',
    answer: 'E',
    reason: '18In women 30\'9665 years old, screening for cervical cancer with cervical cytology and HPV testing isrecommended every 5 years. An alternative screening recommendation is to perform cervical cytologyonly, at 3-year intervals. A population study of 331,818 women demonstrated a 0.016% risk of cancer inthe 5 years after having a negative result on both cervical cytology and an HPV test. Ref: American College of Obstetricians and Gynecologists: Screening for cervical cancer. ACOG Practice Bulletin, no 131,2012. 2) US Preventive Services Task Force: Screening for cervical cancer. April 2012. ',
    genre: 'Preventative Health',
    a_option: 'A) 1 year',
    b_option: 'B) 2 years',
    c_option: 'C) 3 years',
    d_option: 'D) 4 years',
    e_option: 'E) 5 years' },
  { questionid: 121,
    num_of_people_correct: 5,
    num_of_people_incorrect: 0,
    date: '2016-07-08',
    a_count: 5,
    b_count: 0,
    c_count: 0,
    d_count: 0,
    e_count: 0,
    question: '121. A 40-year-old male presents with a sudden onset of unilateral peripheral facial nerve weakness1 hour ago. Which one of the following is most likely to shorten his symptoms?',
    answer: 'A',
    reason: '21This patient has Bell\'92s palsy. Only corticosteroids have been shown to improve the outcome. Antiviralagents have little value in the treatment of Bell\'92s palsy. Thrombolytic therapy may be useful for a patientwith central facial nerve weakness if it is due to a vascular event (level of evidence 3; SOR A). Ref: Holland J, Bernstein J: Bell palsy. Am Fam Physician 2011;84(8):947-948. 41',
    genre: 'OB',
    a_option: 'A) Corticosteroid therapy',
    b_option: 'B) Antiviral therapy',
    c_option: 'C) Thrombolytic therapy',
    d_option: 'D) Hyperbaric oxygen therapy',
    e_option: 'E) Facial nerve decompression' },
  { questionid: 142,
    num_of_people_correct: 4,
    num_of_people_incorrect: 1,
    date: '2016-07-08',
    a_count: 0,
    b_count: 0,
    c_count: 4,
    d_count: 1,
    e_count: 0,
    question: '142. Which one of the following is associated with a herald patch?',
    answer: 'C',
    reason: '42In 50%\'9690% of patients, pityriasis rosea starts with an erythematous, scaly, oval patch a few centimetersin diameter. This is usually followed within a few days by smaller patches on the trunk and sometimes theproximal extremities. Pityriasis rubra pilaris is a rare disease with five types. The classic adult type beginswith a small red plaque on the face or upper body that gradually spreads to become a generalized eruption.The other conditions listed typically begin with multiple lesions. Ref: Habif TP: Clinical Dermatology: A Color Guide to Diagnosis and Therapy, ed 5. Mosby Elsevier, 2010, pp 309-311,316-319, 332-333, 537-540, 771. 2) Goldman L, Schafer AI (eds): Goldman\'92s Cecil Medicine, ed 24. Elsevier Saunders,2011, pp 2518-2520. ',
    genre: 'GU',
    a_option: 'A) Pityriasis alba',
    b_option: 'B) Pityriasis lichenoides',
    c_option: 'C) Pityriasis rosea',
    d_option: 'D) Pityriasis rubra pilaris',
    e_option: 'E) Pityriasis (tinea) versicolor' },
  { questionid: 236,
    num_of_people_correct: 5,
    num_of_people_incorrect: 1,
    date: '2016-07-07',
    a_count: 1,
    b_count: 3,
    c_count: 0,
    d_count: 0,
    e_count: 2,
    question: '236. Which one of the following is associated with vitamin B12 deficiency?',
    answer: 'B',
    reason: '36An association with vitamin B12 deficiency has been noted for metformin, proton pump inhibitors, andH2 -blockers. It is not known whether supplementation in patients taking these drugs will prevent this, butmonitoring vitamin B12 levels may be useful. Prednisone, insulin glargine, gabapentin, and risperidonehave not been associated with vitamin B12 deficiency. Ref: Langan RC, Zawistoski KJ: Update on vitamin B12 deficiency. Am Fam Physician 2011;83(12):1425-1430. ',
    genre: 'GYN',
    a_option: 'A) Prednisone',
    b_option: 'B) Metformin (Glucophage)',
    c_option: 'C) Insulin glargine (Lantus)',
    d_option: 'D) Gabapentin (Neurontin)',
    e_option: 'E) Risperidone (Risperdal)' },
  { questionid: 190,
    num_of_people_correct: 5,
    num_of_people_incorrect: 1,
    date: '2016-07-07',
    a_count: 1,
    b_count: 0,
    c_count: 0,
    d_count: 0,
    e_count: 5,
    question: '190. Long-term alleviation of carpal tunnel syndrome in patients with persistent symptoms is bestaccomplished by which one of the following?',
    answer: 'E',
    reason: '90NSAIDs, pyridoxine, and diuretics have been shown to be no more effective than placebo in the treatmentof patients with carpal tunnel syndrome. Splinting, physical therapy, and corticosteroid injections have allbeen shown to result in short-term improvement. Patients with persistent symptoms achieve the bestlong-term relief with surgery. Ref: Daniels JM, Muller MH: Hand and Wrist Injuries. FP Essentials monograph series, no 400, 2012, pp 34-38. 63',
    genre: 'GYN',
    a_option: 'A) Splinting',
    b_option: 'B) Physical therapy',
    c_option: 'C) Ibuprofen',
    d_option: 'D) Corticosteroid injection',
    e_option: 'E) Surgery' },
  { questionid: 141,
    num_of_people_correct: 3,
    num_of_people_incorrect: 3,
    date: '2016-07-07',
    a_count: 2,
    b_count: 1,
    c_count: 0,
    d_count: 0,
    e_count: 3,
    question: '141. A 15-year-old male has a 1-week history of a nonproductive cough, a low-grade fever, a sorethroat, and hoarseness. His respiratory rate is 22/min but unlabored, his temperature is 38.1\'c5\'e3C(100.6\'c5\'e3F), and his O2 saturation is 94% on room air. A chest radiograph reveals bilateralinterstitial infiltrates.Which one of the following treatments would be most appropriate for this patient?',
    answer: 'E',
    reason: '41Community-acquired pneumonia in children over the age of 5 is most commonly due to Mycoplasmapneumoniae, Chlamydophila pneumoniae, and Streptococcus pneumoniae. Less common bacterialinfections include Haemophilus influenzae, Staphylococcus aureus, and group A Streptococcus. Initialtreatment with antibiotics is empiric, as the pathogen is usually unknown at the time of diagnosis. Thechoice in children is based on age, severity of illness, and local patterns of resistance. Children age 5\'9616years who can be treated as outpatients are usually treated with oral azithromycin. For patients requiringinpatient management, intravenous cefuroxime plus either intravenous erythromycin or azithromycin isrecommended.47 Ref: Stuckey-Schrock K, Hayes BL, George CM: Community-acquired pneumonia in children. Am Fam Physician2012;86(7):661-667. ',
    genre: 'PEDS',
    a_option: 'A) Ceftriaxone (Rocephin)',
    b_option: 'B) Amoxicillin',
    c_option: 'C) Cefdinir',
    d_option: 'D) Linezolid (Zyvox)',
    e_option: 'E) Azithromycin (Zithromax)' },
  { questionid: 125,
    num_of_people_correct: 0,
    num_of_people_incorrect: 6,
    date: '2016-07-07',
    a_count: 2,
    b_count: 4,
    c_count: 0,
    d_count: 0,
    e_count: 0,
    question: '125. A 55-year-old female receives a gynecologic and breast examination from a nurse practitioner,who also orders a routine mammogram. Who is legally responsible for ensuring that the patientis notified of the results of the mammogram?',
    answer: 'C',
    reason: '25While it is certainly appropriate for the nurse practitioner or physician who ordered the test to notify thepatient of mammography results, the facility performing the test is legally responsible. This is specifiedby the federal Mammography Quality Standards Act, first passed by Congress in 1992. Ref: Mammography Quality Standards Act Regulations. US Food and Drug Administration, 2009, sec 900.12(c)(2). ',
    genre: 'OB',
    a_option: 'A) The nurse practitioner',
    b_option: 'B) The supervising physician',
    c_option: 'C) The facility performing the mammogram',
    d_option: 'D) The patient',
    e_option: 'null' },
  { questionid: 75,
    num_of_people_correct: 4,
    num_of_people_incorrect: 2,
    date: '2016-07-07',
    a_count: 4,
    b_count: 1,
    c_count: 1,
    d_count: 0,
    e_count: 0,
    question: '75. According to national and international guidelines, which one of the following is the next stepfor adults with asthma who require therapy with inhaled _-agonists more than three times aweek?',
    answer: 'A',
    reason: '5Patients who require inhalation therapy with \u00032-adrenergic-receptor agonists more than twice weekly butnot daily have mild persistent asthma. Long-term control with inhaled corticosteroids is recommended foradults with persistent asthma. Ref: Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma. National Asthma Education andPrevention Program, NIH pub no 07-4051, 2007, pp 211-217. 25',
    genre: 'GYN',
    a_option: 'A) Inhaled glucocorticoids',
    b_option: 'B) Inhaled salmeterol (Serevent)',
    c_option: 'C) Sustained-release oral _-agonists',
    d_option: 'D) Sustained-release oral theophylline',
    e_option: 'null' },
  { questionid: 87,
    num_of_people_correct: 1,
    num_of_people_incorrect: 0,
    date: '2016-07-09',
    a_count: 0,
    b_count: 0,
    c_count: 0,
    d_count: 1,
    e_count: 0,
    question: '87. A 62-year-old male with a 20-year history of diabetes mellitus presents with bilateral calf andbuttock pain that occurs after he walks 2 blocks. The symptoms are relieved with rest. Onexamination his pedal pulses are not palpable and his ankle-brachial index is 1.45.Which one of the following would be most appropriate?',
    answer: 'D',
    reason: '7The National Health and Nutrition Examination Survey (NHANES) found that 1.4% of adults over 40 havean ankle-brachial index (ABI) >1.4; this group accounts for approximately 20% of all adults withperipheral artery disease. An ABI >1.4 indicates noncompressible arteries (calcified vessels). In patientswith arterial calcification, such as diabetic patients, more reliable information is often obtained by usingtoe pressures to calculate a toe-brachial index and from pulse volume recordings.29Vascular imaging should be used to confirm peripheral vascular disease. MR or CT arteriography, duplexscanning, and hemodynamic localization are noninvasive methods for lesion localization and may behelpful when symptoms or findings do not correlate with the ABI. Contrast arteriography is used fordefinitive localization before intervention. Ref: Resnick HE, Foster GL: Prevalence of elevated ankle-brachial index in the United States 1999 to 2002. Am J Med2005;118(6):676-679. 2) Sontheimer DL: Peripheral vascular disease: Diagnosis and treatment. Am Fam Physician2006;73(11):1971-1976. 3) Met R, Bipat S, Legemate DA, et al: Diagnostic performance of computed tomographyangiography in peripheral arterial disease: A systematic review and meta-analysis. JAMA 2009;301(4):415-424. 4) HaukL: ACCF/AHA update peripheral artery disease management guideline. Am Fam Physician 2012;85(10):1000-1001. ',
    genre: 'GU',
    a_option: 'A) Reassuring the patient that his ankle-brachial index is normal',
    b_option: 'B) MRI of the lumbar spine',
    c_option: 'C) A repeat evaluation in 6 months if the symptoms persist',
    d_option: 'D) MR or CT angiography of the lower extremities',
    e_option: 'null' },
  { questionid: 223,
    num_of_people_correct: 0,
    num_of_people_incorrect: 1,
    date: '2016-07-09',
    a_count: 0,
    b_count: 0,
    c_count: 1,
    d_count: 0,
    e_count: 0,
    question: '223. You attend the cesarean delivery of a full-term male infant with no prenatal risk factors otherthan breech position. The infant was received from the operating team crying and vigorous,with Apgar scores of 8 at 1 minute and 9 at 5 minutes.An hour later, the infant becomes ashen-blue in color with an O2 saturation of 82%. He is alertand tachypneic, with a heart rate of 140 beats/min and a normal temperature. You ordersupplemental oxygen.Which one of the following is the most appropriate next step in managing this patient?',
    answer: 'E',
    reason: '23Cyanosis and tachypnea may be a sign of transient tachypnea of the newborn (TTN), or may be the firstsigns of a more serious health condition. Many of the severe conditions may be ruled out through thehistory (hyaline membrane disease is unlikely in this full-term infant) and physical examination (choanalatresia may be ruled out at the bedside). After these initial steps are taken, a chest radiograph andlaboratory studies will help rule out many urgent and life-threatening conditions, such as pneumothorax,pneumonia, severe anemia, sepsis, etc. An EKG is less helpful in determining causes since it cannotdifferentiate defects that cause cyanotic heart disease. Infusion of prostaglandin E 1 should be started onlyif the condition is determined to be ductal dependent; this is not the case in this scenario. Bag-maskventilation is not warranted in this child, who is alert and breathing and has a normal heart rate. At thistime it is reasonable to start investigations into the cause of the child\'92s problems before resorting to moreextreme measures such as intubation. Ref: Hermansen CL, Lorah KN: Respiratory distress in the newborn. Am Fam Physician 2007;76(7):987-994. 2) Tutdibi E,Gries K, B\'fccheler M, et al: Impact of labor on outcomes in transient tachypnea of the newborn: Population-based study.Pediatrics 2010;125(3):e577-e583. ',
    genre: 'Endocrine',
    a_option: 'A) Bag-mask ventilation with 100% oxygen',
    b_option: 'B) Endotracheal intubation',
    c_option: 'C) Prostaglandin E1 infusion',
    d_option: 'D) An EKG',
    e_option: 'E) A chest radiograph and laboratory studies' },
  { questionid: 135,
    num_of_people_correct: 0,
    num_of_people_incorrect: 1,
    date: '2016-07-09',
    a_count: 0,
    b_count: 0,
    c_count: 0,
    d_count: 1,
    e_count: 0,
    question: '135. A 42-year-old female has a 3-day history of an intensely pruritic rash on her arm, shown below.Which one of the following is most likely to have caused these skin lesions?',
    answer: 'E',
    reason: '35Rhus dermatitis is an allergic phytodermatitis caused by poison ivy and other members of theAnacardiaceae plant family, including poison oak and poison sumac. Urushiol, an oleoresin found in theseplants, is one of the most common sensitizers in the United States. Contact with these plants results in thecharacteristic pruritic erythematous linear lesions with papules and edematous plaques, vesicles, and/orbullae. The lesions typically appear 48 hours to a few days after exposure and occur on exposed areas.However, lesions can also occur on remote sites such as the face and penis due to transfer of the oleoresin,and may not have the characteristic linear appearance. Nickel, which is contained in jewelry and metalsin clothing, produces an eczematous eruption, often with lichenification over the affected areas. Balsamof Peru (present in topical medications) and neomycin cause allergic contact dermatitis in the area ofapplication and are nonlinear in appearance. Bedbug bites appear as pruritic erythematous macules withcentral hemorrhagic puncta, often in a grouped distribution (SOR C). Ref: Habif TP: Clinical Dermatology: A Color Guide to Diagnosis and Therapy, ed 5. Mosby Elsevier, 2010, pp 12-15, 34-39.2) Studdiford JS, Conniff KM, Trayes KP, Tully AS: Bedbug infestation. Am Fam Physician 2012;86(7):653-658. 3)Longo DL, Fauci AS, Kasper DL, et al (eds): Harrison\'92s Principles of Internal Medicine, ed 18. McGraw-Hill, 2012, pp395-404. ',
    genre: 'GU',
    a_option: 'A) Balsam of Peru',
    b_option: 'B) Bedbugs',
    c_option: 'C) Neomycin',
    d_option: 'D) Nickel',
    e_option: 'E) Poison ivy' },
  { questionid: 45,
    num_of_people_correct: 0,
    num_of_people_incorrect: 1,
    date: '2016-07-09',
    a_count: 0,
    b_count: 0,
    c_count: 0,
    d_count: 1,
    e_count: 0,
    question: '45. A 16-year-old afebrile, otherwise healthy female presents with a 4-day history of right ear pain.She says she has spent a fair amount of time swimming recently. Traction on the pinna causespain. The erythema and inflammation is limited to the ear canal but there is too much edema toeasily visualize the tympanic membrane.Which one of the following would be the most appropriate treatment?',
    answer: 'D',
    reason: '5Acute otitis externa is treated with topical antibiotics. Although no preparation has been shown to be mosteffective, a fluoroquinolone does not create a risk of ototoxicity if the tympanic membrane is not intact.Topical corticosteroids may hasten symptom reduction. Oral antibiotics are not appropriate unless theinfection has spread beyond the ear canal, or if the patient has diabetes mellitus or is immunocompromised. Ref: Schaefer P, Baugh RF: Acute otitis externa: An update. Am Fam Physician 2012;86(11):1055-1061. ',
    genre: 'Preventative Health',
    a_option: 'A) Amoxicillin',
    b_option: 'B) Amoxicillin/clavulanate (Augmentin)',
    c_option: 'C) Amoxicillin/clavulanate plus acetic acid 2% topically',
    d_option: 'D) Ciprofloxacin 0.3%/dexamethasone 0.1% (Ciprodex) topically',
    e_option: 'null' },
  { questionid: 127,
    num_of_people_correct: 1,
    num_of_people_incorrect: 0,
    date: '2016-07-09',
    a_count: 1,
    b_count: 0,
    c_count: 0,
    d_count: 0,
    e_count: 0,
    question: '127. A 72-year-old male is brought to your office by a friend because of increasing confusion,irritability, and difficulty walking. This began shortly after the patient\'92s car broke down in arural area and he had to walk a mile to get to a phone and call the friend. The temperatureoutdoors has been near 100\'c5\'e3F.On examination the patient has a rectal temperature of 39.5\'c5\'e3C (103.1\'c5\'e3F), a pulse rate of 110beats/min, and a blood pressure of 100/60 mm Hg. His shirt is still damp with sweat.Which one of this patient\'92s findings indicates that he has heatstroke rather than heat exhaustion?',
    answer: 'A',
    reason: '27Heat exhaustion and heatstroke are both on the continuum of heat-related illness. Heatstroke is a muchmore severe condition than heat exhaustion. Evidence of central nervous system dysfunction is evidenceof heatstroke rather than heat exhaustion, even if other symptoms are not severe and point to heatexhaustion. Heatstroke is a medical emergency. Ref: Glazer JL: Management of heatstroke and heat exhaustion. Am Fam Physician 2005;71(11):2133-2140, 2141-2142. 2)Marx JA (ed): Rosen\'92s Emergency Medicine: Concepts and Clinical Practice, ed 7. Mosby Elsevier, 2010, pp 1887-1890. ',
    genre: 'PEDS',
    a_option: 'A) Confusion',
    b_option: 'B) Sweating',
    c_option: 'C) His temperature',
    d_option: 'D) His heart rate',
    e_option: 'E) His blood pressure' },
  { questionid: 225,
    num_of_people_correct: 1,
    num_of_people_incorrect: 3,
    date: '2016-07-12',
    a_count: 0,
    b_count: 1,
    c_count: 1,
    d_count: 2,
    e_count: 0,
    question: '225. A 62-year-old African-American male is admitted to the hospital for the third time in 6 monthswith heart failure. He has dyspnea with minimal activity. Echocardiography reveals an ejectionfraction of 40%.Which one of the following combinations of medications is most appropriate for long-termmanagement of this patient?',
    answer: 'B',
    reason: '25The combination of the vasodilators hydralazine and isosorbide dinitrate has been shown to be effectivein the treatment of heart failure when standard treatment with diuretics, \u0003-blockers, and an ACE inhibitor(or ARB) is insufficient to control symptoms or cannot be tolerated. This combination is particularlyeffective in African-Americans with NYHA class III or IV heart failure, with advantages including reducedmortality rates and improvement in quality-of-life measures. Digoxin, a long-time standard for thetreatment of heart failure, is useful in reducing the symptoms of heart failure but has not been shown toimprove survival. Amlodipine and other calcium channel blockers do not have a direct role in the treatmentof heart failure. Ref: Drugs for chronic heart failure. Treat Guidel Med Lett 2012;10(121):69-72. 75',
    genre: 'Endocrine',
    a_option: 'A) Enalapril (Vasotec) plus digoxin',
    b_option: 'B) Hydralazine plus isosorbide dinitrate',
    c_option: 'C) Losartan (Cozaar) plus amlodipine (Norvasc)',
    d_option: 'D) Spironolactone (Aldactone) plus bisoprolol (Zebeta)',
    e_option: 'null' },
  { questionid: 148,
    num_of_people_correct: 2,
    num_of_people_incorrect: 2,
    date: '2016-07-12',
    a_count: 2,
    b_count: 0,
    c_count: 0,
    d_count: 2,
    e_count: 0,
    question: '148. Which one of the following medications used to treat psychiatric disorders is associated with anincreased risk of agranulocytosis?',
    answer: 'A',
    reason: '48People taking carbamazepine have a five- to eightfold increased risk of developing agranulocytosis.Baseline values including a CBC, serum electrolytes, and liver enzymes should be obtained before the drugis started, and the patient should be monitored with periodic hematologic testing. The other medicationslisted are not associated with agranulocytosis. Aripiprazole and olanzapine carry black box warnings foran increased risk of death in the elderly. Lithium is associated with lithium toxicity and thyroiddysfunction. Imipramine carries a warning for cardiac toxicity, and EKG monitoring is recommended. Ref: Stem TA, Rosenbaum JF, Fava M, et al (eds): Massachusetts General Hospital Comprehensive Clinical Psychiatry. Mosby,2008, pp 40-42. ',
    genre: 'GYN',
    a_option: 'A) Carbamazepine (Tegretol)',
    b_option: 'B) Lithium',
    c_option: 'C) Aripiprazole (Abilify)',
    d_option: 'D) Olanzapine (Zyprexa)',
    e_option: 'E) Imipramine (Tofranil)' },
  { questionid: 85,
    num_of_people_correct: 2,
    num_of_people_incorrect: 2,
    date: '2016-07-12',
    a_count: 0,
    b_count: 2,
    c_count: 0,
    d_count: 2,
    e_count: 0,
    question: '85. A 24-year-old gravida 2 para 1 at 10 weeks gestation presents with fever, myalgias, headache,and malaise. There have been multiple cases of influenza in the community and her influenzaswab is positive.Which one of the following is recommended by the Centers for Disease Control and Preventionin this situation?',
    answer: 'B',
    reason: '5The Centers for Disease Control and Prevention (CDC) recommends treatment for persons at higher riskfor complications from influenza. Pregnant women and postpartum women within 2 weeks of delivery areconsidered to be at higher risk. Some data has shown that early antiviral treatment may shorten the durationof symptoms and reduce the risk of complications, especially in these higher risk populations.The CDC recommends against using adamantines due to increased resistance of influenza viruses. Otherantivirals such as acyclovir and famciclovir are not active against influenza A and B. The recommendedtreatment of influenza in pregnancy is one of the neuraminidase inhibitors. Ref: Fiore AE, Fry A, Shay D, et al: Antiviral agents for the treatment and chemoprophylaxis of influenza\'97Recommendationsof the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep 2011;60(1):1-24. 2) Influenzaantiviral medications: Summary for clinicians. Centers for Disease Control and Prevention, 2013. ',
    genre: 'GU',
    a_option: 'A) Rimantadine (Flumadine)',
    b_option: 'B) Oseltamivir (Tamiflu)',
    c_option: 'C) Acyclovir (Zovirax)',
    d_option: 'D) Supportive therapy only',
    e_option: 'null' },
  { questionid: 63,
    num_of_people_correct: 3,
    num_of_people_incorrect: 1,
    date: '2016-07-12',
    a_count: 0,
    b_count: 1,
    c_count: 0,
    d_count: 0,
    e_count: 3,
    question: '63. Pretibial myxedema is a cutaneous manifestation of',
    answer: 'E',
    reason: '3Pretibial myxedema is a complication of Graves disease, whether it presents as hypo- or hyperthyroidism.It is a dermopathy that most often occurs in the lower legs and results from increased deposition of mucindue to the endocrine abnormality. Diabetes mellitus can cause necrobiosis lipoidica, a lesion on the lowerextremities; hyperlipidemia can cause waxy papules; and collagen vascular and ischemic disease can causeurticaria and/or ulceration. Ref: Goldman L, Schafer AI (eds): Goldman\'92s Cecil Medicine, ed 24. Elsevier Saunders, 2011, pp e69-e70. ',
    genre: 'GU',
    a_option: 'A) subclinical diabetes mellitus',
    b_option: 'B) collagen vascular disease',
    c_option: 'C) hyperlipidemia, type III',
    d_option: 'D) ischemia',
    e_option: 'E) Graves disease' },
  { questionid: 119,
    num_of_people_correct: 4,
    num_of_people_incorrect: 0,
    date: '2016-07-12',
    a_count: 0,
    b_count: 0,
    c_count: 4,
    d_count: 0,
    e_count: 0,
    question: '119. A 59-year-old male college professor presents with a 2-month history of right medial knee pain.There is no history of injury or overuse. He has no other specific joint pain except for occasionalmyalgias and arthralgias of his legs and arms. On most days he has morning stiffness lasting15\'9620 minutes after getting out of bed. A review of systems is otherwise negative.On examination the right knee has full range of motion. There is tenderness at the medial jointline, but no clicking or ligamentous instability. There is crepitus with movement in both knees.Which one of the following diagnostic tests would be most appropriate at this time?',
    answer: 'C',
    reason: '19The most likely diagnosis for this patient\'92s knee pain is osteoarthritis. While he is likely to have diseasein both knees, it is common for patients to have unilateral symptoms, especially early on. Althoughosteoarthritis is mainly a clinical diagnosis, plain radiography is the diagnostic study of choice if there isconcern about other diagnostic possibilities. Narrowing of the medial compartment of the knee joint istypically the first radiographic finding; osteophytes are also commonly seen on plain films. In the scenariopresented here, there is no need for laboratory testing at this time. Ref: Sinusas K: Osteoarthritis: Diagnosis and treatment. Am Fam Physician 2012;85(1):49-56. ',
    genre: 'PEDS',
    a_option: 'A) Serologic testing',
    b_option: 'B) Synovial fluid analysis',
    c_option: 'C) Plain radiography',
    d_option: 'D) MRI without contrast',
    e_option: 'E) MRI with contrast' } ];

    module.exports = allRows;