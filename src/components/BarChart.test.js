import React from "react"
import { render, } from "@testing-library/react"
import BarChart from "./BarChart"



it("BarChart renders correctly", () => {
    const { queryByTitle } = render(<BarChart />)
    expect(queryByTitle("chart")).toBeTruthy()
})