
import {CamerasLevel, CamerasFilterGroups} from '../../const/const.ts';
import {CameraLevelProps} from '../../../../types/types.ts';

const CameraLevel = ({onChangeHandler, filter}: CameraLevelProps) => {
  const groupValue = CamerasFilterGroups.level;

  return (
    <fieldset className="catalog-filter__block" data-testid="camera-level">
      <legend className="title title&#45;&#45;h5">{groupValue}</legend>
      {(Object.entries(CamerasLevel) as Array<[keyof typeof CamerasLevel, string]>).map(([key, value]) => (
        <div className="custom-checkbox catalog-filter__item" key={key}>
          <label>
            <input type="checkbox"
              name={key}
              checked={filter.level.includes(key)}
              onChange={onChangeHandler}
              value={key}
              data-group-name={groupValue}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">{value}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CameraLevel;
