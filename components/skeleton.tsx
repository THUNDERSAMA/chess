"use client";
import { useEffect, useState } from "react";
import "./skeleton.css";
import Image from "next/image";

interface Position {
  A0: string | null;
  B0: string | null;
  C0: string | null;
  D0: string | null;
  E0: string | null;
  F0: string | null;
  G0: string | null;
  H0: string | null;
  A1: string | null;
  B1: string | null;
  C1: string | null;
  D1: string | null;
  E1: string | null;
  F1: string | null;
  G1: string | null;
  H1: string | null;
  H2: string | null;
  H3: string | null;
  H4: string | null;
  H5: string | null;
  H6: string | null;
  H7: string | null;
  A2: string | null;
  B2: string | null;
  C2: string | null;
  D2: string | null;
  E2: string | null;
  F2: string | null;
  G2: string | null;
  A3: string | null;
  B3: string | null;
  C3: string | null;
  D3: string | null;
  E3: string | null;
  F3: string | null;
  G3: string | null;
  A4: string | null;
  B4: string | null;
  C4: string | null;
  D4: string | null;
  E4: string | null;
  F4: string | null;
  G4: string | null;
  A5: string | null;
  B5: string | null;
  C5: string | null;
  D5: string | null;
  E5: string | null;
  F5: string | null;
  G5: string | null;
  A6: string | null;
  B6: string | null;
  C6: string | null;
  D6: string | null;
  E6: string | null;
  F6: string | null;
  G6: string | null;
  A7: string | null;
  B7: string | null;
  C7: string | null;
  D7: string | null;
  E7: string | null;
  F7: string | null;
  G7: string | null;
}
export default function Skeleton() {
  // logic starts
  //default placing of icons
  const [iconPosition, setIconPosition] = useState<Position[]>([]);
  // const [prevnull, setPrevnull] = useState("");
  let movesPreserve: string[] = [];
  let clickPreserve: string[] = [];
  //   const [game, setGame] = useState(0);

  //   function setpos() {
  //     const pos: Position[] = [
  //       {
  //         A0: "boat",
  //         B0: "horse",
  //         C0: "elephant",
  //         D0: "queen",
  //         E0: "king",
  //         F0: "elephant",
  //         G0: "horse",
  //         H0: "boat",
  //         A1: "pawn",
  //         B1: "pawn",
  //         C1: "pawn",
  //         D1: "pawn",
  //         E1: "pawn",
  //         F1: "pawn",
  //         G1: "pawn",
  //         H1: "pawn",
  //         A2: null,
  //         B2: null,
  //         C2: null,
  //         D2: null,
  //         E2: null,
  //         F2: null,
  //         G2: null,
  //         H2: null,
  //         A3: null,
  //         B3: null,
  //         C3: null,
  //         D3: null,
  //         E3: null,
  //         F3: null,
  //         G3: null,
  //         H3: null,
  //         A4: null,
  //         B4: null,
  //         C4: null,
  //         D4: null,
  //         E4: null,
  //         F4: null,
  //         G4: null,
  //         H4: null,
  //         A5: null,
  //         B5: null,
  //         C5: null,
  //         D5: null,
  //         E5: null,
  //         F5: null,
  //         G5: null,
  //         H5: null,
  //         A6: "pawn-black",
  //         B6: "pawn-black",
  //         C6: "pawn-black",
  //         D6: "pawn-black",
  //         E6: "pawn-black",
  //         F6: "pawn-black",
  //         G6: "pawn-black",
  //         H6: "pawn-black",
  //         A7: "boat-black",
  //         B7: "horse-black",
  //         C7: "elephant-black",
  //         D7: "queen-black",
  //         E7: "king-black",
  //         F7: "elephant-black",
  //         G7: "horse-black",
  //         H7: "boat-black",
  //       },
  //     ];
  //     setIconPosition(pos);
  //     console.log(iconPosition);
  //   }
  //   if (game == 0) {
  //     setpos();
  //   }
  useEffect(() => {
    function setPos() {
      const pos: Position[] = [
        {
          A0: "boat",
          B0: "horse",
          C0: "elephant",
          D0: "queen",
          E0: "king",
          F0: "elephant",
          G0: "horse",
          H0: "boat",
          A1: "pawn",
          B1: "pawn",
          C1: "pawn",
          D1: "pawn",
          E1: "pawn",
          F1: "pawn",
          G1: "pawn",
          H1: "pawn",
          A6: "pawn-black",
          B6: "pawn-black",
          C6: "pawn-black",
          D6: "pawn-black",
          E6: "pawn-black",
          F6: "pawn-black",
          G6: "pawn-black",
          H6: "pawn-black",
          A7: "boat-black",
          B7: "horse-black",
          C7: "elephant-black",
          D7: "queen-black",
          E7: "king-black",
          F7: "elephant-black",
          G7: "horse-black",
          H7: "boat-black",
          H2: null,
          H3: null,
          H4: null,
          H5: null,
          A2: null,
          B2: null,
          C2: null,
          D2: null,
          E2: null,
          F2: null,
          G2: null,
          A3: null,
          B3: null,
          C3: null,
          D3: null,
          E3: null,
          F3: null,
          G3: null,
          A4: null,
          B4: null,
          C4: null,
          D4: null,
          E4: null,
          F4: null,
          G4: null,
          A5: null,
          B5: null,
          C5: null,
          D5: null,
          E5: null,
          F5: null,
          G5: null,
        },
      ];

      ///shuffle pieces
      // const pos: Position[] = [
      //   {
      //     A0: "king",
      //     B0: "pawn",
      //     C0: null,
      //     D0: "queen",
      //     E0: "elephant-black",
      //     F0: "horse",
      //     G0: null,
      //     H0: "pawn-black",
      //     A1: null,
      //     B1: "pawn",
      //     C1: null,
      //     D1: "boat-black",
      //     E1: "horse",
      //     F1: null,
      //     G1: "pawn-black",
      //     H1: null,
      //     A6: "pawn",
      //     B6: null,
      //     C6: "queen-black",
      //     D6: "boat",
      //     E6: "king-black",
      //     F6: null,
      //     G6: "elephant",
      //     H6: "pawn-black",
      //     A7: null,
      //     B7: null,
      //     C7: null,
      //     D7: null,
      //     E7: "boat-black",
      //     F7: null,
      //     G7: "horse-black",
      //     H7: null,
      //     H2: "pawn",
      //     H3: null,
      //     H4: null,
      //     H5: null,
      //     A2: "pawn-black",
      //     B2: "boat",
      //     C2: null,
      //     D2: "horse-black",
      //     E2: null,
      //     F2: null,
      //     G2: "king",
      //     A3: null,
      //     B3: "pawn",
      //     C3: "elephant",
      //     D3: null,
      //     E3: null,
      //     F3: null,
      //     G3: "elephant-black",
      //     A4: null,
      //     B4: null,
      //     C4: null,
      //     D4: "pawn-black",
      //     E4: null,
      //     F4: null,
      //     G4: null,
      //     A5: null,
      //     B5: "pawn",
      //     C5: null,
      //     D5: null,
      //     E5: null,
      //     F5: "elephant",
      //     G5: null,
      //   },
      // ];

      setIconPosition(pos);
    }

    setPos();
  }, []);
  //remove class of highlight for every button key in movesPreserve
  function removedisplayMoves() {
    movesPreserve.forEach((el) => {
      const element = document.getElementById(el);
      if (element) {
        element.classList.remove("bg-cell-highlight");
        element.classList.remove("bg-cell-warning");
      }
    });
    movesPreserve = [];
  }
  //higlights the cell and als put the cell id in movesPreserve
  function makeHighlight(iconKey: string) {
    const element = document.getElementById(iconKey);

    if (element) {
      element.classList.add("bg-cell-highlight");
      movesPreserve.push(iconKey);
    } else {
      console.error(`Element with ID ${iconKey} does not exist.`);
    }
  }
  //higlight border
  function makeborderHighlight(iconKey: string) {
    const element = document.getElementById(iconKey);

    if (element) {
      element.classList.add("bg-cell-border-highlight");
      clickPreserve.push(iconKey);
    } else {
      console.error(`Element with ID ${iconKey} does not exist.`);
    }
  }
  //higlights the cell warning and als put the cell id in movesPreserve
  function makeHighlightwarn(iconKey: string) {
    const element = document.getElementById(iconKey);

    if (element) {
      element.classList.add("bg-cell-warning");
      movesPreserve.push(iconKey);
    } else {
      console.error(`Element with ID ${iconKey} does not exist.`);
    }
  }
  //checks that particular cell is blocked by another piece or not
  function checkPosition(iconKey: string) {
    const ik: keyof Position = iconKey as keyof Position;
    return iconPosition[0][ik] == null ? true : false;
  }
  //checks that particular cell is blocked by another piece or not
  function checkPositionenemy(iconKey: string, enemy: string) {
    const ik: keyof Position = iconKey as keyof Position;
    if (iconPosition[0][ik] != null) {
      const piece = iconPosition[0][ik];
      if (enemy == "white") {
        if (piece.includes("black")) {
          return false;
        } else {
          return true;
        }
      } else {
        if (piece.includes("black")) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  //display all possible moves of currently hover cell
  //takes two params one as postion key and the other as string key
  function displayMoves(indexClicked: keyof Position, iconKey: string) {
    if (
      iconPosition.length > 0 &&
      iconPosition[0] &&
      iconPosition[0][indexClicked] != null
    ) {
      const piece = iconPosition[0][indexClicked];

      if (piece == "pawn-black") {
        //pawn logic starts
        //pawn moves front only,if at base can move 2 steps
        //if pawn black

        //check if at base
        if (iconKey.charAt(1) == "6") {
          if (checkPosition(iconKey.charAt(0) + "5")) {
            makeHighlight(iconKey.charAt(0) + "5");
            if (checkPosition(iconKey.charAt(0) + "4")) {
              makeHighlight(iconKey.charAt(0) + "4");
            }
          }

          //if there is a capture

          //ends
        } else {
          //if not at base
          if (parseInt(iconKey.charAt(1)) - 1 >= 0) {
            const nk = iconKey.charAt(0) + (parseInt(iconKey.charAt(1)) - 1);
            if (checkPosition(nk)) {
              makeHighlight(nk);
            }
          }
          //if there is a capture

          //ends
        }
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //top-left
        if (col - 1 >= 65 && row - 1 >= 0) {
          if (!checkPosition(String.fromCharCode(col - 1) + (row - 1))) {
            if (
              checkPositionenemy(
                String.fromCharCode(col - 1) + (row - 1),
                "white"
              )
            ) {
              makeHighlightwarn(String.fromCharCode(col - 1) + (row - 1));
            }
          }
        }
        //top-right
        if (col + 1 <= 72 && row - 1 >= 0) {
          if (!checkPosition(String.fromCharCode(col + 1) + (row - 1))) {
            if (
              checkPositionenemy(
                String.fromCharCode(col + 1) + (row - 1),
                "white"
              )
            ) {
              makeHighlightwarn(String.fromCharCode(col + 1) + (row - 1));
            }
          }
        }
      } else if (piece == "pawn") {
        //if pawn white

        //check if at base
        if (iconKey.charAt(1) == "1") {
          if (checkPosition(iconKey.charAt(0) + "2")) {
            makeHighlight(iconKey.charAt(0) + "2");
            if (checkPosition(iconKey.charAt(0) + "3")) {
              makeHighlight(iconKey.charAt(0) + "3");
            }
          }
          //if there is a capture

          //ends
        } else {
          //if not at base
          if (parseInt(iconKey.charAt(1)) + 1 <= 7) {
            const nk = iconKey.charAt(0) + (parseInt(iconKey.charAt(1)) + 1);
            if (checkPosition(nk)) {
              makeHighlight(nk);
            }
          }
          //if there is a capture

          //ends
        }
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //bottom-left
        if (col - 1 >= 65 && row + 1 <= 7) {
          if (!checkPosition(String.fromCharCode(col - 1) + (row + 1))) {
            if (
              checkPositionenemy(
                String.fromCharCode(col - 1) + (row + 1),
                "black"
              )
            ) {
              makeHighlightwarn(String.fromCharCode(col - 1) + (row + 1));
            }
          }
        }
        //bottom-right
        if (col + 1 <= 72 && row + 1 <= 7) {
          if (!checkPosition(String.fromCharCode(col + 1) + (row + 1))) {
            if (
              checkPositionenemy(
                String.fromCharCode(col + 1) + (row + 1),
                "black"
              )
            ) {
              makeHighlightwarn(String.fromCharCode(col + 1) + (row + 1));
            }
          }
        }
      } else if (piece == "boat-black") {
        //left
        //console.log(piece);
        // console.log(iconKey.charAt(0).charCodeAt(0) + 1);
        for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            break;
          }
        }
        //right
        for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            break;
          }
        }
        //top
        for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            break;
          }
        }
        //bottom
        for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            break;
          }
        }
      } else if (piece == "boat") {
        //left
        //console.log(piece);
        // console.log(iconKey.charAt(0).charCodeAt(0) + 1);
        for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //right
        for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //top
        for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //bottom
        for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
      } else if (piece == "horse-black") {
        //now it's a interesting logic
        //horse can do 8 moves
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));

        // 1
        if (col - 2 >= 65 && row + 1 <= 7) {
          if (checkPosition(String.fromCharCode(col - 2) + (row + 1))) {
            makeHighlight(String.fromCharCode(col - 2) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 2) + (row + 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 2) + (row + 1));
          }
        }

        // 2
        if (col - 2 >= 65 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col - 2) + (row - 1))) {
            makeHighlight(String.fromCharCode(col - 2) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 2) + (row - 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 2) + (row - 1));
          }
        }

        // 3
        if (col - 1 >= 65 && row - 2 >= 0) {
          if (checkPosition(String.fromCharCode(col - 1) + (row - 2))) {
            makeHighlight(String.fromCharCode(col - 1) + (row - 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row - 2),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row - 2));
          }
        }

        // 4
        if (col + 1 <= 72 && row - 2 >= 0) {
          if (checkPosition(String.fromCharCode(col + 1) + (row - 2))) {
            makeHighlight(String.fromCharCode(col + 1) + (row - 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row - 2),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row - 2));
          }
        }

        // 5
        if (col + 2 <= 72 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col + 2) + (row - 1))) {
            makeHighlight(String.fromCharCode(col + 2) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 2) + (row - 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 2) + (row - 1));
          }
        }

        // 6
        if (col + 2 <= 72 && row + 1 <= 7) {
          if (checkPosition(String.fromCharCode(col + 2) + (row + 1))) {
            makeHighlight(String.fromCharCode(col + 2) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 2) + (row + 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 2) + (row + 1));
          }
        }

        // 7
        if (col - 1 >= 65 && row + 2 <= 7) {
          if (checkPosition(String.fromCharCode(col - 1) + (row + 2))) {
            makeHighlight(String.fromCharCode(col - 1) + (row + 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row + 2),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row + 2));
          }
        }

        // 8
        if (col + 1 <= 72 && row + 2 <= 7) {
          if (checkPosition(String.fromCharCode(col + 1) + (row + 2))) {
            makeHighlight(String.fromCharCode(col + 1) + (row + 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row + 2),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row + 2));
          }
        }
      } else if (piece == "horse") {
        //now it's a interesting logic
        // Horse can do 8 moves
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));

        // 1
        if (col - 2 >= 65 && row + 1 <= 7) {
          if (checkPosition(String.fromCharCode(col - 2) + (row + 1))) {
            makeHighlight(String.fromCharCode(col - 2) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 2) + (row + 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 2) + (row + 1));
          }
        }

        // 2
        if (col - 2 >= 65 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col - 2) + (row - 1))) {
            makeHighlight(String.fromCharCode(col - 2) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 2) + (row - 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 2) + (row - 1));
          }
        }

        // 3
        if (col - 1 >= 65 && row - 2 >= 0) {
          if (checkPosition(String.fromCharCode(col - 1) + (row - 2))) {
            makeHighlight(String.fromCharCode(col - 1) + (row - 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row - 2),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row - 2));
          }
        }

        // 4
        if (col + 1 <= 72 && row - 2 >= 0) {
          if (checkPosition(String.fromCharCode(col + 1) + (row - 2))) {
            makeHighlight(String.fromCharCode(col + 1) + (row - 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row - 2),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row - 2));
          }
        }

        // 5
        if (col + 2 <= 72 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col + 2) + (row - 1))) {
            makeHighlight(String.fromCharCode(col + 2) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 2) + (row - 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 2) + (row - 1));
          }
        }

        // 6
        if (col + 2 <= 72 && row + 1 <= 7) {
          if (checkPosition(String.fromCharCode(col + 2) + (row + 1))) {
            makeHighlight(String.fromCharCode(col + 2) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 2) + (row + 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 2) + (row + 1));
          }
        }

        // 7
        if (col - 1 >= 65 && row + 2 <= 7) {
          if (checkPosition(String.fromCharCode(col - 1) + (row + 2))) {
            makeHighlight(String.fromCharCode(col - 1) + (row + 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row + 2),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row + 2));
          }
        }

        // 8
        if (col + 1 <= 72 && row + 2 <= 7) {
          if (checkPosition(String.fromCharCode(col + 1) + (row + 2))) {
            makeHighlight(String.fromCharCode(col + 1) + (row + 2));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row + 2),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row + 2));
          }
        }
      } else if (piece == "elephant-black") {
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //left diagonal top
        for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal top
        for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //left diagonal bottom
        for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal bottom
        for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
      } else if (piece == "elephant") {
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //left diagonal top
        for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal top
        for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //left diagonal bottom
        for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal bottom
        for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
      } else if (piece == "queen") {
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //left diagonal top
        for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal top
        for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //left diagonal bottom
        for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal bottom
        for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //left

        for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //right
        for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //top
        for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //bottom
        for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "black")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
      } else if (piece == "queen-black") {
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //left diagonal top
        for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal top
        for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //left diagonal bottom
        for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //right diagonal bottom
        for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
          if (checkPosition(String.fromCharCode(i) + j)) {
            makeHighlight(String.fromCharCode(i) + j);
          } else {
            if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
              makeHighlightwarn(String.fromCharCode(i) + j);
            }
            break;
          }
        }
        //left

        for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "white")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //right
        for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
          const nk = String.fromCharCode(i) + iconKey.charAt(1);
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "white")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //top
        for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "white")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
        //bottom
        for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
          const nk = iconKey.charAt(0) + i;
          if (checkPosition(nk)) {
            makeHighlight(nk);
          } else {
            if (checkPositionenemy(nk, "white")) {
              makeHighlightwarn(nk);
            }
            break;
          }
        }
      } else if (piece == "king-black") {
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //top-left
        if (col - 1 >= 65 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col - 1) + (row - 1))) {
            makeHighlight(String.fromCharCode(col - 1) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row - 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row - 1));
          }
        }
        //top
        if (row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col) + (row - 1))) {
            makeHighlight(String.fromCharCode(col) + (row - 1));
          } else if (
            checkPositionenemy(String.fromCharCode(col) + (row - 1), "white")
          ) {
            makeHighlightwarn(String.fromCharCode(col) + (row - 1));
          }
        }
        //top-right
        if (col + 1 <= 72 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col + 1) + (row - 1))) {
            makeHighlight(String.fromCharCode(col + 1) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row - 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row - 1));
          }
        }
        //right
        if (col + 1 <= 72) {
          if (checkPosition(String.fromCharCode(col + 1) + row)) {
            makeHighlight(String.fromCharCode(col + 1) + row);
          } else if (
            checkPositionenemy(String.fromCharCode(col + 1) + row, "white")
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + row);
          }
        }
        //right-bottom
        if (col + 1 <= 72 && row + 1 <= 8) {
          if (checkPosition(String.fromCharCode(col + 1) + (row + 1))) {
            makeHighlight(String.fromCharCode(col + 1) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row + 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row + 1));
          }
        }
        //bottom
        if (row + 1 <= 8) {
          if (checkPosition(String.fromCharCode(col) + (row + 1))) {
            makeHighlight(String.fromCharCode(col) + (row + 1));
          } else if (
            checkPositionenemy(String.fromCharCode(col) + (row + 1), "white")
          ) {
            makeHighlightwarn(String.fromCharCode(col) + (row + 1));
          }
        }
        //bottom-left
        if (col - 1 >= 65 && row + 1 <= 8) {
          if (checkPosition(String.fromCharCode(col - 1) + (row + 1))) {
            makeHighlight(String.fromCharCode(col - 1) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row + 1),
              "white"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row + 1));
          }
        }
        //left
        if (col - 1 >= 65) {
          if (checkPosition(String.fromCharCode(col - 1) + row)) {
            makeHighlight(String.fromCharCode(col - 1) + row);
          } else if (
            checkPositionenemy(String.fromCharCode(col - 1) + row, "white")
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + row);
          }
        }
      } else if (piece == "king") {
        const col = iconKey.charAt(0).charCodeAt(0);
        const row = parseInt(iconKey.charAt(1));
        //top-left
        if (col - 1 >= 65 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col - 1) + (row - 1))) {
            makeHighlight(String.fromCharCode(col - 1) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row - 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row - 1));
          }
        }
        //top
        if (row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col) + (row - 1))) {
            makeHighlight(String.fromCharCode(col) + (row - 1));
          } else if (
            checkPositionenemy(String.fromCharCode(col) + (row - 1), "black")
          ) {
            makeHighlightwarn(String.fromCharCode(col) + (row - 1));
          }
        }
        //top-right
        if (col + 1 <= 72 && row - 1 >= 0) {
          if (checkPosition(String.fromCharCode(col + 1) + (row - 1))) {
            makeHighlight(String.fromCharCode(col + 1) + (row - 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row - 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row - 1));
          }
        }
        //right
        if (col + 1 <= 72) {
          if (checkPosition(String.fromCharCode(col + 1) + row)) {
            makeHighlight(String.fromCharCode(col + 1) + row);
          } else if (
            checkPositionenemy(String.fromCharCode(col + 1) + row, "black")
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + row);
          }
        }
        //right-bottom
        if (col + 1 <= 72 && row + 1 <= 8) {
          if (checkPosition(String.fromCharCode(col + 1) + (row + 1))) {
            makeHighlight(String.fromCharCode(col + 1) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row + 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col + 1) + (row + 1));
          }
        }
        //bottom
        if (row + 1 <= 8) {
          if (checkPosition(String.fromCharCode(col) + (row + 1))) {
            makeHighlight(String.fromCharCode(col) + (row + 1));
          } else if (
            checkPositionenemy(String.fromCharCode(col) + (row + 1), "black")
          ) {
            makeHighlightwarn(String.fromCharCode(col) + (row + 1));
          }
        }
        //bottom-left
        if (col - 1 >= 65 && row + 1 <= 8) {
          if (checkPosition(String.fromCharCode(col - 1) + (row + 1))) {
            makeHighlight(String.fromCharCode(col - 1) + (row + 1));
          } else if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row + 1),
              "black"
            )
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + (row + 1));
          }
        }
        //left
        if (col - 1 >= 65) {
          if (checkPosition(String.fromCharCode(col - 1) + row)) {
            makeHighlight(String.fromCharCode(col - 1) + row);
          } else if (
            checkPositionenemy(String.fromCharCode(col - 1) + row, "black")
          ) {
            makeHighlightwarn(String.fromCharCode(col - 1) + row);
          }
        }
      }
    } else {
      makeHighlight(iconKey);
    }
  }
  //check move possible
  function movePossible(from: string, to: string) {
    const iconKey = from;
    const ik: keyof Position = iconKey as keyof Position;

    const piece = iconPosition[0][ik];
    if (piece == "pawn-black") {
      //pawn logic starts
      //pawn moves front only,if at base can move 2 steps
      //if pawn black

      //check if at base
      if (iconKey.charAt(1) == "6") {
        if (checkPosition(iconKey.charAt(0) + "5")) {
          if (iconKey.charAt(0) + "5" == to) {
            return true;
          } else {
            if (checkPosition(iconKey.charAt(0) + "4")) {
              if (iconKey.charAt(0) + "4" == to) {
                return true;
              }
            }
          }
        }

        //if there is a capture

        //ends
      } else {
        //if not at base
        if (parseInt(iconKey.charAt(1)) - 1 >= 0) {
          const nk = iconKey.charAt(0) + (parseInt(iconKey.charAt(1)) - 1);
          if (checkPosition(nk)) {
            if (nk == to) return true;
          }
        }
        //if there is a capture

        //ends
      }
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //top-left
      if (col - 1 >= 65 && row - 1 >= 0) {
        if (!checkPosition(String.fromCharCode(col - 1) + (row - 1))) {
          if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row - 1),
              "white"
            )
          ) {
            if (String.fromCharCode(col - 1) + (row - 1) == to) return true;
          }
        }
      }
      //top-right
      if (col + 1 <= 72 && row - 1 >= 0) {
        if (!checkPosition(String.fromCharCode(col + 1) + (row - 1))) {
          if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row - 1),
              "white"
            )
          ) {
            //makeHighlightwarn(String.fromCharCode(col + 1) + (row - 1));
            if (String.fromCharCode(col + 1) + (row - 1) == to) return true;
          }
        }
      }
    } else if (piece == "pawn") {
      //if pawn white

      //check if at base
      if (iconKey.charAt(1) == "1") {
        if (checkPosition(iconKey.charAt(0) + "2")) {
          if (iconKey.charAt(0) + "2" == to) {
            return true;
          } else {
            if (checkPosition(iconKey.charAt(0) + "3")) {
              if (iconKey.charAt(0) + "3" == to) {
                return true;
              }
            }
          }
        }
        //if there is a capture

        //ends
      } else {
        //if not at base
        if (parseInt(iconKey.charAt(1)) + 1 <= 7) {
          const nk = iconKey.charAt(0) + (parseInt(iconKey.charAt(1)) + 1);
          if (checkPosition(nk)) {
            if (nk == to) return true;
          }
        }
        //if there is a capture

        //ends
      }
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //bottom-left
      if (col - 1 >= 65 && row + 1 <= 7) {
        if (!checkPosition(String.fromCharCode(col - 1) + (row + 1))) {
          if (
            checkPositionenemy(
              String.fromCharCode(col - 1) + (row + 1),
              "black"
            )
          ) {
            if (String.fromCharCode(col - 1) + (row + 1)) return true;
          }
        }
      }
      //bottom-right
      if (col + 1 <= 72 && row + 1 <= 7) {
        if (!checkPosition(String.fromCharCode(col + 1) + (row + 1))) {
          if (
            checkPositionenemy(
              String.fromCharCode(col + 1) + (row + 1),
              "black"
            )
          ) {
            if (String.fromCharCode(col + 1) + (row + 1)) return true;
          }
        }
      }
    } else if (piece == "boat-black") {
      //left
      //console.log(piece);
      // console.log(iconKey.charAt(0).charCodeAt(0) + 1);
      for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          if (nk == to) return true;
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //right
      for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          if (nk == to) return true;
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //top
      for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          if (nk == to) return true;
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //bottom
      for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          if (nk == to) return true;
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
    } else if (piece == "boat") {
      //left
      //console.log(piece);
      // console.log(iconKey.charAt(0).charCodeAt(0) + 1);
      for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          if (nk == to) return true;
          // makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //right
      for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          if (nk == to) return true;
          // makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //top
      for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          if (nk == to) return true;
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //bottom
      for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          if (nk == to) return true;
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
    } else if (piece == "horse-black") {
      //now it's a interesting logic
      //horse can do 8 moves
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //1
      if (
        col - 2 >= 65 &&
        row + 1 <= 7 &&
        checkPosition(String.fromCharCode(col - 2) + (row + 1))
      ) {
        if (String.fromCharCode(col - 2) + (row + 1) == to) {
          return true;
        }
      }
      //2
      if (
        col - 2 >= 65 &&
        row - 1 >= 0 &&
        checkPosition(String.fromCharCode(col - 2) + (row - 1))
      ) {
        if (String.fromCharCode(col - 2) + (row - 1) == to) {
          return true;
        }
      }
      //3
      if (
        col - 1 >= 65 &&
        row - 2 >= 0 &&
        checkPosition(String.fromCharCode(col - 1) + (row - 2))
      ) {
        if (String.fromCharCode(col - 1) + (row - 2) == to) {
          return true;
        }
      }
      //4
      if (
        col + 1 <= 72 &&
        row - 2 >= 0 &&
        checkPosition(String.fromCharCode(col + 1) + (row - 2))
      ) {
        if (String.fromCharCode(col + 1) + (row - 2) == to) {
          return true;
        }
      }
      //5
      if (
        col + 2 <= 72 &&
        row - 1 >= 0 &&
        checkPosition(String.fromCharCode(col + 2) + (row - 1))
      ) {
        if (String.fromCharCode(col + 2) + (row - 1) == to) {
          return true;
        }
      }
      //6
      if (
        col + 2 <= 72 &&
        row + 1 <= 7 &&
        checkPosition(String.fromCharCode(col + 2) + (row + 1))
      ) {
        if (String.fromCharCode(col + 2) + (row + 1) == to) {
          return true;
        }
      }
      //7
      if (
        col - 1 >= 65 &&
        row + 2 <= 7 &&
        checkPosition(String.fromCharCode(col - 1) + (row + 2))
      ) {
        if (String.fromCharCode(col - 1) + (row + 2) == to) {
          return true;
        }
      }
      //8
      if (
        col + 1 <= 72 &&
        row + 2 <= 7 &&
        checkPosition(String.fromCharCode(col + 1) + (row + 2))
      ) {
        if (String.fromCharCode(col + 1) + (row + 2) == to) {
          return true;
        }
      }
    } else if (piece == "horse") {
      //now it's a interesting logic
      //horse can do 8 moves
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //1
      if (
        col - 2 >= 65 &&
        row + 1 <= 7 &&
        checkPosition(String.fromCharCode(col - 2) + (row + 1))
      )
        if (String.fromCharCode(col - 2) + (row + 1) == to) {
          return true;
        }
      //2
      if (
        col - 2 >= 65 &&
        row - 1 >= 0 &&
        checkPosition(String.fromCharCode(col - 2) + (row - 1))
      )
        if (String.fromCharCode(col - 2) + (row - 1) == to) {
          return true;
        }
      //3
      if (
        col - 1 >= 65 &&
        row - 2 >= 0 &&
        checkPosition(String.fromCharCode(col - 1) + (row - 2))
      )
        if (String.fromCharCode(col - 1) + (row - 2) == to) {
          return true;
        }
      //4
      if (
        col + 1 <= 72 &&
        row - 2 >= 0 &&
        checkPosition(String.fromCharCode(col + 1) + (row - 2))
      )
        if (String.fromCharCode(col + 1) + (row - 2) == to) {
          return true;
        }
      //5
      if (
        col + 2 <= 72 &&
        row - 1 >= 0 &&
        checkPosition(String.fromCharCode(col + 2) + (row - 1))
      )
        if (String.fromCharCode(col + 2) + (row - 1) == to) {
          return true;
        }
      //6
      if (
        col + 2 <= 72 &&
        row + 1 <= 7 &&
        checkPosition(String.fromCharCode(col + 2) + (row + 1))
      )
        if (String.fromCharCode(col + 2) + (row + 1) == to) {
          return true;
        }
      //7
      if (
        col - 1 >= 65 &&
        row + 2 <= 7 &&
        checkPosition(String.fromCharCode(col - 1) + (row + 2))
      )
        if (String.fromCharCode(col - 1) + (row + 2) == to) {
          return true;
        }
      //8
      if (
        col + 1 <= 72 &&
        row + 2 <= 7 &&
        checkPosition(String.fromCharCode(col + 1) + (row + 2))
      )
        if (String.fromCharCode(col + 1) + (row + 2) == to) {
          return true;
        }
    } else if (piece == "elephant-black") {
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //left diagonal top
      for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal top
      for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //left diagonal bottom
      for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal bottom
      for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
    } else if (piece == "elephant") {
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //left diagonal top
      for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal top
      for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //left diagonal bottom
      for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal bottom
      for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          if (String.fromCharCode(i) + j == to) return true;
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
    } else if (piece == "queen") {
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //left diagonal top
      for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal top
      for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //left diagonal bottom
      for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal bottom
      for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "black")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //left

      for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //right
      for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //top
      for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //bottom
      for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "black")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
    } else if (piece == "queen-black") {
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //left diagonal top
      for (let i = col - 1, j = row - 1; i >= 65 && j >= 0; i--, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal top
      for (let i = col + 1, j = row - 1; i <= 72 && j >= 0; i++, j--) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //left diagonal bottom
      for (let i = col - 1, j = row + 1; i >= 65 && j <= 7; i--, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //right diagonal bottom
      for (let i = col + 1, j = row + 1; i <= 72 && j <= 7; i++, j++) {
        if (checkPosition(String.fromCharCode(i) + j)) {
          makeHighlight(String.fromCharCode(i) + j);
        } else {
          if (checkPositionenemy(String.fromCharCode(i) + j, "white")) {
            makeHighlightwarn(String.fromCharCode(i) + j);
          }
          break;
        }
      }
      //left

      for (let i = iconKey.charAt(0).charCodeAt(0) + 1; i <= 72; i++) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //right
      for (let i = iconKey.charAt(0).charCodeAt(0) - 1; i >= 65; i--) {
        const nk = String.fromCharCode(i) + iconKey.charAt(1);
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //top
      for (let i = parseInt(iconKey.charAt(1)) - 1; i >= 0; i--) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
      //bottom
      for (let i = parseInt(iconKey.charAt(1)) + 1; i <= 7; i++) {
        const nk = iconKey.charAt(0) + i;
        if (checkPosition(nk)) {
          makeHighlight(nk);
        } else {
          if (checkPositionenemy(nk, "white")) {
            makeHighlightwarn(nk);
          }
          break;
        }
      }
    } else if (piece == "king-black") {
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //top-left
      if (col - 1 >= 65 && row - 1 >= 0) {
        if (checkPosition(String.fromCharCode(col - 1) + (row - 1))) {
          makeHighlight(String.fromCharCode(col - 1) + (row - 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col - 1) + (row - 1), "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col - 1) + (row - 1));
        }
      }
      //top
      if (row - 1 >= 0) {
        if (checkPosition(String.fromCharCode(col) + (row - 1))) {
          makeHighlight(String.fromCharCode(col) + (row - 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col) + (row - 1), "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col) + (row - 1));
        }
      }
      //top-right
      if (col + 1 <= 72 && row - 1 >= 0) {
        if (checkPosition(String.fromCharCode(col + 1) + (row - 1))) {
          makeHighlight(String.fromCharCode(col + 1) + (row - 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col + 1) + (row - 1), "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col + 1) + (row - 1));
        }
      }
      //right
      if (col + 1 <= 72) {
        if (checkPosition(String.fromCharCode(col + 1) + row)) {
          makeHighlight(String.fromCharCode(col + 1) + row);
        } else if (
          checkPositionenemy(String.fromCharCode(col + 1) + row, "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col + 1) + row);
        }
      }
      //right-bottom
      if (col + 1 <= 72 && row + 1 <= 8) {
        if (checkPosition(String.fromCharCode(col + 1) + (row + 1))) {
          makeHighlight(String.fromCharCode(col + 1) + (row + 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col + 1) + (row + 1), "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col + 1) + (row + 1));
        }
      }
      //bottom
      if (row + 1 <= 8) {
        if (checkPosition(String.fromCharCode(col) + (row + 1))) {
          makeHighlight(String.fromCharCode(col) + (row + 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col) + (row + 1), "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col) + (row + 1));
        }
      }
      //bottom-left
      if (col - 1 >= 65 && row + 1 <= 8) {
        if (checkPosition(String.fromCharCode(col - 1) + (row + 1))) {
          makeHighlight(String.fromCharCode(col - 1) + (row + 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col - 1) + (row + 1), "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col - 1) + (row + 1));
        }
      }
      //left
      if (col - 1 >= 65) {
        if (checkPosition(String.fromCharCode(col - 1) + row)) {
          makeHighlight(String.fromCharCode(col - 1) + row);
        } else if (
          checkPositionenemy(String.fromCharCode(col - 1) + row, "white")
        ) {
          makeHighlightwarn(String.fromCharCode(col - 1) + row);
        }
      }
    } else if (piece == "king") {
      const col = iconKey.charAt(0).charCodeAt(0);
      const row = parseInt(iconKey.charAt(1));
      //top-left
      if (col - 1 >= 65 && row - 1 >= 0) {
        if (checkPosition(String.fromCharCode(col - 1) + (row - 1))) {
          makeHighlight(String.fromCharCode(col - 1) + (row - 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col - 1) + (row - 1), "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col - 1) + (row - 1));
        }
      }
      //top
      if (row - 1 >= 0) {
        if (checkPosition(String.fromCharCode(col) + (row - 1))) {
          makeHighlight(String.fromCharCode(col) + (row - 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col) + (row - 1), "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col) + (row - 1));
        }
      }
      //top-right
      if (col + 1 <= 72 && row - 1 >= 0) {
        if (checkPosition(String.fromCharCode(col + 1) + (row - 1))) {
          makeHighlight(String.fromCharCode(col + 1) + (row - 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col + 1) + (row - 1), "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col + 1) + (row - 1));
        }
      }
      //right
      if (col + 1 <= 72) {
        if (checkPosition(String.fromCharCode(col + 1) + row)) {
          makeHighlight(String.fromCharCode(col + 1) + row);
        } else if (
          checkPositionenemy(String.fromCharCode(col + 1) + row, "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col + 1) + row);
        }
      }
      //right-bottom
      if (col + 1 <= 72 && row + 1 <= 8) {
        if (checkPosition(String.fromCharCode(col + 1) + (row + 1))) {
          makeHighlight(String.fromCharCode(col + 1) + (row + 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col + 1) + (row + 1), "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col + 1) + (row + 1));
        }
      }
      //bottom
      if (row + 1 <= 8) {
        if (checkPosition(String.fromCharCode(col) + (row + 1))) {
          makeHighlight(String.fromCharCode(col) + (row + 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col) + (row + 1), "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col) + (row + 1));
        }
      }
      //bottom-left
      if (col - 1 >= 65 && row + 1 <= 8) {
        if (checkPosition(String.fromCharCode(col - 1) + (row + 1))) {
          makeHighlight(String.fromCharCode(col - 1) + (row + 1));
        } else if (
          checkPositionenemy(String.fromCharCode(col - 1) + (row + 1), "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col - 1) + (row + 1));
        }
      }
      //left
      if (col - 1 >= 65) {
        if (checkPosition(String.fromCharCode(col - 1) + row)) {
          makeHighlight(String.fromCharCode(col - 1) + row);
        } else if (
          checkPositionenemy(String.fromCharCode(col - 1) + row, "black")
        ) {
          makeHighlightwarn(String.fromCharCode(col - 1) + row);
        }
      }
    }
  }
  //clear border highlight
  function clearborderHighlight() {
    clickPreserve.forEach((el) => {
      const element = document.getElementById(el);
      if (element) {
        element.classList.remove("bg-cell-border-highlight");
      }
    });
    clickPreserve = [];
  }
  //highlight the cell
  //save it in prev state
  function handleMove(iconKey: string) {
    //check for position is null or not
    if (!checkPosition(iconKey)) {
      //clear all prev selected
      clearborderHighlight();
      makeborderHighlight(iconKey);
      console.log(clickPreserve);
    } else {
      if (clickPreserve.length > 0) {
        console.log(clickPreserve + "click");
        const piecePos = clickPreserve[clickPreserve.length - 1];
        if (movePossible(piecePos, iconKey)) {
          console.log("move possible");
          const to: keyof Position = iconKey as keyof Position;
          const from: keyof Position = piecePos as keyof Position;
          const newPosition = [...iconPosition];

          // Perform the move
          const temp = newPosition[0][to];
          newPosition[0][to] = newPosition[0][from];
          newPosition[0][from] = temp;

          // Update the state with the new position object
          setIconPosition(newPosition); // New object ensures re-render
          //changes
          clearborderHighlight();
          removedisplayMoves();
        }
      }
    }
  }
  return (
    <div className="ch-row">
      {Array.from({ length: 8 }, (_, colindex) => (
        <>
          <div key={colindex} className="ch-col">
            {/* for loop from 1 to 8 */}
            {Array.from({ length: 8 }, (_, index) => {
              const iconKey: keyof Position = `${String.fromCharCode(
                index + 65
              )}${colindex}` as keyof Position;

              return (
                <button
                  key={iconKey}
                  id={iconKey}
                  className={`cell ${
                    colindex % 2 == 0
                      ? index % 2 === 0
                        ? "bg-cell-wh"
                        : "bg-cell-black"
                      : index % 2 === 0
                      ? "bg-cell-black"
                      : "bg-cell-wh"
                  }`}
                  onMouseOver={() => displayMoves(iconKey, iconKey)}
                  onMouseOut={() => removedisplayMoves()}
                  onClick={() => handleMove(iconKey)}
                >
                  {/* indexes
                  {String.fromCharCode(index + 65)}
                  {colindex}
                  {} */}
                  {iconPosition.length > 0 &&
                  iconPosition[0] &&
                  iconPosition[0][iconKey] != null ? (
                    <Image
                      key={iconKey}
                      src={`./icons/${iconPosition[0][iconKey]}.svg`}
                      alt="My Icon"
                      width={50}
                      height={50}
                    />
                  ) : (
                    ""
                  )}
                </button>
              );
            })}
          </div>
        </>
      ))}
    </div>
  );
}
