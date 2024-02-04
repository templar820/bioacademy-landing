import React, { useCallback, useState } from 'react';
import './index.scss';
import {
  Button,
  Checkbox, FormControlLabel, Link, TextField, Typography
} from '@mui/material';
import { isMobile } from 'react-device-detect';
import UTILS from '../../../utils';
import ETypeWrapper = PopupsContainerModel.ETypeWrapper;
import arrow2 from '$images/arrow2.png';
import SvgIcons from '$common/SvgIcons';
import { useRootService } from '$hooks/useRootService';
import { PopupsService } from '$popup-service/model/PopupsService';
import CenterWrapper from '$popup-service/components/CenterWrapper';
import { PopupsContainerModel } from '$popup-service/model/Common';
import { useRootStore } from '$hooks/useRootStore';

function FeedBackForm(props) {
  const caption = 'ЗАПИШИСЬ НА ПРОБНОЕ ЗАНЯТИЕ';
  const free = 'Бесплатно';
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(false);

  const service = useRootService().SheetService;
  const store = useRootStore().AppStore;
  
  
  const createRow = async () => {
    const response = await service.createRow(name, secondName, email, phone);
    if (response){
      const propsData= {
        title: "Поздравляем!",
        body: "Ваша заявка создана успешно. Ожидайте новостей на электронную почту"
      };
      store.setLoader(null);
      PopupsService.open({
        type: ETypeWrapper.CENTER,
        component: (
          <CenterWrapper
            title={propsData.title}
            body={propsData.body}
          />
        ),
      });
    }
  };
  
  const debounceCreateRow = UTILS.debounce(createRow, 1000, false);
  

  return (
    <div id="invite" className="FeedBackForm" onClick={() => {
    }}>
      <div className="feedback-banner container d-flex flex-row w-100 gap-5">
        <div className="d-flex flex-column">
          <Typography color="black" variant="h2">
            {caption.toUpperCase()}
          </Typography>
          <Typography color="white" variant="h2">
            {free.toUpperCase()}
          </Typography>
          {!isMobile && <img className="align-self-end" width={178} src={arrow2} />}
          <div className="feedback-icons d-flex flex-row gap-4">
            <SvgIcons width={44} height={44} name="telegram" />
            <SvgIcons width={44} height={44} name="whatsapp" />
          </div>
        </div>
        <form
          className="d-flex flex-column"
          onSubmit={async e => {
            e.preventDefault();
            e.stopPropagation();
            store.startLoader();
            debounceCreateRow();
          }}
        >
          <TextField
            required
            placeholder="Ваше имя"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            required
            placeholder="Ваша фамилия"
            value={secondName}
            onChange={e => setSecondName(e.target.value)}
          />
          <TextField
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            required
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <FormControlLabel
            labelPlacement="end"
            required
            control={(
              <Checkbox
                value={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
                style={{
                  color: 'white'
                }}
                required
              />
            )}
            label={(
              <div className="d-flex flex-row gap-2">
                <Typography variant="body2" color="white" style={{ textDecoration: 'underline' }}>
                  Даю согласие на обработку персональных данных
                </Typography>
              </div>
            )}
          />
          <Button size="large" variant="contained" type="submit" color="primary">
            Бесплатное занятие
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FeedBackForm;
