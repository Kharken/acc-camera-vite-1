
import {useAppSelector} from '../../../../../../app/hooks/hooks.ts';
import {getActualCamera, getCamerasList} from '../../../../../../store/slice/camera-slice/service/camera-selectors.ts';
import {getSortedList} from '../../../../../../utils/functions/get-sorted-list.ts';
import {ChangeEvent} from 'react';
import {PriceRangeProps} from '../../../../types/types.ts';


const PriceRange = ({onChangeHandler, filter, setFilter}: PriceRangeProps) => {

  const cameraListData = useAppSelector(getCamerasList);
  const actualCamerasList = useAppSelector(getActualCamera);
  const sortedActualCamerasList = getSortedList([...actualCamerasList], (a, b) => (
    a.price - b.price
  ));

  const dataLength = cameraListData.length;
  const sortedLength = sortedActualCamerasList.length;

  const PLACEHOLDER_LOW_DEFAULT = '1990';
  const PLACEHOLDER_HIGH_DEFAULT = '199000';

  const placeholderLow = sortedActualCamerasList[0]?.price.toString() || cameraListData[0]?.price.toString() || PLACEHOLDER_LOW_DEFAULT;
  const placeholderHigh = sortedActualCamerasList[sortedLength - 1]?.price.toString() || cameraListData[dataLength - 1]?.price.toString() || PLACEHOLDER_HIGH_DEFAULT;

  const checkPriceInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.name === 'price' && +filter.priceFrom < parseInt(placeholderLow, 10)) {
      setFilter((prevState) => ({...prevState, priceFrom: placeholderLow}));
    } else if (evt.target.name === 'priceUp' && +filter.priceTo > parseInt(placeholderHigh, 10)) {
      setFilter((prevState) => ({...prevState, priceTo: placeholderHigh}));
    } else if(+filter.priceTo < +filter.priceFrom) {
      setFilter((prevState) => ({...prevState, priceTo: placeholderHigh}));
    }
  };

  return (
    <fieldset className="catalog-filter__block" data-testid="price-range">
      <legend className="title title&#45;&#45;h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              value={filter.priceFrom}
              type="number"
              name="price"
              placeholder={placeholderLow}
              onChange={onChangeHandler}
              onBlur={checkPriceInputValue}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              value={filter.priceTo}
              onChange={onChangeHandler}
              onBlur={checkPriceInputValue}
              type="number"
              name="priceUp"
              placeholder={placeholderHigh}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default PriceRange;
