import { Injectable } from '@angular/core';
import { Claim, QuizQuestion } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly rawData = {
    document_title: '200 Proofs Earth is Not a Spinning Ball',
    author: 'Eric Dubay',
    claims: [
    {
      "id": 1,
      "claim_summary_hr": "Horizont je uvijek savršeno ravan u punom krugu, bez obzira na nadmorsku visinu promatrača.",
      "claim_full_text_en": "The horizon always appears perfectly flat 360 degrees around the observer regardless of altitude. [cite: 3] [cite_start]All amateur balloon, rocket, plane and drone footage show a completely flat horizon over 20+ miles high. [cite: 4] [cite_start]Only NASA and other government \"space agencies\" show curvature in their fake CGI photos/videos. [cite: 5]",
      "sources": [3, 4, 5]
    },
    {
      "id": 2,
      "claim_summary_hr": "Horizont se uvijek podiže na razinu očiju promatrača kako se visina povećava, što je nemoguće na globusu.",
      "claim_full_text_en": "The horizon always rises to the eye level of the observer as altitude is gained, so you never have to look down to see it. [cite: 17] [cite_start]If Earth were in fact a globe, no matter how large, as you ascended the horizon would stay fixed and the observer / camera would have to tilt looking down further and further to see it. [cite: 18] [cite_start]Over 20 Miles High, Horizon Still 100% Flat [cite: 19] [cite_start]adogcam [cite: 20]",
      "sources": [17, 18, 19, 20]
    },
    {
      "id": 3,
      "claim_summary_hr": "Voda je prirodno nivelirajuća, što je nekonzistentno s globusom koji se vrti.",
      "claim_full_text_en": "The natural physics of water is to find and maintain its level. [cite: 25] [cite_start]If Earth were a giant sphere tilted, wobbling and hurdling through infinite space then truly flat, consistently level surfaces would not exist here. [cite: 26] [cite_start]But since Earth is in fact an extended flat plane, this fundamental physical property of fluids finding and remaining level is consistent with experience and common sense. [cite: 27]",
      "sources": [25, 26, 27]
    },
    {
      "id": 4,
      "claim_summary_hr": "Rijeke teku prema moru, dok bi na rotirajućoj kugli neke morale teći uzbrdo (npr. Mississippi bi morala narasti 11 milja).",
      "claim_full_text_en": "Rivers run down to sea-level finding the easiest course, North, South, East, West and all other intermediary directions over the Earth at the same time. [cite: 6] [cite_start]If Earth were truly a spinning ball then many of these rivers would be impossibly flowing uphill, for example the Mississippi in its 3000 miles would have to ascend 11 miles before reaching the Gulf of Mexico. [cite: 7]",
      "sources": [6, 7]
    },
    {
      "id": 6,
      "claim_summary_hr": "Stajaća voda bi se trebala spuštati za 8 inča po milji na kvadratu udaljenosti, ali eksperimenti to demantiraju.",
      "claim_full_text_en": "If Earth were a ball 25,000 miles in circumference as NASA and modern astronomy claim, spherical trigonometry dictates the surface of all standing water must curve downward an easily measurable 8 inches per mile multiplied by the square of the distance. [cite: 21] [cite_start]This means along a 6 mile channel of standing water, the Earth would dip 6 feet on either end from the central peak. [cite: 22] [cite_start]Every time such experiments have been conducted, however, standing water has proven to be perfectly level. [cite: 23] [cite_start]Mount Everest [cite: 24]",
      "sources": [21, 22, 23, 24]
    },
    {
      "id": 7,
      "claim_summary_hr": "Geodeti, inženjeri i arhitekti ne uključuju zakrivljenost Zemlje u svoje projekte, poput kanala i željeznica, koje grade horizontalno.",
      "claim_full_text_en": "Surveyors, engineers and architects are never required to factor the supposed curvature of the Earth into their projects. [cite: 28] [cite_start]Canals, railways, bridges and tunnels for example are always cut and laid horizontally, often over hundreds of miles without any allowance for curvature. [cite: 29]",
      "sources": [28, 29]
    },
    {
      "id": 15,
      "claim_summary_hr": "Piloti bi morali stalno spuštati nos aviona kako bi ostali u zraku na zakrivljenoj Zemlji, spuštajući se 2777 stopa svake minute, što ne čine.",
      "claim_full_text_en": "If the Earth were truly a sphere 25,000 miles in circumference, airplane pilots would have to constantly correct their altitudes downwards so as to not fly straight off into \"outer space;\" [cite: 60] [cite_start]a pilot wishing to simply maintain their altitude at a typical cruising speed of 500 mph, would have to constantly dip their nose downwards and descend 2,777 feet (over half a mile) every minute! [cite: 61] [cite_start]Otherwise, without compensation, in one hour's time the pilot would find themselves 31.5 miles higher than expected. [cite: 62] [cite_start]If we were living on a Giant Ball [cite: 63]",
      "sources": [60, 61, 62, 63]
    },
    {
      "id": 20,
      "claim_summary_hr": "Topovske kugle ispaljene okomito trebale bi pasti daleko na zapad da se Zemlja okreće 1000 mph prema istoku, ali padaju samo 2 stope od topa.",
      "claim_full_text_en": "If Earth were truly constantly spinning Eastwards at over 1000mph, vertically-fired cannonballs and other projectiles should fall significantly due west. [cite: 98] [cite_start]In actual fact, however, whenever this has been tested, vertically-fired cannonballs shoot upwards an average of 14 seconds ascending, 14 seconds descending, and fall back to the ground no more than 2 feet away from the cannon, often directly back into the muzzle. [cite: 99] [cite_start]B [cite: 100] [cite_start]D [cite: 101] [cite_start]C [cite: 102]",
      "sources": [98, 99, 100, 101, 102]
    },
    {
      "id": 21,
      "claim_summary_hr": "Helikopteri i baloni bi mogli jednostavno lebdjeti i čekati da njihova odredišta dođu do njih zbog rotacije Zemlje.",
      "claim_full_text_en": "If the Earth were truly constantly spinning Eastwards at over 1000mph, helicopters and hot-air balloons should be able to simply hover over the surface of the Earth and wait for their destinations to come to them! [cite: 103] [cite_start]It would be spinning around a centre point, therefore the air closer to the ground will always move slower than the air higher up. [cite: 104]",
      "sources": [103, 104]
    },
    {
      "id": 32,
      "claim_summary_hr": "Ako je 'gravitacija' dovoljno jaka da drži oceane, zgrade i atmosferu zalijepljene, ne može istovremeno biti preslaba da dopusti pticama i avionima slobodno kretanje.",
      "claim_full_text_en": "If \"gravity\" is credited with being a force strong enough to hold the world's oceans, buildings, people and [cite: 125] [cite_start]atmosphere stuck to the surface of a rapidly spinning ball, then it is impossible for \"gravity\" to also simultaneously be weak enough to allow little birds, bugs, and planes to take- off and travel freely unabated in any direction. [cite: 125]",
      "sources": [124, 125]
    },
    {
      "id": 139,
      "claim_summary_hr": "Teleskopom se može ponovno vidjeti cijeli brod (uključujući trup) nakon što je \"nestao\" s golim okom, što dokazuje da je nestanak uzrokovan Zakonom perspektive, a ne zakrivljenošću vode.",
      "claim_full_text_en": "Not only is the disappearance of ship's hulls explained by the Law of Perspective on flat surfaces, it is proven undeniably true with the aid of a good telescope. [cite: 646] [cite_start]If you watch a ship sailing away into the horizon with the naked eye until its hull has completely disappeared from view under the supposed \"curvature of the Earth,\" then look through a telescope, you will notice the entire ship quickly zooms back into view, hull and all, proving that the disappearance was caused by the Law of Perspective, not by a wall of curved water! [cite: 647] [cite_start]This also proves that the horizon is simply the vanishing line of perspective from your point of view, NOT the alleged \"curvature\" of Earth. [cite: 648]",
      "sources": [646, 647, 648]
    },
    {
      "id": 142,
      "claim_summary_hr": "Nemoguće je teleskopom vidjeti preko oceana zbog vlage i gustoće zraka, ali je moguće vidjeti mnogo više na ravnoj Zemlji nego što bi bilo moguće na kugli.",
      "claim_full_text_en": "People claim that if the Earth were flat, they should be able to use a telescope and see clear across the oceans! [cite: 651] [cite_start]This is absurd, however, as the air is full of precipitation especially over the oceans, and especially at the lowest, densest layer of atmosphere is NOT transparent. [cite: 652] [cite_start]Picture the blurry haze over roads on hot, humid days. [cite: 653] [cite_start]Even the best telescope will blur out long before you could see across an ocean. [cite: 654] [cite_start]You can, however, use a telescope to zoom in [cite: 656] [cite_start]MUCH more of our flat Earth than would be possible on a ball 25,000 miles in circumference. [cite: 656]",
      "sources": [651, 652, 653, 654, 655, 656]
    }
  ]
  };

  getQuestions(numberOfQuestions: number = 10): QuizQuestion[] {
    const allClaims = this.rawData.claims;
    const shuffledClaims = this.shuffleArray([...allClaims]);
    const selectedClaims = shuffledClaims.slice(0, numberOfQuestions);

    return selectedClaims.map((claim) => {
      const correctAnswer = claim.claim_summary_hr;
      const distractors = this.getDistractors(claim, allClaims);
      const options = this.shuffleArray([correctAnswer, ...distractors]);

      return {
        id: claim.id,
        questionText: this.getQuestionFromClaim(claim),
        options: options,
        correctAnswer: correctAnswer,
        evidence: this.cleanEvidenceText(claim.claim_full_text_en),
      };
    });
  }

  private getQuestionFromClaim(claim: Claim): string {
    // A simple way to form a question
    return 'Koji od sljedećih argumenata podržava tvrdnju da...';
  }

  private getDistractors(correctClaim: Claim, allClaims: Claim[], count: number = 3): string[] {
    const distractors: string[] = [];
    const claimSummaries = allClaims.map(c => c.claim_summary_hr);
    const filteredSummaries = claimSummaries.filter(summary => summary !== correctClaim.claim_summary_hr);
    const shuffledSummaries = this.shuffleArray(filteredSummaries);
    
    for(let i=0; i< count; i++){
        distractors.push(shuffledSummaries[i]);
    }
    
    return distractors;
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private cleanEvidenceText(text: string): string {
    return text.replace(/\[cite: \d+\]|\[cite_start\]/g, ' ').replace(/\s\s+/g, ' ').trim();
  }
}
