import React from "react";
import { func } from "prop-types";
import FuelSavingsResults from "./FuelSavingsResults";
import FuelSavingsTextInput from "./FuelSavingsTextInput";
import { fuelSavings } from "../types";

const FuelSavingsForm = ({
  fuelSavings,
  onSaveClick,
  onChange,
  saveCompleted
}) => (
  <div>
    <h2>Fuel Savings Analysis</h2>
    <table>
      <tbody>
        <tr>
          <td>
            <label htmlFor="newMpg">New Vehicle MPG</label>
          </td>
          <td>
            <FuelSavingsTextInput
              id="newMpg"
              onChange={onChange}
              name="newMpg"
              value={fuelSavings.newMpg}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="tradeMpg">Trade-in MPG</label>
          </td>
          <td>
            <FuelSavingsTextInput
              id="tradeMpg"
              onChange={onChange}
              name="tradeMpg"
              value={fuelSavings.tradeMpg}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="newPpg">New Vehicle price per gallon</label>
          </td>
          <td>
            <FuelSavingsTextInput
              id="newPpg"
              onChange={onChange}
              name="newPpg"
              value={fuelSavings.newPpg}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="tradePpg">Trade-in price per gallon</label>
          </td>
          <td>
            <FuelSavingsTextInput
              id="tradePpg"
              onChange={onChange}
              name="tradePpg"
              value={fuelSavings.tradePpg}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="milesDriven">Miles Driven</label>
          </td>
          <td>
            <FuelSavingsTextInput
              id="milesDriven"
              onChange={onChange}
              name="milesDriven"
              value={fuelSavings.milesDriven}
            />
            miles per
            <select
              id="milesDrivenTimeframe"
              name="milesDrivenTimeframe"
              onChange={onChange}
              value={fuelSavings.milesDrivenTimeframe}
            >
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>Date Modified</label>
          </td>
          <td>{fuelSavings.dateModified}</td>
        </tr>
      </tbody>
    </table>

    <hr />

    {fuelSavings.necessaryDataIsProvidedToCalculateSavings && (
      <div>
        <FuelSavingsResults savings={fuelSavings.savings} />
        <input type="submit" id="save" value="Save" onClick={onSaveClick} />
      </div>
    )}

    {saveCompleted && <div id="saveCompleted">Saved! <span role="img" aria-label="Party">????</span></div>}
  </div>
);

FuelSavingsForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  fuelSavings: fuelSavings.isRequired
};

export default FuelSavingsForm;
