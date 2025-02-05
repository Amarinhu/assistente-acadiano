import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { useEffect, useState } from "react";
import avatarSvg from "../../assets/images/avatar.svg";

const CriadorPersonagem = () => {

  /*
  Metadado:
    Nome.
    Idade.
    Nascimento.
    Gênero.
    Pronomes.
    Espécie.<br />
    Redondinha / Corpulento, 
    Amazona / Maciço, 
    Curvilínea / Sólido, 
    Esbelta / Esbelto
  */

  const cabeca = [
    { "FormatoCabeca": ["redondo", "oval", "quadrado", "pontudo"] },
    { "Olho": ["amendoado", "redondo", "oblongo"] },
    { "OlhoIris": ["humano", "cabra", "felino", "dupla"] },
    { "OlhoCor": ["Color-Wheel"] },
    { "Sobrancelha": ["arqueada", "reta", "espessa"] },
    { "SobrancelhaExp": ["levantada", "franzida", "relaxada", "curvada", "desconfiada"] },
    { "Nariz": ["fino", "reto", "arredondado"] },
    { "Boca": ["sorridente", "neutra", "triste", "seria", "sarcástica", "descontraída"] },
    { "Orelha": ["normal", "pontiaguda", "caída"] },
    {
      "Cabelo": [
        "liso", "ondulado", "cacheado", "crespo",
        "curto", "médio", "longo", "coque",
        "rabo de cavalo", "trançado", "com franja", "despenteado"
      ]
    },
    {
      "PeloFacial": [
        "barba cheia", "barba por fazer", "bigode",
        "cavanhaque", "barba curta", "estilo lenhador"
      ]
    },
    { "Sarda": ["sim", "não"] },
    { "Cicatriz": ["linear", "irregular", "diagonal", "vertical", "horizontal"] },
    { "Piercing": ["nariz", "sobrancelha", "orelha", "lábio", "umbigo", "septo"] },
    { "Tatuagem": ["tribal", "realista", "minimalista", "geométrica", "old school", "aquarela"] }
  ];

  const [cores, defCores] = useState({
    "cabeca-pescoco": "lightgray",
    "bracos-torax": "lightgray",
    "maos": "lightgray",
    "pernas-quadril": "lightgray",
    "pes": "lightgray",
  });

  const alterarCor = (parte: string) => {
    defCores((coresAnt) => {
      const novasCores: any = { ...coresAnt };

      for (let cor in novasCores) {
        novasCores[cor] = cor === parte ? "#00A3FF" : "gray";
      }

      return novasCores;
    });
  };

  return (
    <div>
      <div className="ion-text-center">
        <svg opacity={"75%"} viewBox="0 0 200 400" width="200" height="400" xmlns="http://www.w3.org/2000/svg">
          {/* Define Grid Pattern */}
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
            </pattern>
          </defs>

          {/* Head + Neck */}
          <g id="head-neck" onClick={() => alterarCor("cabeca-pescoco")}>
            <circle cx="100" cy="40" r="25" fill={cores["cabeca-pescoco"]} />
            <rect x="85" y="45" width="30" height="40" rx="10" fill={cores["cabeca-pescoco"]} />
            <circle cx="100" cy="40" r="25" fill="url(#grid-pattern)" />
            <rect x="85" y="45" width="30" height="40" rx="10" fill="url(#grid-pattern)" />
          </g>

          {/* Legs + Hips */}
          <g id="legs-hips" onClick={() => alterarCor("pernas-quadril")}>
            <rect x="70" y="160" width="60" height="60" rx="15" fill={cores["pernas-quadril"]} />
            <rect x="70" y="190" width="25" height="150" rx="12" fill={cores["pernas-quadril"]} />
            <rect x="105" y="190" width="25" height="150" rx="14" fill={cores["pernas-quadril"]} />
            <rect x="70" y="160" width="60" height="60" rx="15" fill="url(#grid-pattern)" />
            <rect x="70" y="190" width="25" height="150" rx="12" fill="url(#grid-pattern)" />
            <rect x="105" y="190" width="25" height="150" rx="14" fill="url(#grid-pattern)" />
          </g>

          {/* Arms + Chest */}
          <g id="arms-chest" onClick={() => alterarCor("bracos-torax")}>
            <rect x="65" y="75" width="70" height="110" rx="30" ry="15" fill={cores["bracos-torax"]} />
            <rect x="40" y="85" width="25" height="110" rx="10" fill={cores["bracos-torax"]} />
            <rect x="135" y="85" width="25" height="110" rx="10" fill={cores["bracos-torax"]} />
            <rect x="40" y="85" width="25" height="110" rx="10" fill="url(#grid-pattern)" />
            <rect x="135" y="85" width="25" height="110" rx="10" fill="url(#grid-pattern)" />
            <rect x="65" y="75" width="70" height="110" rx="30" ry="15" fill="url(#grid-pattern)" />
          </g>

          {/* Hands */}
          <g id="hands" onClick={() => alterarCor("maos")}>
            <rect x="40" y="190" width="25" height="25" rx="8" fill={cores["maos"]} />
            <rect x="135" y="190" width="25" height="25" rx="8" fill={cores["maos"]} />
            <rect x="40" y="190" width="25" height="25" rx="8" fill="url(#grid-pattern)" />
            <rect x="135" y="190" width="25" height="25" rx="8" fill="url(#grid-pattern)" />
          </g>

          {/* Feet */}
          <g id="feet" onClick={() => alterarCor("pes")}>
            <rect x="65" y="320" width="30" height="25" rx="8" fill={cores["pes"]} />
            <rect x="105" y="320" width="30" height="25" rx="8" fill={cores["pes"]} />
            <rect x="65" y="320" width="30" height="25" rx="8" fill="url(#grid-pattern)" />
            <rect x="105" y="320" width="30" height="25" rx="8" fill="url(#grid-pattern)" />
          </g>
        </svg>
      </div>
      <div>
        <IonGrid>
          {cabeca.map((partes: any, indice) => (
            <IonRow key={indice} style={{ padding: "0px" }}>
              <IonCol size="1" className="ion-text-center" style={{ padding: "0px", border: "gray solid 1px" }}>
                {indice}
              </IonCol>
              <IonCol className="ion-text-center" style={{ padding: "0px", border: "lightblue solid 1px" }}>
                {Object.keys(partes)[0]}
              </IonCol>
              <IonCol className="ion-text-center" style={{ padding: "0px", border: "purple solid 1px" }}>
                {partes[Object.keys(partes)[0]].join(", ")}
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </div>
    </div>
  );
};

export default CriadorPersonagem;
