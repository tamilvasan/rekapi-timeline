import React from 'react';

const Header = ({ name }) =>
  <h1 className="keyframe-property-name">
    { name || 'Details' }
  </h1>;

const AddButton = ({ handleAddKeyframeButtonClick }) =>
  <button
    className="icon-button add"
    title="Add a new keyframe to the current track"
    onClick={handleAddKeyframeButtonClick}
  >
    <i className="glyphicon glyphicon-plus"></i>
  </button>

const DeleteButton = ({ handleDeleteKeyframeButtonClick }) =>
  <button
    className="icon-button delete"
    title="Remove the currently selected keyframe"
    onClick={handleDeleteKeyframeButtonClick}
  >
    <i className="glyphicon glyphicon-minus"></i>
  </button>

const MillisecondInput = ({ millisecond, handleMillisecondInputChange }) =>
  <label className="label-input-pair row keyframe-property-millisecond">
    <p>Millisecond:</p>
    <input
      className="property-millisecond"
      type="number"
      value={millisecond === undefined ?  '' : millisecond}
      name="millisecond"
      min="0"
      onChange={handleMillisecondInputChange}
    />
  </label>

const EasingSelect = ({ easingCurves, handleEasingSelectChange }) =>
  <label className="label-input-pair row select-container keyframe-property-easing">
    <p>Easing:</p>
    <select
      name="easing"
      onChange={handleEasingSelectChange}
    >
      {easingCurves.map(
        easingCurve => <option key={easingCurve}>{easingCurve}</option>
      )}
    </select>
  </label>

const Details = ({
  keyframeProperty = {},
  easingCurves = [],
  handleAddKeyframeButtonClick,
  handleDeleteKeyframeButtonClick,
  handleMillisecondInputChange,
  handleEasingSelectChange
}) => (
  <div className="details">
    <Header name={keyframeProperty.name} />
    <div className="add-delete-wrapper">
      <AddButton handleAddKeyframeButtonClick={handleAddKeyframeButtonClick} />
      <DeleteButton handleDeleteKeyframeButtonClick={handleDeleteKeyframeButtonClick} />
    </div>
    <MillisecondInput
      millisecond={keyframeProperty.millisecond}
      handleMillisecondInputChange={handleMillisecondInputChange}
    />
    <EasingSelect
      easingCurves={easingCurves}
      handleEasingSelectChange={handleEasingSelectChange}
    />
  </div>
);

export default Details;
