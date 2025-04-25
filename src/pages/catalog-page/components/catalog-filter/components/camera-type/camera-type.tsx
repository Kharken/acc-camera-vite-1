import {CamerasType, CamerasFilterGroups, CamerasCategory} from '../../const/const.ts';
import {CameraTypeProps} from '../../../../types/types.ts';
import {useRef} from 'react';

const CameraType = ({onChangeHandler, filter}: CameraTypeProps) => {

  const groupValue = CamerasFilterGroups.type;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title&#45;&#45;h5">{groupValue}</legend>
      {(Object.entries(CamerasType) as Array<[keyof typeof CamerasType, string]>).map(([key, value]) => {
        const isDisabled = filter.category === CamerasCategory.videocamera && (key === 'film' || key === 'snapshot');
        return (
          <div className="custom-checkbox catalog-filter__item"
            key={key}
          >
            <label>
              <input
                ref={inputRef}
                type="checkbox"
                name={key}
                checked={!isDisabled && (filter.type.includes(key))}
                onChange={onChangeHandler}
                value={key}
                data-group-name={groupValue}
                disabled={isDisabled}
              />
              <span className="custom-checkbox__icon"/>
              <span className="custom-checkbox__label">{value}</span>
            </label>
          </div>
        );
      }
      )}
    </fieldset>
  );
};

export default CameraType;
