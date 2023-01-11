import React from 'react'
import axios from "axios";

export default function Klantenlijst(klantenlijst) {
  return (
    klantenlijst.map(klanten => {
        return <Klantenlijst key={klanten} klantenlijst={klanten} />
    })
  )
}
