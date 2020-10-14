import React, {useState} from "react";
import Magikarp from "../resources/flopping.jpg";
import "../styles/aboutpagestyles.css";


const AboutPage = () => {
  var mysteryHeaders = [
    "VmlzaW9u",
    "TWFuYWdlbWVudA==", 
    "QXdhcmRzIGFuZCBhY2hpZXZlbWVudHM=",
    "T3VyIGNvbnN1bHRhbnRz",
  ];

  // Oppgave 1: Noe rart har skjedd med overskriftene på denne siden. Finn ut hva som er galt og
  //            skriv koden som gjør at correctHeaders blir en dekodet liste med riktige overskrifter.
  var correctHeading = []
  mysteryHeaders.forEach(element => {
    correctHeading.push(atob(element))
    
  });
  var correctHeaders = correctHeading;

  const badgeImageUrls = [
    "https://vignette.wikia.nocookie.net/pokemon/images/2/24/Boulderbadge.png/revision/latest/scale-to-width-down/50?cb=20100418182312",
    "https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Cascadebadge.png/revision/latest?cb=20140907085215",
    "https://vignette.wikia.nocookie.net/pokemon/images/a/a8/Thunderbadge.png/revision/latest?cb=20100418182457",
    "https://vignette.wikia.nocookie.net/pokemon/images/b/b5/Rainbow_Badge.png/revision/latest?cb=20141009005938",
    "https://vignette.wikia.nocookie.net/pokemon/images/6/64/Soulbadge.png/revision/latest?cb=20100418182548",
    "https://vignette.wikia.nocookie.net/pokemon/images/1/1c/Marshbadge.png/revision/latest/scale-to-width-down/49?cb=20100418182532",
    "https://vignette.wikia.nocookie.net/pokemon/images/d/d9/Volcanobadge.png/revision/latest?cb=20081229171449",
    "https://vignette.wikia.nocookie.net/pokemon/images/c/cc/Earthbadge.png/revision/latest/scale-to-width-down/50?cb=20101029071826",
  ];

  // Oppgave 2: Legg til en css-animasjon som utløses av at man holder musepekeren over hver av badgene.
      // Rosa og Spinner
  // Oppgave 3: Gjør slik at man blir viderekoblet til siden https://pokemon.fandom.com/wiki/Gym_Badges
  //            hvis man trykker på en badge.

  var badgeimages = badgeImageUrls.map((url) => {
    return <a href="https://pokemon.fandom.com/wiki/Gym_Badges" target="_blank"><img src={url} alt="new" className="badge-image" /></a>;
  });

  // Oppgave 4: For hver person i teamet deres:
  //            Legg til navn, rolle i teamet og en url/filsti til et bilde av personen
  //            som json-objekter i listen "consultants"
  var consultants = [
    {
      name: "Consultant 1",
      position: "Developer",
      imgUrl:
        "https://www.pngkit.com/png/detail/62-623222_pokemon-png-pack-ash-ketchum.png",
    },
    {
      name: "Consultant 2",
      position: "Tester",
      imgUrl:
        "https://www.clipartkey.com/mpngs/m/8-88479_pokemon-misty-png.png",
    },
    {
      name: "Consultant 3",
      position: "Project leader",
      imgUrl:
        "https://www.kindpng.com/picc/m/253-2533471_brock-pokemon-png-transparent-png.png",
    },
  ];

  // Oppgave 5: Lag en funksjon som returnerer et ansatt-kort for hvert teammedlem i listen "consultants"
  // Hint: Se på kortene som allerede er laget for ledelsen i Pokémon4Cash.
  // Oppgave 6: Style baksiden av ansattkortene slik dere selv mener de bør være stylet
  let consultantCards; // = *Funksjon som returnerer et ansattkort for hvert objekt i consultants*
  function consultantCards(consultents) {
    allConsultents = []
    consultents.forEach(element => {
      
      txt ='<div className="flip-card"> \
      <div className="flip-card-inner">\
        <div className="flip-card-front">\
          <img\
            src="'+element.imgUrl+'"\
            alt="new"\
            className="flip-card-image"\
          />\
        </div>\
        <div className="flip-card-back">\
          <h1>' + element.name + '</h1>\
          <h2>'+element.position +'</h2>\
        </div>\
      </div>\
    </div>'
    allConsultents.push(txt)
    });
    return allConsultents
}
  const [showMagik, setShowMagik] = useState(false);

  return (
    <div
      style={{ fontFamily: "sans-serif", maxWidth: "960px", margin: "auto" }}
    >
      <h2 className="subheader">{correctHeaders[0]}</h2>
      <p className="visionQuote">
        Pokémon4Cash aims to offer cute, ready-to-fight and deadly pets for
        everyone!
      </p>
      <h2 className="subheader">{correctHeaders[1]}</h2>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.pngkit.com/png/detail/62-623222_pokemon-png-pack-ash-ketchum.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Ash</h1>
              <h2>CEO</h2>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.clipartkey.com/mpngs/m/8-88479_pokemon-misty-png.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Misty</h1>
              <h2>IT-Director</h2>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.kindpng.com/picc/m/253-2533471_brock-pokemon-png-transparent-png.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back" onClick={() => {setShowMagik(!showMagik)}}>
            {!showMagik ?
              <React.Fragment>
                <h1>Brock</h1>
                <h2>Trainer</h2>
              </React.Fragment>
              :
              <React.Fragment>
                <img
                src={Magikarp}
                style={{ objectFit: "contain" }}
                alt="Fish in a barrel" 
                title="The secret word is: UGFsbGV0IFRvd24="
                />
              </React.Fragment>
              }
            </div>
          </div>
        </div>
      </div>
      <h2 className="subheader">{correctHeaders[2]}</h2>
      <div className="badge-container">{badgeimages}</div>
      <h2 className="subheader">{correctHeaders[3]}</h2>
      <div className="flip-card-container">{consultantCards}</div>
    </div>
  );
};

export default AboutPage;
